import $ from "jquery";

import select2 from 'select2';

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
    var username = $('#askQuestionForm #name').value();
    var telephone = $('#askQuestionForm #phome').value();
    var email = $('#askQuestionForm #email').value();
    var question = $('#askQuestionForm #question').value();

    $('#askQuestionForm .main-link').click(function(){
      alert(username +' '+ telephone +' '+ email +' '+ question);
    });

  },
};

export default forms;
