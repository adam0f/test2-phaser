import Phaser from 'phaser'

import titleScreen from './scenes/titleScreen'
import gameScene from './scenes/gameScene'

const config = {
    width: 1200,
    height: 800,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade', 
        arcade: {
            gravity: { y: 0},
            debug: true
        }
    }
}

const game = new Phaser.Game(config)

game.scene.add('titlescreen', titleScreen)
game.scene.add('gamescene', gameScene)

//game.scene.start('titlescreen')
game.scene.start('gamescene')
