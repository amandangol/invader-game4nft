class Debris {
    constructor(image) {
        this.r = 5;
        this.a = 0;
        this.rotationRate = random(-0.1, 0.1); // Adjusted rotation rate for more dynamic movement
        this.resetDebris();
        this.image = image;
        this.rotationDirection = random() < 0.5 ? 1 : -1; // Added rotation direction for variation
    }

    resetDebris() {
        this.y = random(height - 10);
        this.r = random(5, 15); // Increased maximum size for more variation

        let spawnLeftSide = random(1) < 0.5;

        if (spawnLeftSide) {
            this.x = random(-width, 0);
            this.isGoingLeft = false;
        } else {
            this.x = random(width, width * 2);
            this.isGoingLeft = true;
        }
    }

    update() {
        this.x += this.isGoingLeft ? -1 : 1;

        if (this.isOffScreen()) {
            this.resetDebris();
        }
    }

    isOffScreen() {
        return (
            (this.isGoingLeft && this.x < -5) ||
            (!this.isGoingLeft && this.x > width + 5)
        );
    }

    display() {
        push();
        translate(this.x, this.y);
        rotate(this.a);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r * 2, this.r * 2);
        this.a = this.a + this.rotationRate * this.rotationDirection; // Added rotation direction
        pop();
    }

    hasHitPlayer(player) {
        return dist(this.x, this.y, player.x, player.y) < this.r + player.r;
    }
}
