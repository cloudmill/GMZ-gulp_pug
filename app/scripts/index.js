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

  //скролл в блоках на странице
  Scrollbar.initAll();

  //скролл на сайте
  window.scrollbarInit = ()=>{
    window.scrollbar = Scrollbar.init(document.body, {
      damping: 0.2,
      alwaysShowTracks: true,
     // delegateTo: document.getElementById('scroll-box-events'),
    });
  }
  window.scrollbarInit();

  /* Слайдеры */
  sliders.init();

  /* Доп функционал */
  helpers.init();

  /* Функционал для Header */
  header.init();

  /*Анимации*/
  animations.init();

});
