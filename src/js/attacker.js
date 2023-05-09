import { Actor } from "excalibur"

export class attacker extends Actor {
    x
    y
    color

    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
        this.graphics.use(Resources.Fish.toSprite())
    }

    onInitialize(Engine) {
        this.on("exitviewport", (event) => this.countdown)
    }


}