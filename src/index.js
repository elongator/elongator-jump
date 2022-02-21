import Phaser from 'phaser';

import PlayScene from './PlayScene';
import PreloadScene from './PreloadScene';

const width = 1000
const height = 340


const config = {
    type: Phaser.AUTO,
    width,
    height,
    pixelArt: true,
    transparent: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [PreloadScene, PlayScene]
};

new Phaser.Game(config);