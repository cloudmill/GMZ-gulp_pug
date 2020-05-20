import $ from "jquery";

//Animations
import animations from "./animations/main.js";
import Tooltip from "./animations/tooltipAnimations.js";

//Modules
import customScrollbar from "./modules/scrollbar.js";
import header from "./modules/header.js";

//components
import maps from "./components/maps.js";
import sliders from "./components/sliders.js";
import forms from "./components/forms.js";
import helpers from "./components/helpers.js";
import Loading from "./components/loader";

$(document).ready(function () {
  if ($("body").hasClass("print")) {
    Loading({
        beforeStart: () => {
        },
        beforeEnd: () => {
        },
        onEnd: () => {
            animations.init('no-scroll');
        },
      });
  } else {
    /* ScrollBar */
    window.scrollbar = new customScrollbar();
    

    /* Доп функционал */
    helpers.init();

    /* Функционал для Header */
    header.init();

    /*            */
    /* Компоненты */
    /*            */
    maps.init();
    sliders.init();
    forms.init();

    /* Тултипы */
    var tooltips = Array.from(document.querySelectorAll(".tooltip"));
    var init = (() => tooltips.forEach((t) => new Tooltip(t)))();
    window.scrollbar.stopScroll();

    Loading({
      beforeStart: () => {
        document
          .querySelector(".scrollbar-track-y")
          .classList.add("hide-display-for-loader");
      },
      beforeEnd: () => {
        window.scrollbar.startScroll();
        document
          .querySelector(".scrollbar-track-y")
          .classList.remove("hide-display-for-loader");
      },
      onEnd: () => {
        /*Анимации*/
        animations.init();
        helpers.resizeImg();
      },
    });
    helpers.events();
  }

  
});
