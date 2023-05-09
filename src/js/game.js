import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { attacker } from './attacker'

export class Game extends Engine {

    constructor() {
        super({ width: window.innerWidth, height: window.innerHeight })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        let wave1 = new attacker()
        this.add(wave1)

    }
}

new Game()
