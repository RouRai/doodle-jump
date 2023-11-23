import { Platform } from './gameObjects/platform'
import { BlockSprite } from "./gameObjects/blockSprite";

let canvas = document.getElementById('canvas') as HTMLCanvasElement;

let context = canvas.getContext('2d');

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

canvas.width = windowWidth;
canvas.height = windowHeight;

let platformOne = new Platform(
    250,
    250,
    150,
    50,
    windowWidth,
    windowHeight,
    50,
    context
);

platformOne.draw();

let blockSprite = new BlockSprite(
    0,
    0,
    50,
    50,
    windowWidth,
    windowHeight,
    "black",
    context
);

blockSprite.draw();

let updateBlockSprite = function () {
    requestAnimationFrame(blockSprite.update);
    blockSprite.update();
}

let updatePlatform = function () {
    requestAnimationFrame(platformOne.update);
    platformOne.update();
}

updateBlockSprite();
updatePlatform();