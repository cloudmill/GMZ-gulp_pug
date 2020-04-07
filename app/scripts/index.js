import $ from "jquery";

//Animations
import animations from "./animations/main.js";

//Modules
import customScrollbar from "./modules/scrollbar.js";
import header from "./modules/header.js";

//components
import maps from "./components/maps.js";
import sliders from "./components/sliders.js";
import forms from "./components/forms.js";
import helpers from "./components/helpers.js";

$(document).ready(function() {
  /* ScrollBar */
  window.scrollbar = new customScrollbar();

  /* Доп функционал */
  helpers.init();


  /* Функционал для Header */
  header.init();

  /*Анимации*/
  animations.init();

  /*            */
  /* Компоненты */
  /*            */
  maps.init();
  sliders.init();
  forms.init();
});
