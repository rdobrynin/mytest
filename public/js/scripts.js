/* public/js/scripts.js */

    $(function() {
      $('#slides').slidesjs({
        width: 960,
        height: 305,
        navigation: false
      });
    });

var current = document.getElementById('default');

  function highlite(el)
  {
     if (current != null)
     {
         current.className = "";
     }
     el.className = "highlite";
     current = el;
  }

function hasPlaceholderSupport() {
  var input = document.createElement('input');
  return ('placeholder' in input);
}

if(!hasPlaceholderSupport()){
	var inputs = document.getElementsByTagName('input');
	for(var i=0,  count = inputs.length;i<count;i++){
		if(inputs[i].getAttribute('placeholder')){
			inputs[i].style.cssText = "color:#9fa8b0;font-style:normal;font-family:arial;"
			inputs[i].value = inputs[i].getAttribute("placeholder");
			inputs[i].onclick = function(){
				if(this.value == this.getAttribute("placeholder")){
					this.value = '';
					this.style.cssText = "color:#9fa8b0;font-style:normal;font-family:arial;"
				}
			}
			inputs[i].onblur = function(){
				if(this.value == ''){
					this.value = this.getAttribute("placeholder");
					this.style.cssText = "color:#9fa8b0;font-style:normal;font-family:arial;"
				}
			}
		}
	}
}

	div = {
		show: function(elem) {
			document.getElementById(elem).style.visibility = 'visible';
		},
		hide: function(elem) {
			document.getElementById(elem).style.visibility = 'hidden';
		}
	}

	$("[data-tooltip]").mousemove(function (eventObject) {

        $data_tooltip = $(this).attr("data-tooltip");
        
        $("#tooltip").text($data_tooltip)
                     .css({ 
                         "top" : eventObject.pageY + 18,
                        "left" : eventObject.pageX - 68
                     })
                     .show();

    }).mouseout(function () {

        $("#tooltip").hide()
                     .text("")
                     .css({
                         "top" : 0,
                        "left" : 0
                     });
    });


$(document).ready(function(){
	$("#tabsholder").tytabs({
							tabinit:"2",
							fadespeed:"fast"
							});
	$("#tabsholder2").tytabs({
							prefixtabs:"tabz",
							prefixcontent:"contentz",
							classcontent:"tabscontent",
							tabinit:"3",
							catchget:"tab2",
							fadespeed:"normal"
							});
});


     

		function isEmail(email) {
  			var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  			return regex.test(email);
		}


    
		
		function subscribe() {
			setTimeout(function() { $("#test").fadeOut(800, function(){
				$.ajax({ 
	             type: 'POST', 
                 url: 'newsletter/subscribe',  
                 data: 'email='+$("#email").val(),  
                 success: function(){  
                 $('.sub-wrapper').after('<span class="msg"><img src="images/accept.png" alt="accept">You are now subscribed to our newsletter. Thank you!</span>');
                 $('.msg').fadeOut(3100);
                 /*window.location.assign("newsletter/subscribe")*/
                
             }

                });

			});
			}, 2100);

			
		}
		
		var erdiv    = $("#error");
		var btnwrap  = $("#test");
		
		
		$(document).ready(function(){
			$(".submit").live("click", function(e){

				e.preventDefault();
				var emailval = $(".area").val();
				
				
				if(!isEmail(emailval)) {
					erdiv.html('<span class = "valid"><img src="images/error.png" alt="error"> Please enter a valid email address</span>').fadeOut(800);
					erdiv.css("display", "block");


				}
				
				if(isEmail(emailval)) {
					erdiv.css("color", "#000");
					erdiv.html("");
					btnwrap.html('<span class = "loading"><img src="images/ajax-loader.gif" alt="loading"> Subscribing...</span>');
					(subscribe(), 900);
				}
			});
		});

     var canvas = document.getElementById('box-1');
      var context = canvas.getContext('2d');
      context.beginPath();
      context.rect(8, 8, 300, 128);
      context.fillStyle = '#f1f1f1';
      context.fill();

      var canvas = document.getElementById('box-2');
      var context = canvas.getContext('2d');
      context.beginPath();
      context.rect(8, 8, 300, 124);
      context.fillStyle = '#f1f1f1';
      context.fill();

      var canvas = document.getElementById('box-3');
      var context = canvas.getContext('2d');
      context.beginPath();
      context.rect(8, 8, 290, 204);
      context.fillStyle = '#f1f1f1';
      context.fill();

      var canvas = document.getElementById('box-4');
      var context = canvas.getContext('2d');
      context.beginPath();
      context.rect(8, 8, 290, 49);
      context.fillStyle = '#f1f1f1';
      context.fill();

      var canvas = document.getElementById('box-5');
      var context = canvas.getContext('2d');
      context.beginPath();
      context.rect(8, 8, 297, 46);
      context.fillStyle = '#f1f1f1';
      context.fill();

      var canvas = document.getElementById('box-6');
      var context = canvas.getContext('2d');
      context.beginPath();
      context.rect(8, 8, 297, 206);
      context.fillStyle = '#f1f1f1';
      context.fill();


