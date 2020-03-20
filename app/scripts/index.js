import $ from "jquery";
import Swiper from "swiper";

let resizeImg = () => {
  let imgs = $(".fullImg");
  if (imgs.length > 0) {
    for(let img of imgs) {
      let $img = $(img);
      let $parent = $(img).parent();
      let nWidth = img.naturalWidth;
      let nHeight = img.naturalHeight;
      let k = nWidth / nHeight;
      if ($img.height() * k < $parent.width()) {
        $img.addClass("auto-height");
      }
      if ($img.width() / k < $parent.height()) {
        $img.removeClass("auto-height");
      }
    }
  }
};

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
    spaceBetween: 30,
    slidesPerView: 1,
    updateOnWindowResize: true,

    breakpoints: {
      660: {
        slidesPerView: 2,
      }
    },

    navigation: {
      nextEl: '#slider-recepts-right',
      prevEl: '#slider-recepts-left',
    },
  });
}

$(document).ready(function() {
  mainSlider();
  receptSlider();
  resizeImg();
  
  $(window).on('resize',function(){
    resizeImg();
  })

  $('#change-nav').click(function(){
    if($('.header').hasClass("sticky") && !$('.header-static').hasClass('active')) {
      $('.header').removeClass("sticky");
    } else if($('.header-static').hasClass('active') && $(window).scrollTop() > 1) {
      $('.header').addClass("sticky");
    }

    $('.header-static').toggleClass("active");
  });

  var lastScrollPosition = 0;
  $(window).scroll(function() {
    let thisScrollPosition = $(this).scrollTop();

    if(!$('.header-static').hasClass('active')) {
      if (thisScrollPosition > lastScrollPosition || thisScrollPosition == 0) {
        $('.header').removeClass("sticky");
      } else {
        $('.header').addClass("sticky");
      }
    }

    lastScrollPosition = thisScrollPosition; 
  });
});