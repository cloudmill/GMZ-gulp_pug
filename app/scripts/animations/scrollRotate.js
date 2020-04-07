import $ from "jquery";

export default class ScrollRotate {
  constructor(selector){
    this.el = $(selector);
    this.k = (Math.random() - 0.5 ) * 0.1
    this.angle = 0;
    this.init()
  }
  init(){
    this.events()
  }
  events(){
    window.scrollbar.on(()=>{
      if(window.isObservable(this.el))
        this.update(window.scrollbar.scrollTop);
    })
  }
  update(scroll){
    this.angle = scroll / $(window).height() + this.k
    this.el.css('transform-origin','center center');
    this.el.css('transform','rotate('+this.angle+'rad');
  }
}