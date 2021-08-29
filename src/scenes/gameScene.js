import Phaser from 'phaser'

export default class gameScene extends Phaser.Scene {
   
    preload() {

    }

    create() {
        const ball = this.add.circle(600, 400, 25, 0x00ff00)
        this.physics.add.existing(ball)
        ball.body.setBounce(1, 1)
        ball.body.setCollideWorldBounds(true, 1, 1)
        ball.body.setVelocity(500, 0)

        const paddleLeft = this.add.rectangle(50, 400, 50, 200, 0xff0000, 1)
        this.physics.add.existing(paddleLeft, true)

        this.physics.add.collider(paddleLeft, ball)

    }

}
