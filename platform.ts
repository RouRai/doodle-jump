export class Platform {

    private readonly _xPosition: number;
    private readonly _yPosition: number;
    private readonly _width: number;
    private readonly _height: number;
    private readonly _radii: number;
    private readonly _context: CanvasRenderingContext2D;

    constructor(xPosition: number, yPosition: number, width: number,
                height: number, radii: number, context: CanvasRenderingContext2D) {
        this._xPosition = xPosition;
        this._yPosition = yPosition;
        this._width = width;
        this._height = height;
        this._radii = radii;
        this._context = context;
    }

    draw(context: CanvasRenderingContext2D = this.context) {
        context.beginPath();
        context.strokeStyle = 'rgb(192, 213, 0)';
        context.fillStyle = 'rgb(192, 213, 0)';
        context.roundRect(this.xPosition, this.yPosition, this.width, this.height, [this.radii])
        context.stroke()
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

    get radii(): number {
        return this._radii;
    }

    get context(): CanvasRenderingContext2D {
        return this._context;
    }
}
