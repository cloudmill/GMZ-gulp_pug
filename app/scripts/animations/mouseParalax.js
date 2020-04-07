import $ from "jquery";

export default class MouseParalax {
  constructor(selector){
    this.el = $(selector);
    this.maxOffset = 20 + (Math.random()-0.5)*20;
    this.offsetX = 0;
    this.offsetY = 0;
    this.init()
  }
  init(){
    this.events()
  }
  events(){
    $(document).on('mousemove',(e)=>{
      if(window.isObservable(this.el))
        this.update(e.pageX,e.pageY);
    })
  }
  update(x,y){
    let wd2 = $(window).width()/2
    let hd2 = $(window).width()/2
    this.offsetX = -(x - wd2)/wd2 * this.maxOffset
    this.offsetY = -(y - hd2)/hd2 * this.maxOffset
    this.el.css('transform','translate('+this.offsetX+'px,'+this.offsetY+'px)');
  }
}