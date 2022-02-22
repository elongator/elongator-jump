import Phaser, { CANVAS } from 'phaser';

import PlayScene from './PlayScene';
import PreloadScene from './PreloadScene';



const config = {
    type: Phaser.AUTO,
    pixelArt: true,
    transparent: true,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'top',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1000,
        height: 340
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [PreloadScene, PlayScene]
};

new Phaser.Game(config);