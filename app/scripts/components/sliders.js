import $ from "jquery";
import Swiper from "swiper";

let sliders = {
  init: function() {
    this.mainSlider();
    this.receptSlider();
    this.productSlider();
    this.receptSliderOne();
    this.aboutSlider();
    this.awardsSlider();
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
  },
  aboutSlider: function() {
    return new Swiper(".slider-about-box", {
      speed: 600,
      spaceBetween: 500,
      loop: true,

      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },

      navigation: {
        nextEl: "#slider-about-right",
        prevEl: "#slider-about-left"
      },

      thumbs: {
        swiper: {
          el: ".dates",
          slidesPerView: 8,
          slideThumbActiveClass: '.active',
        },
      },
    });
  },
  awardsSlider: function() {
    return new Swiper(".main-about-awards-box", {
      speed: 600,
      slidesPerView: 3,

      navigation: {
        nextEl: "#slider-awards-right",
        prevEl: "#slider-awards-left"
      }
    });
  }
};

export default sliders;