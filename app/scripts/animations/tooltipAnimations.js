import anime from 'animejs/lib/anime.es.js';
import charming from 'charming';

const config = {
  cora: {
    in: {
      base: {
        duration: 600,
        easing: 'easeOutQuint',
        scale: [0,1],
        rotate: [-180,0],
        opacity: {
          value: 1,
          easing: 'linear',
          duration: 100
        }
      },
      content: {
        duration: 300,
        delay: 250,
        easing: 'easeOutQuint',
        translateY: [20,0],
        opacity: {
          value: 1,
          easing: 'linear',
          duration: 100
        }
      },
      trigger: {
        duration: 300,
        easing: 'easeOutExpo',
        scale: [1,0.9],
        color: '#6fbb95'
      }
    },
    out: {
      base: {
        duration: 150,
        delay: 50,
        easing: 'easeInQuad',
        scale: 0,
        opacity: {
          delay: 100,
          value: 0,
          easing: 'linear'
        }
      },
      content: {
        duration: 100,
        easing: 'easeInQuad',
        translateY: 20,
        opacity: {
          value: 0,
          easing: 'linear'
        }
      },
      trigger: {
        duration: 300,
        delay: 50,
        easing: 'easeOutExpo',
        scale: 1,
        color: '#666'
      }
    }
  }
};

export default class Tooltip {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.type = this.DOM.el.getAttribute('data-type');
    this.DOM.trigger = this.DOM.el.querySelector('.tooltip__trigger');
    this.DOM.triggerSpan = this.DOM.el.querySelector('.tooltip__trigger-text');
    this.DOM.base = this.DOM.el.querySelector('.tooltip__base');
    this.DOM.shape = this.DOM.base.querySelector('.tooltip__shape');
    if( this.DOM.shape ) {
      this.DOM.path = this.DOM.shape.childElementCount > 1 ? Array.from(this.DOM.shape.querySelectorAll('path')) : this.DOM.shape.querySelector('path');
    }
    this.DOM.deco = this.DOM.base.querySelector('.tooltip__deco');
    this.DOM.content = this.DOM.base.querySelector('.tooltip__content');

    this.DOM.letters = this.DOM.content.querySelector('.tooltip__letters');
    if( this.DOM.letters ) {
      // Create spans for each letter.
      charming(this.DOM.letters);
      // Redefine content.
      this.DOM.content = this.DOM.letters.querySelectorAll('span');
    }
    this.initEvents();
  }
  initEvents() {
    this.mouseenterFn = () => {
      this.mouseTimeout = setTimeout(() => {
        this.isShown = true;
        this.show();
      }, 75);
    }
    this.mouseleaveFn = () => {
      clearTimeout(this.mouseTimeout);
      if( this.isShown ) {
        this.isShown = false;
        this.hide();
      }
    }
    this.DOM.trigger.addEventListener('mouseenter', this.mouseenterFn);
    this.DOM.trigger.addEventListener('mouseleave', this.mouseleaveFn);
    this.DOM.trigger.addEventListener('touchstart', this.mouseenterFn);
    this.DOM.trigger.addEventListener('touchend', this.mouseleaveFn);
  }
  show() {
    this.animate('in');
  }
  hide() {
    this.animate('out');
  }
  animate(dir) {
    if ( config[this.type][dir].base ) {
      anime.remove(this.DOM.base);
      let baseAnimOpts = {targets: this.DOM.base};
      anime(Object.assign(baseAnimOpts, config[this.type][dir].base));
    }
    if ( config[this.type][dir].shape ) {
      anime.remove(this.DOM.shape);
      let shapeAnimOpts = {targets: this.DOM.shape};
      anime(Object.assign(shapeAnimOpts, config[this.type][dir].shape));
    }
    if ( config[this.type][dir].path ) {
      anime.remove(this.DOM.path);
      let shapeAnimOpts = {targets: this.DOM.path};
      anime(Object.assign(shapeAnimOpts, config[this.type][dir].path));
    }
    if ( config[this.type][dir].content ) {
      anime.remove(this.DOM.content);
      let contentAnimOpts = {targets: this.DOM.content};
      anime(Object.assign(contentAnimOpts, config[this.type][dir].content));
    }
    if ( config[this.type][dir].trigger ) {
      anime.remove(this.DOM.triggerSpan);
      let triggerAnimOpts = {targets: this.DOM.triggerSpan};
      anime(Object.assign(triggerAnimOpts, config[this.type][dir].trigger));
    }
    if ( config[this.type][dir].deco ) {
      anime.remove(this.DOM.deco);
      let decoAnimOpts = {targets: this.DOM.deco};
      anime(Object.assign(decoAnimOpts, config[this.type][dir].deco));
    }
  }
  destroy() {
    this.DOM.trigger.removeEventListener('mouseenter', this.mouseenterFn);
    this.DOM.trigger.removeEventListener('mouseleave', this.mouseleaveFn);
    this.DOM.trigger.removeEventListener('touchstart', this.mouseenterFn);
    this.DOM.trigger.removeEventListener('touchend', this.mouseleaveFn);
  }
};