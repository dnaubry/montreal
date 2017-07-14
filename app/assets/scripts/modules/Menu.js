import $ from 'jquery';
import 'jquery-smooth-scroll';

var Menu = (function() {
  var init = function() {
    function toggleMenu() {
      $('.nav').slideToggle();
      $('.menu-icon-close').fadeToggle();
    }

    $('.menu-icon').click(toggleMenu);

    $('.nav li a').smoothScroll({
      afterScroll: toggleMenu,
      speed: 'auto'
    });
  }

  return {
    init: init
  }
})();

export default Menu;
