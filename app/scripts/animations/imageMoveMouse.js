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
        height: obj.offsetHeight
    };
}

function showImageOnMove(el, x, y) {
    const { imageContainer, link } = getImageContainer(el);

    if (!imageContainer.classList.contains('image-background-showed')) {
        imageContainer.childNodes.forEach((element) => {
            if (element.classList) {
                element.classList.add('animationImageBefore');
            }
        });
         imageContainer.style.display = 'block';
        imageContainer.classList.add('image-background-showed');
        link.classList.add('image-background-index');
        imageContainer.classList.remove('image-background-hidden');
        el.parentElement.classList.add('image-background-parent-index');
        setTimeout(() => {
            imageContainer.childNodes.forEach((element) => {
                if (element.classList) {
                    element.classList.add('animationImage');
                }
            });
        }, 100);
    }

    const position = getClipRect(imageContainer);
    const left = parseInt(imageContainer.style.left) || 0;
    const top = parseInt(imageContainer.style.top) || 0;

    const leftPosition = x - (
        imageContainer.getClientRects()[0].width / 2
    ) - (
        position.left - left
    );
    const topPosition = y - (
        imageContainer.getClientRects()[0].height / 2
    ) - (
        position.top - top
    );

    imageContainer.style.left = leftPosition + 'px';
    imageContainer.style.top = topPosition + 'px';
}


function getImageContainer(el) {
    const result = {
        imageContainer: null,
        link: null
    };
    const parentBlock = el.parentElement;

    for (let i = 0; i < parentBlock.childNodes.length; i++) {
        const item = parentBlock.childNodes[i];
        let imgFound = false;
        for (let j = 0; j < item.childNodes.length; j++) {
            if (item.childNodes.length && item.childNodes[j].tagName && item.childNodes[j].tagName.toUpperCase()
                === "IMG") {
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

    if (imageContainer.classList.contains('image-background-showed')) {

        imageContainer.childNodes.forEach((element) => {
            if (element.classList) {
                element.classList.remove('animationImageBefore');
                element.classList.remove('animationImage');
            }
        });
        imageContainer.classList.remove('image-background-showed');

        imageContainer.childNodes.forEach((element) => {
            if (element.classList) {
                element.classList.remove('animationImage');
            }
        });
        imageContainer.classList.add('image-background-hidden');
        setTimeout(() => {
             imageContainer.style.display = 'none';
        }, 200);
        el.parentElement.classList.remove('image-background-parent-index');
        link.classList.remove('image-background-index');
    }
}

function addEventListeners(selectors) {
    const paths = Array.isArray(selectors)
        ? selectors
        : [selectors];
    paths.forEach((path) => {
        const items = document.querySelectorAll(path);
        items.forEach((element) => {
            element.addEventListener('mousemove', (e) => {
                const scrolledTop = Math.abs(parseInt(document.querySelector('.scroll-content').style.transform.split(
                    ',')[1])) || 0;
                showImageOnMove(element, e.clientX, e.clientY + scrolledTop);
            });
            element.addEventListener('mouseout', () => {
                hideImage(element);
            });
            element.classList.add('image-background-base');
        })
    });
}

function init(selectors) {
    addEventListeners(selectors)
}

export default init;
