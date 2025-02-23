import Phaser from "phaser";

export default class FlyingBird extends Phaser.Physics.Arcade.Sprite{
   
    constructor(scene, x, y, spriteName){
        super(scene, x, y, spriteName);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.cursores = this.scene.input.keyboard.createCursorKeys();
        this.scene.anims.create(
            {
                key: 'fly',
                frames: this.scenes.anims.generateFrameNumbers(spriteName, {end:4}),
                frameRate: 10,
                repeat: -1
            }
        )

        this.play('fly');
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
        this.setVelocityX(0);
        this.setVelocityY(0);
        if(this.cursores.up.isDown)
            this.setVelocityY(-200);
        if(this.cursores.down.isDown)
            this.setVelocityY(200);
        if(this.cursores.left.isDown)
            this.setVelocityX(-200);
        if(this.cursores.right.isDown)
            this.setVelocityX(200);
    }
}