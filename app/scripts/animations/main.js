import $ from "jquery";
import Wave from "./wave.js";
import FixedInBlock from "./fixedInBlock.js";
import AbsoluteFixation from "./absoluteFixation.js";
import MouseParalax from "./mouseParalax.js";
import ScrollRotate from "./scrollRotate.js";
import DashedLine from "./dashedLine/main.js";
import ImageMoveMouse from "./imageMoveMouse.js";
import VisualAnimation, { initMain } from './visualAnimation.js';
import Controller from './controller.js';
import CloudMove from "./controllerElems/cloudMove";

let animations = {
  init: function() {
    this.controller = new Controller();
    this.waveAnimation();
    this.fixedInBlock();
    this.absoluteFixation();
    this.mouseParalax();
    this.scrollRotate();
    this.dashedLine();
    this.imageMoveMouse();
    this.visualAnimation();
    this.cloudMove();

    console.log(this.controller)
  },

  waveAnimation: function() {
    /* Анимация волны между секциями */
    var waves = [];
    $(".waveSection").each((key, item) => {
      //2 волны
      waves.push(new Wave(item));
    });
    $(".waveSection-top").each((key, item) => {
      //Волна только вверху
      waves.push(new Wave(item, "top"));
    });
    $(".waveSection-bottom").each((key, item) => {
      //Волна только снизу
      waves.push(new Wave(item, "bottom"));
    });
    $(".waveSection-bottom-clip").each((key, item) => {
      //Волна снизу закрывающая фон
      waves.push(new Wave(item, "bottom-clip"));
    });
  },
  fixedInBlock: function() {
    var fixeds = [];
    $(".fixed-base").each((key, item) => {
      fixeds.push(new FixedInBlock(item));
    });
  },
  absoluteFixation: function(){
    let absoluteFixItems = [];
    $('.fixed-window').each(function(ket,item){
      absoluteFixItems.push(new AbsoluteFixation(item));
    })
  },  
  mouseParalax: function(){
    let mouseParalaxItems = []
    $('.mouseParalax').each(function(key,item){
      mouseParalaxItems.push(new MouseParalax(item))
    })
  },
  scrollRotate: function(){
    let scrollRotateItems = []
    $('.scrollRotate').each(function(key,item){
      scrollRotateItems.push(new ScrollRotate(item))
    })
  },
  dashedLine: function(){
    DashedLine();
  },
  imageMoveMouse: function(){
    ImageMoveMouse('.catalog-el-text');
  },
  visualAnimation: function(){
    initMain().show();
    VisualAnimation();
  },
  cloudMove(){
    const target = document.querySelector('.main-index-animeel');
    new CloudMove(target);
  }
};

export default animations;
