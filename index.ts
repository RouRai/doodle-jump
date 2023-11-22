import { Platform } from './platform'

let canvas = document.getElementById('canvas') as HTMLCanvasElement;

let context = canvas.getContext('2d');

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

canvas.width = windowWidth;
canvas.height = windowHeight;

