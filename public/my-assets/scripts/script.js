'use strict';

$(function () {
  console.log('check script');

  $('.button').click(function () {
    alert('privet');
  });

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


    ShoppingCart.click(function() {
        $.ajax({
            type: 'GET',
            url: 'cart/get',
            dataType:'json',
            success: function (data) {
          console.log(data)
            }
        });
    });


});
// end ready

