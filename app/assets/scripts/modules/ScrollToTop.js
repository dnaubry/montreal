import $ from 'jquery';

var ScrollToTop = (function() {
  var init = function() {
    const $scrollToTopIcon = $('.scroll-to-top');

    $scrollToTopIcon.click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 'slow');
      return false;
    });

    $(document).scroll(function() {
      if ($(document).scrollTop() >= 600) {
        $('.scroll-to-top').addClass('scroll-to-top--is-visible');
      } else {
        $('.scroll-to-top').removeClass('scroll-to-top--is-visible');
      }
    });
  }

  return {
    init: init
  }
})();

export default ScrollToTop;
