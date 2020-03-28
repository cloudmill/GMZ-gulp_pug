import $ from "jquery";


//Animations
import animations from "./animations/main.js";

//Modules
import sliders from "./modules/sliders.js";
import helpers from "./modules/helpers.js";
import scrollbar from "./modules/scrollbar.js";

//templs
import header from "./templs/header.js";

$(document).ready(function() {

  /* ScrollBar */
  scrollbar.init()

  /* Слайдеры */
  sliders.init();

  /* Доп функционал */
  helpers.init();

  /* Функционал для Header */
  header.init();

  /*Анимации*/
  animations.init();
});


