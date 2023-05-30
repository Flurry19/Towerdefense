import { Actor, Vector, Engine, CollisionType, Shape } from "excalibur"
import { Resources } from "./resources"

// Collision with 
export class Puppypen extends Actor {
    constructor() {
        super({
            collisionType: CollisionType.Fixed,
            collider: Shape.Box(300, 300)
        })
    }

    onInitialize(engine) {
        this.scale = new Vector(0.3, 0.3)
        this.pos = new Vector(1200, 476)
        this.graphics.use(Resources.Puppypen.toSprite())

    }


}

export class Tower extends Actor {

    constructor() {
        super({
            // collisionType: CollisionType.Active,
            // collider: Shape.Box(5000, 5000)
        })
    }


    onInitialize(engine) {
        // Scale and position the tower (hardcoded, change position by person eventually)
        this.scale = new Vector(0.08, 0.08)
        this.pos = new Vector(420, 400)
        this.range = 100
        this.damage = 1
        this.cost = 100


        // Set the image of the tower
        this.graphics.use(Resources.Tower.toSprite())

    }
}