/**
 * https://github.com/SaneMethod/jquery-ajax-localstorage-cache
 */
; (function($, window){
    /**
     * Generate the cache key under which to store the local data - either the cache key supplied,
     * or one generated from the url, the type and, if present, the data.
     */
    var genCacheKey = function (options) {
        var url = options.url.replace(/jQuery.*/, '');

        // Strip _={timestamp}, if cache is set to false
        if (options.cache === false) {
            url = url.replace(/([?&])_=[^&]*/, '');
        }

        return options.cacheKey || url + options.type + (options.data || '');
    };

    /**
     * Determine whether we're using localStorage or, if the user has specified something other than a boolean
     * value for options.localCache, whether the value appears to satisfy the plugin's requirements.
     * Otherwise, throw a new TypeError indicating what type of value we expect.
     * @param {boolean|object} storage
     * @returns {boolean|object}
     */
    var getStorage = function(storage){
        if (!storage) return false;
        if (storage === true) return window.localStorage;
        if (typeof storage === "object" && 'getItem' in storage &&
            'removeItem' in storage && 'setItem' in storage)
        {
            return storage;
        }
        throw new TypeError("localCache must either be a boolean value, " +
            "or an object which implements the Storage interface.");
    };

    /**
     * Remove the item specified by cacheKey and its attendant meta items from storage.
     * @param {Storage|object} storage
     * @param {string} cacheKey
     */
    var removeFromStorage = function(storage, cacheKey){
        storage.removeItem(cacheKey);
        storage.removeItem(cacheKey + 'cachettl');
        storage.removeItem(cacheKey + 'dataType');
    };


    $.ajaxPrefilter(function(options){
        var storage = getStorage(options.localCache),
            hourstl = options.cacheTTL || 5,
            cacheKey = genCacheKey(options),
            cacheValid = options.isCacheValid,
            ttl,
            value;

        if (!storage) return;
        ttl = storage.getItem(cacheKey + 'cachettl');

        if (cacheValid && typeof cacheValid === 'function' && !cacheValid()){
            removeFromStorage(storage, cacheKey);
            ttl = 0;
        }

        if (ttl && ttl < +new Date()){
            removeFromStorage(storage, cacheKey);
            ttl = 0;
        }

        value = storage.getItem(cacheKey);
        if (!value){
            // If it not in the cache, we store the data, add success callback - normal callback will proceed
            if (options.success) {
                options.realsuccess = options.success;
            }
            options.success = function(data, status, jqXHR) {
                var strdata = data,
                    dataType = this.dataType || jqXHR.getResponseHeader('Content-Type');

                if (dataType.toLowerCase().indexOf('json') !== -1) strdata = JSON.stringify(data);

                // Save the data to storage catching exceptions (possibly QUOTA_EXCEEDED_ERR)
                try {
                    storage.setItem(cacheKey, strdata);
                    // Store timestamp and dataType
                    storage.setItem(cacheKey + 'cachettl', +new Date() + 1000 * 60 * 60 * hourstl);
                    storage.setItem(cacheKey + 'dataType', dataType);
                } catch (e) {
                    // Remove any incomplete data that may have been saved before the exception was caught
                    removeFromStorage(storage, cacheKey);
                    console.log('Cache Error:'+e, cacheKey, strdata);
                }

                if (options.realsuccess) options.realsuccess(data, status, jqXHR);
            };
        }
    });


    $.ajaxTransport("+*", function(options){
        if (options.localCache)
        {
            var cacheKey = genCacheKey(options),
                storage = getStorage(options.localCache),
                dataType = options.dataType || storage.getItem(cacheKey + 'dataType') || 'text',
                value = (storage) ? storage.getItem(cacheKey) : false;

            if (value){
                // In the cache? Get it, parse it to json if the dataType is JSON,
                // and call the completeCallback with the fetched value.
                if (dataType.toLowerCase().indexOf('json') !== -1) value = JSON.parse(value);
                return {
                    send: function(headers, completeCallback) {
                        var response = {};
                        response[dataType] = value;
                        completeCallback(200, 'success', response, '');
                    },
                    abort: function() {
                        console.log("Aborted ajax transport for json cache.");
                    }
                };
            }
        }
    });
})(jQuery, window);