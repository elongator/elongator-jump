import Phaser, { CANVAS } from 'phaser';

import PlayScene from './PlayScene';
import PreloadScene from './PreloadScene';


function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;

    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    } else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}

const config = {
    parent: CANVAS,
    width: 1000,
    height: 340,
    type: Phaser.AUTO,
    pixelArt: true,
    transparent: true,
    scale: {
        parent: CANVAS,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,

        min: {
            widht: 500,
            height: 340
        },

        max: {
            width: 1000,
            height: 340
        },

        zoom: 1,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    autoRound: false,
    scene: [PreloadScene, PlayScene]
};

new Phaser.Game(config);

// resize();

// window.addEventListener("resize", resize, false);