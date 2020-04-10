import $ from "jquery";

let helpers = {
  init: function() {
    this.resizeImg();
    this.events();
    this.spoilerCheckbox();
    this.animateOnLoadPage();
    this.marqueeRepeatBlock();
    this.spoilerSocilaLinks();
    this.controlModal();

    //Проверка на позицию блока в видимой области
    window.isObservable = this.isObservable;
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

    $('.display-full').click(function(event) {
      $(this).toggleClass('on')
      event.preventDefault();
      $('.list-group-selection.product-select > .main-checkbox:nth-child(n+5)').each(function() {
          if($('.display-full').hasClass('on')) {
            $('.display-full').text('Скрыть элементы');
            $(this).removeClass("hide-main-checkbox");
          } else {
            $('.display-full').text('Показать все');
            $(this).addClass("hide-main-checkbox");
          }
      });
    });

    $('.list-group-selection.product-select > .main-checkbox:nth-child(n+5)').each(function() {
      $(this).addClass("hide-main-checkbox");
    });
    
  },

  isObservable: function($item){
    let find = true;
    if($item.offset().top + $item.height() < 0 || $item.offset().left + $item.width() < 0){
      find = false;
    }
    if($item.offset().top > $(window).height() || $item.offset().left > $(window).width()){
      find = false;
    }
    return find;
  },

  animateOnLoadPage: function(){
    $(window).on('load',function(){
      $('.onLoad').each((key,item)=>{
        $(item).addClass('pageLoaded')
      })
    })
  },

  marqueeRepeatBlock: function() {
    $('.shopsbg-marquee').append($('.shopsbg-marquee').html());
  },

  spoilerSocilaLinks: function() {
    var parent = $('.recept-footer .left');

    parent.find('.main-link').click(function(){
      parent.find('.recept-social-links').toggleClass('active');
    });
  },

  controlModal: function() {
    var modal = $('.modal-content');
    $('a#controlModal').click(function(){
      $('.modal').toggleClass('active');
      window.scrollbar.stopScroll();
    });
  }
};
export default helpers;