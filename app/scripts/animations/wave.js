import $ from "jquery";

export default class Wave {
  constructor(selector) {
    this.element = $(selector);
    this.offset = 20;
    this.normalOffset =this.offset;
    this.countPoints = 50;
    this.id = "wave-" + parseInt(Math.random() * 10000);
    this.h = this.element.outerHeight();
    this.w = this.element.outerWidth();
    this.canvas = document.createElement("canvas");
    this.canvas.id = this.id;
    this.canvas.width = this.w;
    this.canvas.height = this.h;

    this.ctx = this.canvas.getContext("2d");

    this.fill = this.element.attr("data-color");
    this.faze = Math.random() * Math.PI;

    this.element.append(this.canvas);
    this.update();
    this.events()
  }
  update() {
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(0, 0, this.w, this.h);
    this.draw();
    this.move();
    requestAnimationFrame(() => {
      this.update();
    });
  }
  move() {
    this.faze += 0.05;
    this.normalizeOffset();
  }
  normalizeOffset(){
    if(this.offset > this.normalOffset){
      this.offset -= 1 - (this.normalOffset / this.offset);
    }
  }
  events(){
    this.lastScroll = $(document).scrollTop();
    $(document).on('scroll',()=>{
      if(this.offset < this.normalOffset*3){
        this.offset *= Math.sqrt((this.normalOffset*3/this.offset))
      }
      
    })
  }
  draw() {
    this.ctx.beginPath();
    let getY = x => {
      let normalizeK = (this.offset / this.countPoints) * 50;

      return Math.sin(x / 10 + this.faze) * this.offset
    };

    for (let i = 0; i <= this.countPoints; i++) {
      let x = i * (this.w / this.countPoints);
      let y = this.offset + getY(i);
      this.ctx.lineTo(x, y);
    }

    for (let i = this.countPoints; i >= 0; i--) {
      let x = i * (this.w / this.countPoints);
      let y = this.h - this.offset - getY(i)*-1;
      this.ctx.lineTo(x, y);
    }

    this.ctx.lineTo(0, this.offset + getY(0));

    this.ctx.lineWidth = 1;

    this.ctx.fillStyle = this.fill;
    this.ctx.fill();

    // this.ctx.strokeStyle = "black";
    // this.ctx.stroke();
  }
}
