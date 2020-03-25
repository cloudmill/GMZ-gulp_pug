import $ from "jquery";

//Modules
import sliders from "./modules/sliders.js";
import helpers from "./modules/helpers.js";

//templs
import header from "./templs/header.js";

//Animations
import animations from './animations/main.js'


$(document).ready(function() {
  /* Слайдеры */
  sliders.init();

  /* Доп функционал */
  helpers.init();

  /* Функционал для Header */
  header.init();

  /*Анимации*/
  animations.init();

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
