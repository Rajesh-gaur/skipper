/*$(document).ready(function () {
    var sticky_navigation_offset_top = $('.header').offset().top;
   
       var sticky_navigation = function () {
           var scroll_top = $(window).scrollTop();
           if (scroll_top > sticky_navigation_offset_top) {
               $('.header').addClass("headerfixed");
               $('.header').removeClass("headerrelative");
   
           } else {
               $('.header').removeClass("headerfixed");
               $('.header').addClass("headerrelative");
   
           }
       };
   
   
       sticky_navigation();
   
      
       $(window).scroll(function () {
           sticky_navigation();
       });
    });
*/

$(document).ready(function () {
$(window).scroll(function() {
    
    if ($(this).scrollTop() < $('section[class="home-slider"]').offset().top) {
        console.log( $('section[class="join-devnagri"]').offset().top);
        console.log($(this).scrollTop());
       $('.fixed').addClass('active');
       
    }
    else if ($(this).scrollTop() >= $('section[class="join-devnagri"]').offset().top) {
       console.log( $('section[class="join-devnagri"]').offset().top); 
      $('.fixed').removeClass('active');
      $('.fixed').addClass('active1');
    }
    else if ($(this).scrollTop() >= $('section[class="process-devnagri"]').offset().top) {
        alert($('section[class="process-devnagri"]').offset().top) ;
      $('.fixed').removeClass('active1');
      $('.fixed').addClass('active2');
    }
    else if ($(this).scrollTop() >= $('section[class="joint-commity"]').offset().top) {
      $('.fixed').removeClass('active2');
      $('.fixed').addClass('active3');
    }
  

});
});


// When the user scrolls down 20px from the top of the document, show the button
/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
*/


