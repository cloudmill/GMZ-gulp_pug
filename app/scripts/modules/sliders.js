import $ from "jquery";
import Swiper from "swiper";

let sliders = {
  init: function() {
    this.mainSlider();
    this.receptSlider();
  },
  mainSlider: function() {
    let delayChangeSlide = 2500;
    return new Swiper(".main-index-box-slider", {
      speed: 1500,
      spaceBetween: 1000,
      loop: true,

      navigation: {
        nextEl: "#slider-main-right",
        prevEl: "#slider-main-left"
      },

      // autoplay: {
      //   delay: delayChangeSlide,
      //   disableOnInteraction: false
      // },

      pagination: {
        clickable: true,
        el: ".main-index-box-control-items",
        bulletClass: "main-index-box-control-items-el",
        bulletActiveClass: "active",
        renderBullet: function(index, className) {
          return '<button class="' + className + '"></button>';
        }
      }
    });
  },
  receptSlider: function() {
    return new Swiper(".recepts-box-slider", {
      spaceBetween: 30,
      slidesPerView: 1,
      updateOnWindowResize: true,

      breakpoints: {
        660: {
          slidesPerView: 2
        }
      },

      navigation: {
        nextEl: "#slider-recepts-right",
        prevEl: "#slider-recepts-left"
      }
    });
  }
};
export default sliders;
