import $ from "jquery";
import Swiper from "swiper";

function mainSlider() {
  let delayChangeSlide = 2500;
  return new Swiper('.main-index-box-slider', {
    speed: 400,
    spaceBetween: 1000,
    loop: true,

    navigation: {
      nextEl: '#slider-main-right',
      prevEl: '#slider-main-left',
    },

    autoplay: {
      delay: delayChangeSlide,
      disableOnInteraction: false,
    },

    pagination: {
      clickable: true,
      el: '.main-index-box-control-items',
      bulletClass: 'main-index-box-control-items-el',
      bulletActiveClass: 'active',
      renderBullet: function (index, className) {
        return  '<button class="' + className + '"></button>';
      }
    },
  });
}

function receptSlider() {
  return new Swiper('.recepts-box-slider', {
    navigation: {
      nextEl: '#slider-recepts-right',
      prevEl: '#slider-recepts-left',
    },
  });
}

$(document).ready(function() {
  mainSlider();
  receptSlider();
});
