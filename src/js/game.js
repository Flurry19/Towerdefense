import '../css/style.css'
import { Actor, Engine, Vector, Label, FontUnit, Font, StandardClock, CollisionGroupManager } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Level } from './level1'
import { Attacker, Fastattacker, Strongattacker } from './attacker'
import { Puppypen, Tower } from './tower'

export class Game extends Engine {

    // Set variables
    hearts
    label

    constructor() {
        // Set window
        super({ width: window.innerWidth, height: window.innerHeight })
        this.showDebug(true)
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

        // Make collision groups so attackers can't collide with eachother
        // const attackerGroup = CollisionGroupManager.create('attacker')
        // const defenderGroup = CollisionGroupManager.create('tower')

        // const attackerGroupCanCollideWith = attackerGroup.CollisionGroup.collidesWith([
        //     defenderGroup
        // ])

        // Add an attacker 
        const attacker = new Attacker()
        this.add(attacker)

        const fastattacker = new Fastattacker()
        this.add(fastattacker)

        const strongattacker = new Strongattacker()
        this.add(strongattacker)

        //Add a hardcoded tower
        const tower = new Tower()
        tower.pos = new Vector(1200, 476)
        this.add(tower)

        const puppypen = new Puppypen()
        this.add(puppypen)



        // Lose a life when the attacker passes the whole path and bumps into puppy pen
        attacker.on("collisionstart", (event) => {
            this.hearts -= 2
            attacker.kill()
            this.label.text = `Lives: ${this.hearts}`
        })
        fastattacker.on("collisionstart", (event) => {
            this.hearts--
            fastattacker.kill()
            this.label.text = `Lives: ${this.hearts}`
        })
        strongattacker.on("collisionstart", (event) => {
            this.hearts -= 5
            strongattacker.kill()
            this.label.text = `Lives: ${this.hearts}`
        })




    } onInitialize(Engine) {


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
