import $ from "jquery";

let header = {
  init: function() {
    this.burger.init();
    this.scrollDoing.init();
  },
  /* Функционал для бургер меню */
  burger: {
    init: function() {
      this.events();
    },
    events: function() {
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
    scrollFree: 20,
    moveDelta: 0,
    init: function() {
      this.events();
    },
    events: function() {
      this.update();
      $(window).scroll(() => {
        this.update();
      });
    },
    update: function() {
      this.pos = $(document).scrollTop();
      let offsetTop = 50 //+ 90;

      if(this.lastPos > this.pos){
        this.moveDelta += Math.abs(this.lastPos - this.pos)   
      }else{
        this.moveDelta = 0;
      }

      if(!$(".header-static").hasClass("active")){
        if(this.pos <= offsetTop){
          $(".header").removeClass("sticky");
          $(".header").removeClass("hide");
          let top = -$(document).scrollTop() + 30;
          $(".header").css('transform','translateY('+top+'px)')
        }else{
          $(".header").attr('style','');
          if(this.moveDelta > this.scrollFree){
            $(".header").addClass("sticky");
            $(".header").removeClass("hide");
          }else{
            $(".header").removeClass("sticky");
            $(".header").addClass("hide");
          }
        }
        // if (this.pos > this.lastPos || this.pos == 0) {
        //       $(".header").removeClass("sticky");
        //     } else {
        //       $(".header").addClass("sticky");
        //     }
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