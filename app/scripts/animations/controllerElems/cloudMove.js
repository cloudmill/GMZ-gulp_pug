import $ from "jquery";

const timerSpeed = 50;
class CloudMove {
  constructor(container) {
    this.elements = [];
    if (container && container.children) {
      const items = container.children;

      for (let i = 0; i < items.length; i++) {
        const element = items[i];

        if (element.getClientRects && element.getClientRects()[0]) {
          const position = element.getClientRects()[0];
          element.style.left = parseInt(position.left, 10) + "px";
          this.elements.push({
            element,
            left: position.left,
          });
        }
      }
      if (this.elements.length) {
        this.animate();
      }
    }
  }

  animate() {
    
   
    this.interval = setInterval(() => {
      if ($(window).width() >= 600) {
        
        const width = parseInt(
          window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth,
          10
        );

        this.elements.forEach(({ element, left }, index) => {
          const position = element.getClientRects()[0];
          if (left >= width) {
            this.elements[index].left = -parseInt(position.width, 10);
          }
          element.style.left = left + 1 + "px";
          this.elements[index].left++;
        });
      }
      
    }, timerSpeed);
  }
}

export default CloudMove;
