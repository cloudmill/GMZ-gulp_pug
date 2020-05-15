import $ from "jquery";

let helpers = {
  init: function () {
    this.resizeImg();
    this.spoilerCheckbox();
    this.animateOnLoadPage();
    this.marqueeRepeatBlock();
    this.spoilerSocilaLinks();
    this.controlModal();
  },
  events: function () {
    $(window).on("resize", () => {
      this.resizeImg();
      window.resizeImg = this.resizeImg;
    });
  },

  /* Ресайз изображений */
  resizeImg: function () {
    let imgs = $(".fullImg");
    if (imgs.length > 0) {
      for (let img of imgs) {
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
  },

  /* Работа спойлера чекбоксов на странице рецептов*/
  spoilerCheckbox: function () {
    $(".list-group").click(function () {
      if ($(window).width() <= 859) $(this).toggleClass("active");
    });

    $(".clear").click(function (event) {
      event.preventDefault();
      $("input[type=checkbox]").prop("checked", false);
    });

    if ($(window).width() >= 859) {
      $(
        ".list-group-selection.product-select > .main-checkbox:nth-child(n+5)"
      ).each(function () {
        $(this).addClass("hide-main-checkbox");
      });

      $(".display-full").click(function (event) {
        $(this).toggleClass("on");
        event.preventDefault();
        $(
          ".list-group-selection.product-select > .main-checkbox:nth-child(n+5)"
        ).each(function () {
          if ($(".display-full").hasClass("on")) {
            $(".display-full").text("Скрыть элементы");
            $(this).removeClass("hide-main-checkbox");
          } else {
            $(".display-full").text("Показать все");
            $(this).addClass("hide-main-checkbox");
          }
        });
      });
    } else {
      $(".display-full").remove();
    }
  },
  animateOnLoadPage: function () {
    $(window).on("load", function () {
      $(".onLoad").each((key, item) => {
        $(item).addClass("pageLoaded");
      });
    });
  },

  marqueeRepeatBlock: function () {
    $(".shopsbg-marquee").append($(".shopsbg-marquee").html());
  },

  spoilerSocilaLinks: function () {
    var parent = $(".recept-footer .left");

    parent.find(".main-link").click(function () {
      parent.find(".recept-social-links").toggleClass("active");
    });
  },

  controlModal: function () {
    $("a#controlModal").click(function () {
      $(".modal").css("top", window.scrollbar.scrollTop + "px");

      $(".modal").toggleClass("active");
      if ($(".modal").hasClass("active")) {
        window.scrollbar.stopScroll();
      } else {
        window.scrollbar.startScroll();
      }
    });
    $(".modal-bg").click(function () {
      $(".modal").removeClass("active");
      if (window.burger.isShow) {
        window.burger.hide();
      } else {
        window.scrollbar.startScroll();
      }
    });
  },
};
export default helpers;
