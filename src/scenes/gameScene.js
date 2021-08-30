import Phaser from 'phaser'

export default class gameScene extends Phaser.Scene {
   
    preload() {

    }

    create() {
        const ball = this.add.circle(600, 400, 25, 0x00ff00)
        this.physics.add.existing(ball)
        ball.body.setBounce(1, 1)
        ball.body.setCollideWorldBounds(true, 1, 1)
        ball.body.setVelocity(Phaser.Math.Between(150, 300), Phaser.Math.Between(150, 300))

        this.paddleLeft = this.add.rectangle(50, 400, 50, 200, 0xff0000, 1)
        this.physics.add.existing(this.paddleLeft, true)

        this.paddleRight = this.add.rectangle(1150, 400,50, 200, 0x0000ff, 1)
        this.physics.add.existing(this.paddleRight, true)


        this.physics.add.collider(this.paddleLeft, ball)
        this.physics.add.collider(this.paddleRight, ball)

        
        this.cursurs = this.input.keyboard.createCursorKeys()
    }

    update() {

        const body = this.paddleLeft.body
        
        if (this.cursurs.up.isDown) {
            this.paddleLeft.y -= 10
            body.updateFromGameObject()
        } else if (this.cursurs.down.isDown) {
            this.paddleLeft.y += 10
            body.updateFromGameObject()
        }
    }
    
}
