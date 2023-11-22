let canvas = document.getElementById("canvas") as HTMLCanvasElement;

let context = canvas.getContext("2d");

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

canvas.width = windowWidth;
canvas.height = windowHeight;

class Platform {

    private readonly _xPosition: number;
    private readonly _yPosition: number;
    private readonly _width: number;
    private readonly _height: number;
    private readonly _context: CanvasRenderingContext2D;

    constructor(xPosition: number, yPosition: number, width: number, height: number, context: CanvasRenderingContext2D) {
        this._xPosition = xPosition;
        this._yPosition = yPosition;
        this._width = width;
        this._height = height;
        this._context = context;
    }

    draw(context: CanvasRenderingContext2D) {
        // TODO
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

    get context(): CanvasRenderingContext2D {
        return this._context;
    }
}