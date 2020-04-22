import $ from "jquery";

export default class Wave {
  constructor(selector, type, clip) {
    this.element = $(selector);
    this.topWave = false;
    this.bottomWave = false;
    this.clip = clip;
    if (type == "top") {
      this.topWave = true;
    } else if (type == "bottom") {
      this.bottomWave = true;
    } else if (type == "bottom-clip") {
      this.topWave = true;
      this.clip = true;
    } else {
      this.topWave = true;
      this.bottomWave = true;
    }

    this.offset = 20;
    if ($(window).width() <= 500) {
      this.offset = 10;
    }
    this.normalOffset = this.offset;

    this.fazeOffset = Math.random() * 0.1;
    this.fazeOffset = this.fazeOffset < 0.01 ? 0.01 : this.fazeOffset;

    this.countPoints = 50;
    if ($(window).width() <= 500) {
      this.countPoints = 30;
    }
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
    this.isObservable = window.isObservable(this.element);
    this.events();
  }
  updateState() {
    this.isObservable = window.isObservable(this.element);
  }
  update() {
    if (this.isObservable) {
      this.ctx.clearRect(0, 0, this.w, this.h);
      this.draw();
      this.move();
    }
  }
  move() {
    this.faze += this.fazeOffset;
    this.normalizeOffset();
  }
  normalizeOffset() {
    if (this.offset > this.normalOffset) {
      this.offset -= 1 - this.normalOffset / this.offset;
    }
  }
  resize() {
    this.h = this.element.outerHeight();
    this.w = this.element.outerWidth();
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    if (this.normalOffset > 15 && $(window).width() <= 500) {
      this.normalOffset * 0.5;
    }
  }
  events() {
    window.scrollbar.on(() => {
      if (this.offset < this.normalOffset * 3) {
        this.offset *= Math.sqrt((this.normalOffset * 3) / this.offset);
      }
    });
    window.addObservableCheck(() => {
      this.updateState();
    });
    window.addEventListener("resize", () => {
      this.resize();
    });
    window.addUpdate(() => {
      this.update();
    });
  }
  draw() {
    this.ctx.beginPath();
    let getY = (x) => {
      return Math.sin(x / 10 + this.faze) * this.offset;
    };

    if (this.topWave) {
      var clipOffset = 0;
      if (this.clip) {
        clipOffset = this.h - this.offset * 2;
      }
      for (let i = 0; i <= this.countPoints; i++) {
        let x = i * (this.w / this.countPoints);
        let y = clipOffset + this.offset + getY(i);
        this.ctx.lineTo(x, y);
      }
    } else {
      this.ctx.lineTo(0, 0);
      this.ctx.lineTo(this.w, 0);
    }

    if (this.bottomWave) {
      for (let i = this.countPoints; i >= 0; i--) {
        let x = i * (this.w / this.countPoints);
        let y = this.h - this.offset - getY(i) * -1;
        this.ctx.lineTo(x, y);
      }
    } else {
      this.ctx.lineTo(this.w, this.h + 1);
      this.ctx.lineTo(0, this.h + 1);
    }
    this.ctx.lineTo(0, this.offset + getY(0));

    this.ctx.lineWidth = 1;

    this.ctx.fillStyle = this.fill;
    this.ctx.fill();

    this.ctx.strokeStyle = this.fill;
    this.ctx.stroke();
  }
}
