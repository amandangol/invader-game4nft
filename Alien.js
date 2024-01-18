class Alien {
    constructor(x, y, images) {
        this.x = x;
        this.y = y;
        this.r = 10;
        this.images = images;
    }

    draw() {
        image(this.images, this.x, this.y, this.r * 2, this.r * 2);
    }
    hasHitPlayer(player) {
          if (dist(this.x, this.y, player.x, player.y) < this.r + player.r) {
            return true;
        }
        return false
      }
}