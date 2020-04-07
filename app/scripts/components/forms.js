import $ from "jquery";
import select2 from 'select2';
import 'jquery.maskedinput/src/jquery.maskedinput';

let forms = {
  init: function() {
    this.select2Init();
    //this.askQuestionForm();
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
      'username': $('#askQuestionForm input[name=name]'),
      'telephone': $('#askQuestionForm input[name=phone]'),
      'email': $('#askQuestionForm input[name=email]'),
      'question': $('#askQuestionForm textarea[name=question]')
    };
    
    formData['telephone'].mask("+9 (999) 999-9999", {
      placeholder:"+7 (___) ___ - __ - __" 
    });

    $('#askQuestionForm button.main-link').click(function(event){
      $('.main-field').removeClass('error');
      $('.main-checkbox-name').find('p').css({'color': '#312930'});

      var agreeData = $('#askQuestionForm input[name=agree]:checked');

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
};

export default forms;
