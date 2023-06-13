import { Actor, Vector, Engine, CollisionType, Shape, Timer } from "excalibur"
import { Resources } from "./resources"
import { Bullet } from "./projectile"
import { Attacker } from "./attacker"



export class Tower extends Actor {

    bulletType = Bullet
    timer = 0


    constructor() {
        super();
        // this.pos = new Vector(Tower.pos.x, Tower.pos.y)
        this.projectiles = [
            new Bullet({
                position: {
                    x: this.position.x,
                    y: this.position.y
                }
            })
        ]
    }


    onInitialize(engine) {
        // Scale and position the tower (hardcoded, change position by person eventually)
        this.scale = new Vector(0.08, 0.08)
        this.pos = new Vector(420, 400)
        this.range = 100
        this.damage = 1
        this.cost = 100
        this.timer = new Timer({
            // fcn: () => this.spawn(engine),
            interval: 100,
            repeats: true
        })
        engine.currentScene.add(this.timer)
        this.timer.start()


        // Set the image of the tower
        this.graphics.use(Resources.Tower.toSprite())

    }
}

