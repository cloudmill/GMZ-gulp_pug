import $ from "jquery";


//Animations
import animations from "./animations/main.js";

//Modules
import sliders from "./modules/sliders.js";
import helpers from "./modules/helpers.js";
import customScrollbar from "./modules/scrollbar.js";
import header from "./modules/header.js";

//components
import maps from "./modules/header.js";


$(document).ready(function() {

  /* ScrollBar */
  window.scrollbar = new customScrollbar();

  /* Слайдеры */
  sliders.init();
 
  /* Доп функционал */
  helpers.init();

  

  /* Функционал для Header */
  header.init();

  /*Анимации*/
  animations.init();

  /* Компоненты */
  maps.init();
});


