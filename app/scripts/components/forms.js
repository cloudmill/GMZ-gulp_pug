import $ from "jquery";

import select2 from 'select2';

let forms = {
  init: function() {
    this.select2Init();
  },
  select2Init: function() {
    $(".select2-field").each((key,item)=>{
      $(item).select2({
        language: "ru",
        dropdownParent: $(item).parent()
      })
    })
  }
};

export default forms;
