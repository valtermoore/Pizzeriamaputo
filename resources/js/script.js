/* global $ */

/* eslint-env jquery */
let element;

element = document.forms;

console.log(element);

$(document).ready(function() {
    
    /* for sticky navigation */
    
    $('.js--section-features').waypoint(function(direction){
        if (direction=="down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    
    }, {
      offset:'72px;'  
    });
    
     /* Scroll on buttons */
    
    $('.js--scroll-to-features').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 200);
        
    });
    
    
    
    
    
    
    /*Navigation scroll- codigo para deixar o scroll entre links mais suave*/

    $(function() {
        // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    });
    

});