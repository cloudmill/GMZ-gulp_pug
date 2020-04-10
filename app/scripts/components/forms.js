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

    //Логика работы сообщения об успешном ответе
    $('.contact-box-success button.main-link').click(function(event){
      event.preventDefault();
      $('.contact-box-success').css({
        'opacity': 0,
        'pointer-events': 'none'
      });

      $('form.contact-box-form').find('input').val('').removeAttr('selected').prop("checked", false);
      $('form.contact-box-form').find('textarea').val('');
    });

    //Логика работы формы
    $('form.contact-box-form button.main-link').click(function(event){
      event.preventDefault();
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

      //Все хорошо, показываем сообщение что отправили данные с формы
      if($('form.contact-box-form .main-field.error').length == 0 && agreeData.length == 1) {
        $('.contact-box-success').css({
          'opacity': 1,
          'pointer-events': 'all'
        });
      }
    });
  },

  subscriptionForm: function() {
    var defBlock = $('form.subscription-box-form');
    var subBlock = $('.subscription-box-success');
    var email = defBlock.find('input[name=email-sub]');

    function subBlockDisplay(displayValue) {
      subBlock.css({
        'opacity': parseInt(displayValue),
        'pointer-events': displayValue ? 'all' : 'none'
      });
    };

    //Логика работы сообщения об успешном ответе
    subBlock.find('button.main-link').click(function(event){
      event.preventDefault();
      subBlockDisplay(0);
    });

    defBlock.find('button').click(function(event){
      event.preventDefault();
      $('.main-field').removeClass('error');
      
      if(email.val() != '' && email.val() != undefined) {
        subBlockDisplay(1);
      } else {
        $(this).parent().parent().addClass('error');
      }
    });
  },
};

export default forms;