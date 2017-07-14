import $ from 'jquery';
import 'jquery-validation';

var Form = (function() {
  var init = function() {
    $('.input')
    .focus(function() {
      $('.label-' + this.id).addClass('label-focus');
    }).blur(function() {
      if (!$(this).val()) {
        $('.label-' + this.id).removeClass('label-focus');
      }
    });

    $('form').submit(function(event) {
      event.preventDefault();
    }).validate({
      submitHandler: function() {
        $('.contact__section').html(function() {
          return '<p>This is not a real form, but thanks!</p>';
        });
      },
      invalidHandler: function(event, validator) {
        const errors = validator.numberOfInvalids();
        if (errors) {
          const message = 'Please fill out all fields';
          $('.error').html(message);
          $('.error').show();
        } else {
          $('.error').hide();
        }
      },
      errorClass: 'invalid',
      rules: {
        name: 'required',
        mail: {
          required: true,
          email: true
        },
        subject: 'required',
        message: 'required'
      }
    });
  }

  return {
    init: init
  }
})();

export default Form;
