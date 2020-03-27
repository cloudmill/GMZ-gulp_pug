import $ from "jquery";
import Scrollbar from "smooth-scrollbar";

//Animations
import animations from "./animations/main.js";

//Modules
import sliders from "./modules/sliders.js";
import helpers from "./modules/helpers.js";

//templs
import header from "./templs/header.js";

$(document).ready(function() {


  /* Кастомный скролл */
  let scrollbar = window.scrollbar = Scrollbar.init(document.body, {
    damping: 0.2
  });
  

  /* Слайдеры */
  sliders.init();

  /* Доп функционал */
  helpers.init();

  /* Функционал для Header */
  header.init();

  /*Анимации*/
  animations.init();

});
