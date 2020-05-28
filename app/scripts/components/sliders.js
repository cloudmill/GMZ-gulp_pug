import $ from "jquery";
import Swiper from "swiper";

let sliders = {
  init: function () {
    this.mainSlider();
    this.receptSlider();
    this.productSlider();
    this.receptSliderOne();
    this.aboutSlider();
    this.awardsSlider();
    this.newsAndStockSlider();
  },
  mainSlider: function () {
    let delayChangeSlide = 5000;
    return new Swiper(".main-index-box-slider", {
      speed: 1500,
      spaceBetween: 500,
      watchSlidesProgress: true,
      loop: true,

      navigation: {
        nextEl: "#slider-main-right",
        prevEl: "#slider-main-left",
      },

      autoplay: {
        delay: delayChangeSlide,
        disableOnInteraction: false,
      },

      pagination: {
        clickable: true,
        el: ".main-index-box-control-items",
        bulletClass: "main-index-box-control-items-el",
        bulletActiveClass: "active",
        renderBullet: function (index, className) {
          let svg = `<svg class="elipce_slider first" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11.5" cy="11.5" r="10.5" stroke="#312930" stroke-width="2"/>
                    </svg>`;
          return '<button class="' + className + '">' + svg + "</button>";
        },
      },
      on: {
        slideChange: function () {
          $(document).find(".elipce_slider.first").removeClass("first");
        },
      },
    });
  },
  receptSlider: function () {
    return new Swiper(".recepts-box-slider", {
      spaceBetween: 30,
      slidesPerView: 1,
      updateOnWindowResize: true,

      breakpoints: {
        660: {
          slidesPerView: 2,
        },
      },

      navigation: {
        nextEl: "#slider-recepts-right",
        prevEl: "#slider-recepts-left",
      },
    });
  },
  productSlider: function () {
    return new Swiper(".slider-owerflow", {
      speed: 600,
      slidesPerView: 1,
      updateOnWindowResize: true,
      loop: true,
      navigation: {
        nextEl: "#slider-main-right",
        prevEl: "#slider-main-left",
      },

      thumbs: {
        swiper: {
          el: ".product-bullets",
          slidesPerView: 5,
          spaceBetween: 20,
          slideThumbActiveClass: ".active",
        },
      },
    });
  },
  receptSliderOne: function () {
    if ($(".slider-recept .slider-el.swiper-slide").length > 1){
      return new Swiper(".slider-recept", {
        speed: 600,
        slidesPerView: 1,
        updateOnWindowResize: true,
        spaceBetween: 0,
        loop: true,

        autoplay: {
          delay: 2600,
          disableOnInteraction: false,
        },

        navigation: {
          nextEl: "#slider-recept-right",
          prevEl: "#slider-recept-left",
        },

        thumbs: {
          swiper: {
            el: ".thumbs.thumbs-recept-slider",
            slidesPerView: "auto",
            spaceBetween: 10,
            slideThumbActiveClass: ".active",
          },
        },
      });
    }else {
      $(".slider-recept .main-slider-buttons").remove()
    }
      
  },
  aboutSlider: function () {
    return new Swiper(".slider-about-box", {
      speed: 600,
      spaceBetween: 500,
      loop: true,
      autoHeight: true,
      calculateHeight: true,

      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },

      breakpoints: {
        767: {
          autoHeight: false,
          calculateHeight: false,
        },
      },

      navigation: {
        nextEl: "#slider-about-right",
        prevEl: "#slider-about-left",
      },

      thumbs: {
        swiper: {
          el: ".dates",
          //slidesPerView: 3,
          slidesPerView: 'auto',
          spaceBetween: 25,
          centerMode: true,
          slideThumbActiveClass: ".active",
          breakpoints: {
            1100: {
              spaceBetween: 40,
             // slidesPerView: 7,
            },
            1024: {
              spaceBetween: 38,
             // slidesPerView: 7,
            },
            950: {
              spaceBetween: 35,
             // slidesPerView: 6,
            },
            768: {
             spaceBetween: 30,
             // slidesPerView: 5,
            },
            480: {
              spaceBetween: 25,
              //slidesPerView: 4,
            },
          },
        },
      },
    });
  },
  awardsSlider: function () {
    return new Swiper(".main-about-awards-content", {
      spaceBetween: 30,
      speed: 600,
      slidesPerView: 1,
      loop: true,
      loopedSlides: 3,
      //freeMode: true,

      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },

      breakpoints: {
        767: {
          slidesPerView: 3,
          spaceBetween: 10,
          loopedSlides: 3,
        },
      },

      navigation: {
        nextEl: "#slider-awards-left",
        prevEl: "#slider-awards-right",
      },
    });
  },
  newsAndStockSlider: function () {
    return new Swiper(".news-row", {
      speed: 5200,
      slidesPerView: "auto",
      spaceBetween: 30,
      freeMode: false,

      breakpoints: {
        1023: {
          spaceBetween: 120,
          slidesPerView: 3,
        },
      },
    });
  },
};

export default sliders;
