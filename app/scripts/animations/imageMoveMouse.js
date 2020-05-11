import $ from "jquery";
function getClipRect(obj) {
  let currentLeft = 0;
  let currentTop = 0;

  const findPos = function (obj) {
    currentLeft += obj.offsetLeft;
    currentTop += obj.offsetTop;
    if (obj.offsetParent) {
      findPos(obj.offsetParent);
    }
  };
  findPos(obj);

  return {
    top: currentTop,
    left: currentLeft,
    width: obj.offsetWidth,
    height: obj.offsetHeight,
  };
}

function showImageOnMove(el, x, y) {
  const { imageContainer, link } = getImageContainer(el);
  if (imageContainer) {
    if (!imageContainer.classList.contains("image-background-showed")) {
      imageContainer.childNodes.forEach((element) => {
        if (element.classList) {
          element.classList.add("animationImageBefore");
        }
      });
      imageContainer.style.display = "block";
      link.classList.add("image-background-index");
      imageContainer.classList.remove("image-background-hidden");
      imageContainer.classList.add("image-background-showed");
      el.parentElement.classList.add("image-background-parent-index");
      setTimeout(() => {
        imageContainer.childNodes.forEach((element) => {
          if (element.classList) {
            element.classList.add("animationImage");
          }
        });
      }, 100);
    }
    if(imageContainer.getClientRects()[0]){
      const position = getClipRect(imageContainer);
      const left = parseInt(imageContainer.style.left) || 0;
      const top = parseInt(imageContainer.style.top) || 0;
  
      const leftPosition =
        x - imageContainer.getClientRects()[0].width / 2 - (position.left - left);
      const topPosition =
        y - imageContainer.getClientRects()[0].height / 2 - (position.top - top);
  
      imageContainer.style.left = leftPosition + "px";
      imageContainer.style.top = topPosition + "px";
  
      const w = imageContainer.getClientRects()[0].width;
      const h = imageContainer.getClientRects()[0].height;
  
      const _left =
        x -
        ($(window).width() - $(".main-catalog-box").width()) / 2 -
        ($(".main-catalog-box").width() - $(el).width()) -
        $(el).width() / 2;
      $(".catalog-el-mask .catalog-el-text").width($(el).width());
      $(".catalog-el-mask .catalog-el-text").height($(el).height());
      const _top =
        topPosition +
        imageContainer.getClientRects()[0].height / 2 -
        $(el).height() / 2;
      setTextMask(_left, _top, w, h);
    }
    
  }
}
function clearImage(el){
  const { imageContainer, link } = getImageContainer(el);

  $(imageContainer).attr('style','');
}
function setTextMask(x, y, w, h) {
  let mask = $(".catalog-el-mask");
  let text = $(".catalog-el-mask .catalog-el-text");

  const angle = (Math.PI / 180) * 15;
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);
  let wMask = 0;
  let hMask = 0;

  hMask = (h * cos - w * sin) / (cos ** 2 - sin ** 2);
  wMask = (w - hMask * sin) / cos;

  mask.css("left", w / 2 + "px");
  mask.css("top", h / 2 + "px");
  mask.width(wMask);
  mask.height(hMask);

  const angleBig = Math.PI / 2 - angle;

  const offsetX_OX = x * Math.cos(angle);
  const offsetY_OX = -x * Math.cos(-angleBig);

  const offsetX_OY = y * Math.cos(angleBig);
  const offsetY_OY = y * Math.cos(angle);

  const left = -(offsetX_OX + offsetX_OY);
  const top = -(offsetY_OX + offsetY_OY);

  text.css("margin-left", left + "px");
  text.css("margin-top", top + "px");
}
function getImageContainer(el) {
  const result = {
    imageContainer: null,
    link: null,
  };
  const parentBlock = el.parentElement;

  for (let i = 0; i < parentBlock.childNodes.length; i++) {
    const item = parentBlock.childNodes[i];
    let imgFound = false;
    for (let j = 0; j < item.childNodes.length; j++) {
      if (
        item.childNodes.length &&
        item.childNodes[j].tagName &&
        item.childNodes[j].tagName.toUpperCase() === "IMG"
      ) {
        imgFound = true;
      }
    }
    if (imgFound) {
      result.imageContainer = item;
    } else {
      result.link = item;
    }
  }

  return result;
}

function hideImage(el) {
  const { imageContainer, link } = getImageContainer(el);

  if (
    imageContainer &&
    imageContainer.classList.contains("image-background-showed")
  ) {
    imageContainer.childNodes.forEach((element) => {
      if (element.classList) {
        element.classList.remove("animationImageBefore");
        element.classList.remove("animationImage");
      }
    });
    imageContainer.classList.remove("image-background-showed");

    imageContainer.childNodes.forEach((element) => {
      if (element.classList) {
        element.classList.remove("animationImage");
      }
    });
    imageContainer.classList.add("image-background-hidden");
    setTimeout(() => {
      imageContainer.style.left=$(window).width()+'px';
      //imageContainer.style.display = "none";
    }, 250);
    el.parentElement.classList.remove("image-background-parent-index");
    link.classList.remove("image-background-index");
  }
}

function addEventListeners(selectors) {
  const paths = Array.isArray(selectors) ? selectors : [selectors];
  paths.forEach((path) => {
    const items = document.querySelectorAll(path);
    items.forEach((element) => {
      element.addEventListener("mousemove", (e) => {
        const scrolledTop =
          Math.abs(
            parseInt(
              document
                .querySelector(".scroll-content")
                .style.transform.split(",")[1]
            )
          ) || 0;
        
        if($(window).width() > 850){
          showImageOnMove(element, e.clientX, e.clientY + scrolledTop);
        }else{
          clearImage(element);
        }
      });
      element.addEventListener("mouseout", () => {
        hideImage(element);
      });
      element.classList.add("image-background-base");
    });
  });
}

function init(selectors) {
  addEventListeners(selectors);
}

export default init;
