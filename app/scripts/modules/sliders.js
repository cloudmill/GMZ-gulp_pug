import $ from "jquery";
import Swiper from "swiper";

let sliders = {
  init: function() {
    this.mainSlider();
    this.receptSlider();
    this.productSlider();
    this.receptSliderOne();
  },
  mainSlider: function() {
    //let delayChangeSlide = 2500;
    return new Swiper(".main-index-box-slider", {
      speed: 1500,
      spaceBetween: 500,
      //loop: true,

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
  },
  productSlider: function() {
    return new Swiper(".product-slider", {
      speed: 600,
      slidesPerView: 1,
      updateOnWindowResize: true,

      navigation: {
        nextEl: "#slider-main-right",
        prevEl: "#slider-main-left"
      },

      thumbs: {
        swiper: {
          el: '.product-bullets',
          slidesPerView: 5,
          spaceBetween: 20,
        }
      },
    });
  },
  receptSliderOne: function() {
    return new Swiper(".slider-recept", {
      speed: 600,
      slidesPerView: 1,
      updateOnWindowResize: true,
      spaceBetween: 0,

      navigation: {
        nextEl: "#slider-recept-right",
        prevEl: "#slider-recept-left"
      },
    });
  }
};
export default sliders;
