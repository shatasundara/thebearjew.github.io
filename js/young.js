$(document).ready(function() {
  $('#scroll').click(function(){
    $('html, body').animate({
        scrollTop: $('#intro-about').offset().top
    }, 2000);
  })
});