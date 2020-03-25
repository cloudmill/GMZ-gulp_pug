import $ from "jquery";

export default header = {
  init: () => {
    this.burger.init();
    this.scrollDoing.init();
  },
  /* Функционал для бургер меню */
  burger: {
    init: () => {
      this.events();
    },
    events: () => {
      $("#change-nav").click(function() {
        if (
          $(".header").hasClass("sticky") &&
          !$(".header-static").hasClass("active")
        ) {
          $(".header").removeClass("sticky");
        } else if (
          $(".header-static").hasClass("active") &&
          $(window).scrollTop() > 1
        ) {
          $(".header").addClass("sticky");
        }
        $(".header-static").toggleClass("active");
      });
    }
  },
  /* Функционал для действий hedaer при скролле*/
  scrollDoing: {
    lastPos: $(document).scrollTop(),
    init: () => {
      this.events();
    },
    events: () => {
      $(window).scroll(() => {
        this.update();
      });
    },
    update: () => {
      this.pos = $(document).scrollTop();
      if (!$(".header-static").hasClass("active")) {
        if (this.pos > this.lastPos || this.pos == 0) {
          $(".header").removeClass("sticky");
        } else {
          $(".header").addClass("sticky");
        }
      }
      this.lastPos = this.pos;
    }
  }
};
