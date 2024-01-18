class Particle {
  constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = random(2, 6);
      this.vx = random(-1, 1);
      this.vy = random(-1, 1);
      this.alpha = 255;
      this.color = color(255, 0, 0); // Blood red color
      this.dripping = true; // Simulate a dripping effect
  }

  update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.dripping) {
          this.vy += 0.1; // Add gravity-like effect for dripping
      }

      this.alpha -= 2;
  }

  display() {
      noStroke();
      fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha);
      ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  isFinished() {
      return this.alpha <= 0;
  }
}
