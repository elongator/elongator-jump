import Phaser, { CANVAS } from 'phaser';

import PlayScene from './PlayScene';
import PreloadScene from './PreloadScene';

function resizeApp() {
    // Width-height-ratio of game resolution
    // Replace 360 with your game width, and replace 640 with your game height
    let game_ratio = 360 / 640;

    // Make div full height of browser and keep the ratio of game resolution
    let div = document.getElementById('phaser-app');
    div.style.width = (window.innerHeight * game_ratio) + 'px';
    div.style.height = window.innerHeight + 'px';

    // Check if device DPI messes up the width-height-ratio
    let canvas = document.getElementsByTagName('canvas')[0];

    let dpi_w = parseInt(div.style.width) / canvas.width;
    let dpi_h = parseInt(div.style.height) / canvas.height;

    let height = window.innerHeight * (dpi_w / dpi_h);
    let width = height * game_ratio;

    // Scale canvas	
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
}

window.addEventListener('resize', resizeApp);

const config = {
    // parent: "container",
    width: 1000,
    height: 340,
    type: Phaser.AUTO,
    pixelArt: true,
    transparent: true,
    // scale: {
    //     parent: "container",
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH,

    //     min: {
    //         width: 500,
    //         height: 340
    //     },

    //     max: {
    //         width: 1000,
    //         height: 340

    //     },

    //     zoom: 1,
    // },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    // autoRound: false,
    scene: [PreloadScene, PlayScene]

};

new Phaser.Game(config);

// resize();

// window.addEventListener("resize", resize, false);