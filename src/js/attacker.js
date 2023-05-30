import { Actor, Vector, Engine, Collider, CollisionType, Shape, CollisionGroup } from "excalibur"
import { Resources } from "./resources"
// Normal speed + 2 damage attacker
export class Attacker extends Actor {

    constructor() {
        super({
            collisionType: CollisionType.Active,
            collider: Shape.Box(300, 300)
        })
        console.log('meow')

        // Set the health of the attacker
        this.health = 1

        // Wait 3 seconds for the attacker to spawn
        this.actions.delay(3000).callMethod(() => {
        })
    }


    onInitialize(engine) {
        // Scale and position the start of the attacker
        this.scale = new Vector(0.2, 0.2)
        this.pos = new Vector(-250, 147)

        // Let the attacker walk the path
        this.actions.moveTo(new Vector(290, 147), 100).moveTo(new Vector(290, 537), 100).moveTo(new Vector(608, 537), 100).moveTo(new Vector(608, 147), 100).moveTo(new Vector(992, 147), 100).moveTo(new Vector(992, 465), 100).moveTo(new Vector(2000, 465), 100);

        // Set the image of the attacker
        this.graphics.use(Resources.Attacker.toSprite())

    }
}

// Fast speed + 1 damage attacker
export class Fastattacker extends Actor {

    constructor() {
        super({
            collisionType: CollisionType.Active,
            collider: Shape.Box(300, 300)
        })
        console.log('meow')

        // Set the health of the attacker
        this.health = 1

        // Wait 3 seconds for the attacker to spawn
        this.actions.delay(1000).callMethod(() => {
        })
    }


    onInitialize(engine) {
        // Scale and position the start of the attacker
        this.scale = new Vector(0.1, 0.1)
        this.pos = new Vector(-50, 147)

        // Let the attacker walk the path
        this.actions.moveTo(new Vector(290, 147), 1000).moveTo(new Vector(290, 537), 1000).moveTo(new Vector(608, 537), 1000).moveTo(new Vector(608, 147), 1000).moveTo(new Vector(992, 147), 1000).moveTo(new Vector(992, 465), 1000).moveTo(new Vector(2000, 465), 1000);

        // Set the image of the attacker
        this.graphics.use(Resources.Attacker.toSprite())

    }
}

// Slow speed + 5 damage attacker
export class Strongattacker extends Actor {

    constructor() {
        super({
            collisionType: CollisionType.Active,
            collider: Shape.Box(300, 300)
        })
        console.log('meow')

        // Set the health of the attacker
        this.health = 3

        // Wait 3 seconds for the attacker to spawn
        this.actions.delay(6000).callMethod(() => {
        })
    }


    onInitialize(engine) {
        // Scale and position the start of the attacker
        this.scale = new Vector(0.3, 0.3)
        this.pos = new Vector(-450, 147)

        // Let the attacker walk the path
        this.actions.moveTo(new Vector(290, 147), 50).moveTo(new Vector(290, 537), 50).moveTo(new Vector(608, 537), 50).moveTo(new Vector(608, 147), 50).moveTo(new Vector(992, 147), 50).moveTo(new Vector(992, 465), 50).moveTo(new Vector(2000, 465), 50);

        // Set the image of the attacker
        this.graphics.use(Resources.Attacker.toSprite())

    }
}