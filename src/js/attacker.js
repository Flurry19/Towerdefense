import { Actor, Vector, Engine, Collider, CollisionType, Shape, CollisionGroup } from "excalibur"
import { Resources } from "./resources"
import { Puppypen } from "./puppypen"
// Normal speed + 2 damage attacker
export class Attacker extends Actor {

    health
    scaleObject
    speed
    game

    constructor(health, speed, s) {
        super({
            collisionType: CollisionType.Active,
            collider: Shape.Box(300, 300)
        })
        console.log('meow')

        // Set the health of the attacker
        this.health = health
        this.speed = speed
        this.scaleObject = s

        // Wait 3 seconds for the attacker to spawn
        this.actions.delay(3000).callMethod(() => {
        })
    }


    onInitialize(engine) {
        this.game = engine
        // Scale and position the start of the attacker
        this.pos = new Vector(-250, 147)
        this.scale = this.scaleObject

        // Let the attacker walk the path
        this.actions
            .moveTo(new Vector(290, 147), this.speed)
            .moveTo(new Vector(290, 537), this.speed)
            .moveTo(new Vector(608, 537), this.speed)
            .moveTo(new Vector(608, 147), this.speed)
            .moveTo(new Vector(992, 147), this.speed)
            .moveTo(new Vector(992, 465), this.speed)
            .moveTo(new Vector(2000, 465), this.speed);

        // Set the image of the attacker
        this.graphics.use(Resources.Attacker.toSprite())

        this.on('collisionstart', (evt) => this.onCollisionStart(evt))
    }

    onCollisionStart(evt) {
        if (evt.other instanceof Puppypen) {
            this.kill()
            this.game.decreaseLives(this.health)
        }
    }
}

