class DashBackground {
    constructor(element, path, options) {
        this._options = { ...this.getBaseOptions(), ...options };
        this.ctx = element.getContext("2d");
        this.path = path;

        if (this._options.resize) {
            if (!this._options.noReset) {
                this.recalculateCanvas(element);
            } else {
                this.getCanvasSize(element);
                this._options.newWidth = this._options.width * (
                    100 - this._options.offsetRightPercentage
                ) / 100;
                this._options.newHeight = this._options.height;
            }
            this.addEventListener(element);
        }
        this.start();
    }

    getBaseOptions() {
        return (
            {
                lineDash: 6,
                spaceDash: 6.2,
                lineWidth: 1,
                color: 'rgba(253,233,16,1)',
                speed: 1,
                msBySteps: 10,
                startFrom: 0,
                stopAt: 100,
                resize: false,
                offsetLeftPercentage: 0,
                offsetTopPercentage: 0,
                offsetRightPercentage: 0,
                isDebug: false,
                width: 0,
                height: 0,
                cropHeightPercentage: 0,
                cropWidthPercentage: 0,
                noReset: false,
                isStop: false,
                isRestoreAfterStop: true,
                additionalHeightPercentage: 0,
                additionalWidthPercentage: 0,
                onEnd: () => {
                }
            }
        );
    }

    getCanvasContext(element) {
        return element.getContext("2d");
    }

    prepareContext() {
        this.ctx.setLineDash([this._options.lineDash, this._options.spaceDash]);
        this.ctx.strokeStyle = this._options.color;
        this.ctx.lineWidth = this._options.lineWidth;
        this.ctx.lineJoin = 'round';
    }

    resetImage() {
        if (this.interval) {
            this.ctx.closePath();
            clearInterval(this.interval)
        }
    }

    startAnimation() {
        this.ctx.closePath();
        const pathObject = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathObject.setAttribute('d', this.path);
        const length = pathObject.getTotalLength();
        const startFrom = pathObject.getTotalLength() * this._options.startFrom / 100;
        const endTo = length * this._options.stopAt / 100;
        let position = startFrom;
        if (this._options.isDebug) {
            console.log('start', startFrom, 'end', endTo);
        }
        const objPosition = pathObject.getPointAtLength(position);
        const newX = this._options.newWidth * objPosition.x / this._options.width + (
            this._options.newWidth * this._options.offsetLeftPercentage / 100
        );
        const newY = this._options.newHeight * objPosition.y / this._options.height + (
            this._options.newHeight * this._options.offsetTopPercentage / 100
        );
        this.ctx.moveTo(newX, newY);
        this.ctx.beginPath();
        this.interval = setInterval(() => {
            if (this._options.isStop) {
                this._options.isStop = false;
                this.ctx.closePath();
                clearInterval(this.interval);
            }
            this.prepareContext();
            position += this._options.speed;
            const objPosition = pathObject.getPointAtLength(position);
            const newX = this._options.newWidth * objPosition.x / this._options.width + (
                this._options.canvasWidth * this._options.offsetLeftPercentage / 100
            );
            const newY = this._options.newHeight * objPosition.y / this._options.height + (
                this._options.canvasHeight * this._options.offsetTopPercentage / 100
            );
            if (this._options.isDebug) {
                console.log(
                    newX,
                    newY,
                    objPosition.x,
                    objPosition.y,
                    objPosition.x,
                    objPosition.y
                );
            }
            this.ctx.lineTo(newX, newY);
            this.ctx.stroke();

            if (position >= length) {
                position -= length;
            }
            if (position >= endTo - this._options.speed && position <= endTo) {
                this.ctx.closePath();
                clearInterval(this.interval);
                this._options.onEnd();
            }
        }, this._options.msBySteps)
    }

    addEventListener(element) {
        window.addEventListener('resize', () => {
            this._options.isStop = true;
            this.recalculateCanvas(element);
        });
    }

    getCanvasSize(element) {
        const parent = element.parentElement;
        const style = getComputedStyle(parent);
        const newWidth = parseInt(style.width, 10) * (
            100 - this._options.cropWidthPercentage
        ) / 100;
        const newHeight = parseInt(style.height, 10) * (
            100 - this._options.cropHeightPercentage
        ) / 100;

        this._options.canvasWidth = newWidth;
        this._options.canvasHeight = newHeight;
        return (
            {
                newHeight,
                newWidth
            }
        )
    }
    detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i,
        ];

        const width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        }) || (width < 1024);
    }

    recalculateCanvas(element) {
        const { newWidth, newHeight } = this.getCanvasSize(element);
        element.setAttribute(
            'width',
            (
                100 + this._options.additionalWidthPercentage + (this.detectMob() && this._options.maxHeight ? this._options.additionalWidthOnMaxHeight || 0 : 0)
            ) / 100 * newWidth
        );
        element.setAttribute(
            'height',
            this.detectMob() ? this._options.maxHeight : (
                100 + this._options.additionalHeightPercentage
            ) / 100 * newHeight
        );
        this._options.newWidth = parseInt(newWidth, 10) * (
            100 - this._options.offsetRightPercentage + (this.detectMob() && this._options.maxHeight ? this._options.additionalWidthOnMaxHeight || 0 : 0)
        ) / 100;
        this._options.newHeight = this.detectMob() ? this._options.maxHeight : parseInt(newHeight, 10);

        if (this._options.isRestoreAfterStop) {
            setTimeout(() => {
                this.startDo();
            }, this._options.msBySteps + 10);
        }
    }

    start() {
        if(document.documentElement.clientWidth >= this._options.minWidthStartRendering) {
            this.isStarted = true;
            this.startDo();
        } else {
            this.isStarted = false;
        }
    }

    startDo() {
        if (this.isStarted) {
            this.resetImage();
            this.prepareContext();
            this.startAnimation();
        }
    }
}


export default DashBackground;
