import { Actor, Color, Vector, CollisionType } from "excalibur";

export class Bullet extends Actor {
  constructor(position, target) {
    super({
      pos: position,
      width: 10,
      height: 10,
      color: Color.Red,
      collisionType: CollisionType.Passive,
    });

    this.target = target;
    this.speed = 300; // Adjust the speed as desired
  }

  draw() {
    this.center.beginPath()
    this.center.arc(this.positionm.x, this.position.y, 10, 0, Math.PI * 2)
    this.center.fillStyle = 'orange'
    this.center.fill()
  }

  onInitialize(engine) {
    // this.vel = this.target.pos.clone().sub(this.pos).normalize().scale(this.speed);
  }

  update(engine, delta) {
    super.update(engine, delta);

    if (this.pos.distance(this.target.pos) < this.vel.len() * delta) {
      // Projectile reached the target
      this.target.damage(); // Call a method on the target to inflict damage
      this.kill();
    }
  }
}
