$(document).ready(function() {

  var docHeight = $(window).height();
  var footerHeight = $('#footer').height();
  var footerTop = $('#footer').position().top + footerHeight;

  if (footerTop < docHeight) {
    $('#footer').css('margin-top', 0 + (docHeight - footerTop) + 'px');
  }

  $('#scroll').click(function(){
    $('html, body').animate({
      scrollTop: $('#intro-about').offset().top
    }, 1000);
  })
});
