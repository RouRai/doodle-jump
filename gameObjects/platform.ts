export class Platform {

    private readonly _xPosition: number;
    private readonly _yPosition: number;
    private readonly _width: number;
    private readonly _height: number;
    private readonly _windowWidth: number;
    private readonly _windowHeight: number;
    private readonly _radii: number;
    private readonly _context: CanvasRenderingContext2D;

    constructor(xPosition: number, yPosition: number, width: number,
                height: number, windowWidth: number, windowHeight: number,
                radii: number, context: CanvasRenderingContext2D) {
        this._xPosition = xPosition;
        this._yPosition = yPosition;
        this._width = width;
        this._height = height;
        this._windowWidth = windowWidth;
        this._windowHeight = windowHeight;
        this._radii = radii;
        this._context = context;
    }

    draw() {
        this.context.beginPath();
        this.context.strokeStyle = 'rgb(192, 213, 0)';
        this.context.fillStyle = 'rgb(192, 213, 0)';
        this.context.roundRect(this.xPosition, this.yPosition, this.width, this.height, [this.radii])
        this.context.stroke()
        this.context.fill()
        this.context.closePath();
    }

    update() {
        this.context.clearRect(0, 0, this.windowWidth, this.windowHeight);
        this.draw();
    }

    get xPosition(): number {
        return this._xPosition;
    }

    get yPosition(): number {
        return this._yPosition;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get windowWidth(): number {
        return this._windowWidth;
    }

    get windowHeight(): number {
        return this._windowHeight;
    }

    get radii(): number {
        return this._radii;
    }

    get context(): CanvasRenderingContext2D {
        return this._context;
    }
}
