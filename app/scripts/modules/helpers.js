import $ from "jquery";

let helpers = {
  init: function() {
    this.resizeImg();
    this.events();
    this.spoilerCheckbox();
  },
  events: function() {
    $(window).on("resize", () => {
      this.resizeImg();
    });
  },
  /* Ресайз изображений */
  resizeImg: function() {
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
  spoilerCheckbox: function() {
    if($(window).width() <= 859) {
      $('.list-group').click(function() {
        $(this).find('.list-group-selection').toggleClass('display-mobile');
      });
    }

    $('.clear').click(function(event) {
      event.preventDefault();
      $("input[type=checkbox]").prop('checked', false);
    });
  },
};
export default helpers;
