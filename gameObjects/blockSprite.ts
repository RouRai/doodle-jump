export class BlockSprite {

    private readonly _xPosition: number;
    private readonly _yPosition: number;
    private readonly _width: number;
    private readonly _height: number;
    private readonly _windowWidth: number;
    private readonly _windowHeight: number;
    private readonly _color: string;
    private readonly _context: CanvasRenderingContext2D;

    constructor(startXPosition: number, startYPosition: number, width: number, height: number,
                windowWidth: number, windowHeight: number, color: string,
                context: CanvasRenderingContext2D) {
        this._xPosition = startXPosition;
        this._yPosition = startYPosition;
        this._width = width;
        this._height = height;
        this._windowWidth = windowWidth;
        this._windowHeight = windowHeight;
        this._color = color;
        this._context = context;
    }

    draw() {
        this.context.beginPath();
        this.context.strokeStyle = this.color;
        this.context.fillStyle = this.color;
        this.context.fillRect(this.xPosition, this.yPosition, this.width, this.height)
        this.context.stroke();
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

    get color(): string {
        return this._color;
    }

    get context(): CanvasRenderingContext2D {
        return this._context;
    }
}