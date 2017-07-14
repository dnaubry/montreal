import $ from 'jquery';
import 'cloudinary-jquery';
import Menu from './modules/Menu';
import Portfolio from './modules/Portfolio';
import Form from './modules/Form';
import ScrollToTop from './modules/ScrollToTop';

$.cloudinary.config({cloud_name: 'dna86', api_key: '888479551384617'});

$(document).ready(function() {
  Menu.init();
  Portfolio.init();
  Form.init();
  ScrollToTop.init();

  $('#who-we-are').click(function() {
    const height = $('#services').position();
    window.scrollTo(height.left, height.top);
  })

  $('#launch-project').click(function() {
    const height = $('#contact').position();
    window.scrollTo(height.left, height.top);
  });
});
