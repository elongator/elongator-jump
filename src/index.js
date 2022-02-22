import Phaser, { CANVAS } from 'phaser';

import PlayScene from './PlayScene';
import PreloadScene from './PreloadScene';

var width = 1000
var height = 340


const config = {
    type: Phaser.AUTO,
    width,
    height,
    pixelArt: true,
    transparent: true,
    scale: {
        parent: CANVAS,

        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,

        min: {
            width: 500,
            height: 400,
        },

        max: {
            width: 1600,
            height: 1200
        },

        zoom: 1,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [PreloadScene, PlayScene],
    autoRound: false
};

new Phaser.Game(config);