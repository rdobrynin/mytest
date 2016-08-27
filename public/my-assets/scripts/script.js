'use strict';

$(function () {
  // Global variables
  var ShoppingCart = $('#top-shopping-cart');


  ShoppingCart.hover(

      function () {
        console.log('in');
      },

      function () {
        console.log('out');
      }
  );


        // load carts json
        $.ajax({
            type: 'GET',
            url: 'cart/get',
            dataType:'json',
            success: function (data) {
                if(data.items.length > 0) {
                    console.log(data.items);
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
                $('.ajax-process', form).text('Subscribeing to newsletter');
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

