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
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,

        min: {
            width: 600,
            height: 340,
        },

        max: {
            width: 1200,
            height: 340
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
    // autoRound: false
};

new Phaser.Game(config);