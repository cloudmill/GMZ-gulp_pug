import $ from "jquery";

//Modules
import { sliders } from "./modules/sliders";
import { helpers } from "./modules/helpers";

//templs
import { header } from "./templs/header";



$(document).ready(function() {
  /* Слайдеры */
  sliders.init();

  /* Доп функционал */
  helpers.init();

  /* Функционал для Header */
  header.init();

  /* Страница категория, работа с картинками
  $('.catalog-el').on("mouseover", function(){
    $(document).mousemove(function(event){
      var x = Math.round(event.offsetX);
  
      $('.catalog-el-img').css({ 
        "position": "absolute",
        "top": "-80%",
        "left": x 
      });
    });
  });
  */
});
