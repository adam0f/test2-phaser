import Phaser from 'phaser'

export default class titleScreen extends Phaser.Scene
{
    preload()
    {

    }

    create()
    {
        const text = this.add.text(600, 400, 'Hello Fren')
        text.setOrigin(0.5, 0.5)
    }
}