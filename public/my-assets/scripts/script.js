'use strict';

$(function () {
  // Global variables
    var windowObject = $(window),
        rootObject = $('html'),
        ShoppingCartWrapper = $('.shopping-topcart-wrapper'),
        ShoppingCartItems = $('.shopping-topcart-items'),
        ShoppingCartMobile = $('.minicart'),
        hamburger = $('.menu-hamburger');



   var toggleRootClass = function(rootObject) {
       if (windowObject.width() < 767) {
           rootObject.addClass('mobile');
           rootObject.removeClass('desktop');
       } else {
           rootObject.removeClass('mobile');
           rootObject.addClass('desktop');
       }
    };
    toggleRootClass(rootObject);
    windowObject.resize(function() {
        toggleRootClass(rootObject);
        ShoppingCartItems.hide();
    }).resize(); // trigger resize event initially


    var AjaxCartItemCacheGet ={
        url: 'cart/get',
        init: function(){
                AjaxCartItemCacheGet.requestData();
        },

        requestData: function(){
            var self = AjaxCartItemCacheGet;
            //localStorage.clear();
            // Ajax Query
            $.ajax({
                url: self.url,
                type: 'GET',
                dataType: 'json',
                localCache   : true,
                cacheTTL     : 1/60,  // in hours
                cacheKey     : 'post',
                isCacheValid : function(){
                return true;
            },
                success: function(data){
                    self.update(data);
                },
                error: function(data){
                    self.error(data)
                }
            });
        },

        update: function(Data){
            var self = AjaxCartItemCacheGet;
            console.log(Data);
            if(Data.items.length > 0) {
                $('#total-qty-item').text(Data.items.length);
                var itemSumma = parseFloat(0);
                $.each(Data.items , function (index, value){
                    ShoppingCartItems.append(
                        $('<li />').append(
                            $('<img />', {src: value.imgSrc, alt: value.name}),
                            $('<span />', {text: value.name, 'class': 'title-cart'}),
                            $('<span />', {text : value.qty + ' x \u20AC' + value.price, 'class': 'item-descr'}),
                            $('<a />', {text: ' x ', 'class': 'remove-item'})
                        )
                    );
                    itemSumma = parseFloat(itemSumma) +  parseFloat(value.price);
                });

                $('span.price', $("#top-shopping-cart")).text(Data.totalPrice);
                if(rootObject.hasClass('desktop')) {
                    ShoppingCartWrapper.hover(
                        function () {
                            ShoppingCartItems.stop().slideDown("fast");
                        },

                        function () {
                            ShoppingCartItems.hide();
                        }
                    );
                }
                else if(rootObject.hasClass('mobile')) {
                    $('#top-shopping-cart').on("click", function(){
                        ShoppingCartItems.toggle();
                    });
                }
                ShoppingCartItems.append(
                    $('<a />', {href: 'javascript:void(0);', onclick: 'alert("checkout")', text: 'go to checkout', 'class': 'button'})
                );
            }
        },

        error: function(Data){
            console.log('Failed to get data');
        }
    };

    hamburger.click(function() {
        $(".navigation").toggle();
    });

    AjaxCartItemCacheGet.init();

//     Newsletter subscribe
    $('form#subscribe').submit(function(event) {
        event.preventDefault();
        var form = $(this);
        $.ajax({
            type: 'GET',
            url: "newsletter/subscribe",
            data: form.serialize(),
            beforeSend: function() {
                $('.ajax-process', form).show();
                $('.ajax-process', form).removeClass('success').removeClass('error');
                $('.ajax-process', form).text('Subscribing to newsletter');
            },
            success: function(data) {
                setTimeout(function(){
                    console.log(data);

                    if(data.success == true) {
                        $('.ajax-process', form).text(data.email);
                        $('.ajax-process', form).addClass('success');
                    }
                    else if(data.success == false) {
                        $('.ajax-process', form).text(data.email);
                        $('.ajax-process', form).addClass('error');
                    }
                }, 1000);

            },
            error: function(xhr) {
                // if error occured
                console.log(xhr);
            },
            complete: function() {
                console.info('ajax completed');
            },
            dataType: 'json'
        });
    });
});
// end ready

