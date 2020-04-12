const loader = document.querySelector('.loader');

const container = document.querySelector('.loader .img-front-container');
const front = document.querySelector('.loader .img-front');
const maxHeight = 250;
let nowHeight = 0;

const baseOptions = {
    beforeStart: () => {
    },
    beforeEnd: () => {
    },
    onEnd: () => {
    }
};

function startLoading(options) {
    const _options = { ...baseOptions, ...options };

    _options.beforeStart();
    const height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    loader.style.height = height + 'px';
    const interval = setInterval(() => {
        if (nowHeight >= maxHeight) {
            _options.beforeEnd();
            clearInterval(interval);
            loader.classList.add('closed');
            setTimeout(() => {
                if (_options.onEnd) {
                    _options.onEnd();
                }
            }, 1000);
        }
        front.style.top = (
            nowHeight - maxHeight
        ) + 'px';
        container.style.top = (
            maxHeight - nowHeight
        ) + 'px';
        container.style.height = nowHeight + 'px';

        nowHeight++;
    }, 10);
}

export default startLoading;