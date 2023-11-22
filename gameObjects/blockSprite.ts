export class BlockSprite {

    private readonly _xPosition: number;
    private readonly _yPosition: number;
    private readonly _width: number;
    private readonly _height: number;
    private readonly _color: string;
    private readonly _context: CanvasRenderingContext2D;

    constructor(startXPosition: number, startYPosition: number, width: number, height: number, color: string, context: CanvasRenderingContext2D) {
        this._xPosition = startXPosition;
        this._yPosition = startYPosition;
        this._width = width;
        this._height = height;
        this._color = color;
        this._context = context;
    }

    draw(context: CanvasRenderingContext2D = this.context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.fillStyle = this.color;
        context.fillRect(this.xPosition, this.yPosition, this.width, this.height)
        context.stroke();
        context.fill()
        context.closePath();
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

    get color(): string {
        return this._color;
    }

    get context(): CanvasRenderingContext2D {
        return this._context;
    }
}