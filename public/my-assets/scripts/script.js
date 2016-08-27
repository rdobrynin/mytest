'use strict';

$(function () {
  // Global variables
    var ShoppingCartWrapper = $('.shopping-topcart-wrapper');
    var ShoppingCartItems = $('.shopping-topcart-items');
        // load cards json
        $.ajax({
            type: 'GET',
            url: 'cart/get',
            dataType:'json',
            cache: true,
            success: function (data) {
                if(data.items.length > 0) {
                    $('#total-qty-item').text(data.items.length);

                    $.each(data.items , function (index, value){
                        console.log(value);
                        ShoppingCartItems.append(
                            $('<li />').append(
                                $('<img />', {src: value.imgSrc, alt: value.name}),
                                    $('<span />', {text: value.name, 'class': 'title-cart'}),
                                    $('<span />', {text: value.qty + ' x \u20AC' + value.price, 'class': 'item-descr'}),
                                    $('<a />', {text: ' x ', 'class': 'remove-item'})
                            )
                        );
                    });

                    ShoppingCartWrapper.hover(
                        function () {
                            ShoppingCartItems.stop().slideDown("fast");
                        },

                        function () {
                                ShoppingCartItems.hide();
                        }
                    );

                    ShoppingCartItems.append(
                        $('<a />', {text: 'go to checkout', 'class': 'button'})
                    );
                }
            }
        });


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


    // remove item from top cart
    $('.remove-item', ShoppingCartItems).on('click', function(){
       alert('remove item: ' + $(this).closest('li').find('.title-cart').text());
    });
});
// end ready

