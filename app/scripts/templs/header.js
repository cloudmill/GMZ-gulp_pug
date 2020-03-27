import $ from "jquery";

let header = {
  init: function() {
    this.burger.parent = this;
    console.log(window.scrollbar);
    this.burger.init();

    this.scrollDoing.init();
  },
  /* Функционал для бургер меню */
  burger: {
    init: function() {
      this.events();
    },
    events: function() {
      $("#change-nav").click(() => {
        if (!$(".header-static").hasClass("active"))
          this.parent.scrollDoing.setForBurger();
        $(".header-static").toggleClass("active");

        if (!$(".header-static").hasClass("active"))
          this.parent.scrollDoing.setForDef();
      });
    }
  },
  /* Функционал для действий hedaer при скролле*/
  scrollDoing: {
    lastPos: null,
    scrollFree: 20,
    moveDelta: 0,
    init: function() {
      this.lastPos = window.scrollbar.scrollTop;
      this.events();
    },
    events: function() {
      this.update();
      scrollbar.addListener(status => {
        this.update();
      });
    },
    setForBurger: function() {
      $(".header").css("top", 50 + "px");
      $(".header").removeClass("sticky");
      $(".header").removeClass("hide");
    },
    setForDef: function() {
      this.lastPos = this.pos+1;
      this.moveDelta = this.scrollFree+1;
      this.update()
      
    },
    update: function() {
      this.pos = window.scrollbar.scrollTop;
      let offsetTop = 50; //+ 90;
      if ($(window).width() <= 480) {
        offsetTop = 20;
      }

      if (this.lastPos > this.pos) {
        this.moveDelta += Math.abs(this.lastPos - this.pos);
      } else {
        this.moveDelta = 0;
      }
      $(".header").css("transform", "translateY(" + this.pos + "px)");
      if (!$(".header-static").hasClass("active")) {
        if (this.pos <= offsetTop) {
          $(".header").removeClass("sticky");
          $(".header").removeClass("hide");
          let top = -window.scrollbar.scrollTop + offsetTop;
          $(".header").css("top", top + "px");
        } else {
          if (this.moveDelta > this.scrollFree) {
            $(".header").css("top", "0px");
            $(".header").addClass("sticky");
            $(".header").removeClass("hide");
          } else {
            $(".header").removeClass("sticky");
            let top = -$(".header").height() - offsetTop;
            $(".header").css("top", top + "px");
            $(".header").addClass("hide");
          }
        }
      }
      // if (!$(".header-static").hasClass("active")) {
      //   if (this.pos > this.lastPos || this.pos == 0) {
      //     $(".header").removeClass("sticky");
      //   } else {
      //     $(".header").addClass("sticky");
      //   }
      // }

      this.lastPos = this.pos;
    }
  }
};

export default header;
