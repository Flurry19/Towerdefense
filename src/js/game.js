import '../css/style.css'
import { Actor, Engine, Vector, Label, FontUnit, Font, StandardClock, CollisionGroupManager } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Level } from './level1'
import { Attacker } from './attacker'
import { Tower } from './tower'
import { Bullet } from "./projectile";
import { Puppypen } from "./puppypen";

export class Game extends Engine {

    // Set variables
    hearts
    label

    constructor() {
        // Set window
        super({ width: window.innerWidth, height: window.innerHeight })
        // this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }


    async startGame() {
        // Start game
        console.log("start de game!")

        // Go to the first level/scene
        this.add('level1', new Level())
        this.goToScene('level1')


        // Check the coordinates of where you click
        this.input.pointers.primary.on('down', function (event) {
            console.log(event.coordinates.screenPos.x, event.coordinates.screenPos.y);
        })

        // Set the amount of lives
        this.hearts = 50

        // Set the starter money
        this.coins = 200

        // Set the amount of lives on the top right of the screen
        this.label = new Label({
            text: `Lives: ${this.hearts}`,
            pos: new Vector(1150, 100),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(this.label)

        this.money = new Label({
            text: `Coins: ${this.coins}`,
            pos: new Vector(1150, 125),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(this.money)

        // Add an attacker 
        const attacker = new Attacker(5, 500, new Vector(0.2, 0.2))
        this.add(attacker)

        const fastattacker = new Attacker(2, 1000, new Vector(0.1, 0.1))
        this.add(fastattacker)

        const strongattacker = new Attacker(10, 100, new Vector(0.3, 0.3))
        this.add(strongattacker)

        //Add a hardcoded tower
        const tower = new Tower()
        tower.pos = new Vector(1200, 476)
        this.add(tower)

        const puppypen = new Puppypen()
        this.add(puppypen)
    }

    onInitialize(engine) {
        engine.on('postupdate', () => {
            engine.currentScene.actors.forEach(actor => {
                if (actor instanceof Bullet) {
                    // Check collision between the bullet and attackers
                    engine.currentScene.actors.filter(a => a instanceof Attacker).forEach(attacker => {
                        if (actor.collides(attacker)) {
                            attacker.damage(actor.damage); // Call the 'damage' method on the attacker with the bullet's damage
                            actor.kill();
                        }
                    });
                }
            });
        });

    }

    decreaseLives(lives) {
        this.hearts -= lives
        this.label.text = `Lives: ${this.hearts}`
    }

    animate() {
        Tower.Bullet.forEach(Bullet => {
            Bullet.draw()
        })
    }
    onPreUpdate(Engine) {
        if (this.hearts <= 0) {
            this.gameover = new Label({
                text: `GAME OVER`,
                pos: new Vector(450, 550),
                font: new Font({
                    family: 'impact',
                    size: 100,
                    unit: FontUnit.Px
                })
            })
            this.add(this.gameover)
        }


    }
}
new Game()