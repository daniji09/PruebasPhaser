import Phaser from 'phaser'

// se importan los recursos necesarios (como los sprites)
import kiribati from '../../assets/sprites/kiribati.png'
import flying_bird from '../../assets/sprites/flying_bird.png'
import particle from '../../assets/sprites/particle.png'
import background from '../../assets/sprites/background.png'

import FlyingBird from '../game-objects/flying-bird';

export default class HelloWorld extends Phaser.Scene{

    constructor(){
        // se le pasa al padre la configuración de la escena, esta key es el id de la escena
        super({key:'hello-world'});
    }

    preload(){
        // se ejecuta el primero y permite cargar los objetos o recursos

        // sprites
        this.load.image('kiribati', kiribati);
        this.load.image('particle', particle);
        this.load.image('background', background);

        // animacion con spritesheet
        this.load.spritesheet('flying_bird', flying_bird, {frameWidth: 64, frameHeight: 64});
    }

    create(){
        // ahora se crean estos objetos
        // primero, una imagen, el fondo
        this.add.image(500, 250, 'background');



        // le ponemos físicas a otro objeto, por ejemplo a la bola kiribati
        const kiribati = this.physics.add.image(400, 100, 'kiribati');
        kiribati.setVelocity(100, 200);
        kiribati.setBounce(1, 1);
        kiribati.setCollideWorldBounds(true);

        // ahora se añade una particula
        const particle = this.add.particles(0, 0, 'particle',{
            speed: 100,
            scale: {start: 1, end: 0},
            blendMode: 'ADD'
        });
        particle.startFollow(kiribati);

        new FlyingBird(this, 300, 300, 'flying_bird');
    }
}