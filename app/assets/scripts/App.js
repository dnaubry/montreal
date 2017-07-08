import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

$(document).ready(function() {
  function toggleMenu() {
    $('.nav').slideToggle();
    $('.menu-icon-close').fadeToggle();
  }

  $('.menu-icon').click(toggleMenu);

  $('.nav li a').smoothScroll({
    afterScroll: toggleMenu,
    speed: 'auto'
  });

  $('.input')
    .focus(function() {
      $('.label-' + this.id).addClass('label-focus');
      $(this).removeClass('input-warning');
    }).blur(function() {
      if (!$(this).val()) {
        $('.label-' + this.id).removeClass('label-focus');
        $(this).addClass('input-warning');
      } else {
        $(this).removeClass('input-warning');
      }
    });

  $('form').submit(function(event) {
    event.preventDefault();
    $('.contact__section').html(function() {
      return '<p>This is not a real form, but thanks!</p>';
    });
  });
});
