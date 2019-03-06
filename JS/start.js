$(".prod-carousel").flickity({
  cellAlign: "left",
  contain: true,
  imagesloaded: true,
  prevNextButtons: true,
  wrapAround: true,
  groupcells: true
});

$(function() {
  $("a[href^='#']")
    .not("a[href='#']")
    .click(function() {
      $(
        "#" +
          $(this)
            .attr("href")
            .slice(1) +
          ""
      ).focus();
    });
});
$(document).ready(function() {
	/* Toggle nav bar menu on click for mobile devices */
    $("#navToggle a").click(function(e){
        e.preventDefault();
        
        $("header > nav").slideToggle();
        $("header > div").toggleClass("menuUp menuDown");
		
	});
    
	$(".navicon-button").click(function(){
		$(this).toggleClass("open");
	});
});


$(".ebutton").click(function(validateEmail){
  return validateEmail;
})
/* taken from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript */
/* minor change from 'email' to 'emailinput' */

function validateEmail(emailinput) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}