import { Actor, Vector, Engine, CollisionType, Shape, Timer } from "excalibur"
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