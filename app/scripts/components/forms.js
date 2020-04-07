import $ from "jquery";
import select2 from 'select2';
import 'jquery.maskedinput/src/jquery.maskedinput';

let forms = {
  init: function() {
    this.select2Init();
    this.askQuestionForm();
    this.subscriptionForm();
  },

  select2Init: function() {
    $(".select2-field").each((key,item)=>{
      $(item).select2({
        language: "ru",
        dropdownParent: $(item).parent()
      })
    })
  },

  askQuestionForm: function() {
    var formData = {
      'username': $('form.contact-box-form input[name=name]'),
      'telephone': $('form.contact-box-form input[name=phone]'),
      'email': $('form.contact-box-form input[name=email]'),
      'question': $('form.contact-box-form textarea[name=question]')
    };
    
    formData['telephone'].mask("+9 (999) 999-9999", {
      placeholder:"+7 (___) ___ - __ - __" 
    });

    $('form.contact-box-form button.main-link').click(function(event){
      $('.main-field').removeClass('error');
      $('.main-checkbox-name').find('p').css({'color': '#312930'});

      var agreeData = $('form.contact-box-form input[name=agree]:checked');

      for(var value in formData) {
        if(formData[value].val() == '' || formData[value].val() == undefined) {
          var getParent = formData[value].parent();

          if(!getParent.children('.main-field-addon').length) {
            getParent.addClass('error');
          }
        }
      }

      if(agreeData.length == 0) {
        $('.main-checkbox-name').find('p').css({'color': '#bb9753'});
      }

      if($('#askQuestionForm .main-field.error').length > 0 || agreeData.length == 0) {
        event.preventDefault();
      }
    });
  },

  subscriptionForm: function() {
    var email = $('form.subscription-box-form input[name=email-sub]');
    $('form.subscription-box-form button').click(function(event){
      $('.main-field').removeClass('error');
      
      if(email.val() == '' || email.val() == undefined) {
        event.preventDefault();
        $(this).parent().parent().addClass('error');
      }
    });
  },
};

export default forms;
