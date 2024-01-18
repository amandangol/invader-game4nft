class Invaders {
    constructor(alienImages, rowsCount) {
        this.alienImages = alienImages;
        this.rowsCount = rowsCount;
        this.direction = 0;
        this.y = 40;
        this.aliens = this.initialiseAliens();
        this.bullets = [];
        this.movingDown = true;
        this.speed = 0.2;
        this.timeSinceLastBullet = 0;
        this.difficultyMultiplier = 1;
    }

    update(player) {
        // Gradually increase difficulty based on NFT level
        const speedIncrements = [0, 0.2, 0.3, 0.4, 0.5]; // Adjust the increments as needed
    
        const currentNftLevel = Math.min(
            Math.floor(player.score / player.firstNftScore) + 1,
            speedIncrements.length - 1
        );
    
        this.speed = 0 + speedIncrements[currentNftLevel];
    
        for (let i = this.aliens.length - 1; i >= 0; i--) {
            let alien = this.aliens[i];
            if (this.direction == 0) {
                alien.x += this.speed * this.difficultyMultiplier;
            } else if (this.direction == 1) {
                alien.x -= this.speed * this.difficultyMultiplier;
            }
            if (alien.hasHitPlayer(player)) {
                player.loseLife();
                this.aliens.splice(i, 1);
            }
        }
    
        if (this.hasChangedDirection()) {
            this.moveAlienDown();
        }
        if (this.aliens.length == 0) {
            this.nextLevel();
        }
    
        if (this.timeSinceLastBullet >= 40) { // Adjust the value (lower value means more frequent bullets)
            let bottomAliens = this.getBottomAliens();
            if (bottomAliens.length) {
                this.makeABottomAlienShoot(bottomAliens);
            }
            this.timeSinceLastBullet = 0; // Reset the time counter
        }
        this.timeSinceLastBullet++;
        
          
        this.updateBullets(player);
    }
    

    

    initialiseAliens() {
        let aliens = [];
        let y = 40;
        for (let i = 0; i < this.rowsCount; i++) {
            for (let x = 40; x < width - 40; x += 30) {
                aliens.push(new Alien(x, y, this.alienImage));
            }
            y += 40;
        }
        return aliens;
    }

    draw() {
        for (let bullet of this.bullets) {
            fill('#f30000')
            rect(bullet.x, bullet.y, 4, 10);
        }

        for (let alien of this.aliens) {
            alien.draw();
        }
    }


    hasChangedDirection() {
        for (let alien of this.aliens) {
            if (alien.x >= width - 40) {
                this.direction = 1;
                return true;
            } else if (alien.x <= 20) {
                this.direction = 0;
                return true;
            }
        }
        return false;
    }

    moveAlienDown() {
        for (let alien of this.aliens) {
            if (this.movingDown) {
                alien.y += 10;
                if (alien.y >= height - 30) {
                    this.movingDown = false;
                }
            } else {
                alien.y -= 10;
                if (alien.y <= 0) {
                    this.movingDown = true;
                }
            }
        }
    }

    getBottomAliens() {
        let allXPositions = this.getAllXPositions();
        let aliensAtTheBottom = [];
        for (let alienAtX of allXPositions) {
            let bestYPosition = 0;
            let lowestAlien;
            for (let alien of this.aliens) {
                if (alien.x == alienAtX) {
                    if (alien.y > bestYPosition) {
                        bestYPosition = alien.y;
                        lowestAlien = alien;
                    }
                }
            }
            aliensAtTheBottom.push(lowestAlien);
        }
        return aliensAtTheBottom;
    }

    getAllXPositions() {
        let allXPositions = new Set();
        for (let alien of this.aliens) {
            allXPositions.add(alien.x);
        }
        return allXPositions
    }

    nextLevel() {
        this.speed += 0.2;
        this.aliens = this.initialiseAliens();
    }

    initialiseAliens() {
        let aliens = [];
        let y = 40;
        for (let i = 0; i < this.rowsCount; i++) {
            for (let x = 40; x < width - 40; x += 30) {
                aliens.push(new Alien(x, y, this.alienImages));
            }
            y += 40;
        }
        return aliens;
    }

    draw() {
        for (let bullet of this.bullets) {
            fill('#f30000')
            rect(bullet.x, bullet.y, 4, 10);
        }

        for (let alien of this.aliens) {
            alien.draw();
        }
    }

    checkCollision(x, y) {
        for (let i = this.aliens.length - 1; i >= 0; i--) {
            let currentAlien = this.aliens[i];
            if (dist(x, y, currentAlien.x + 11.5, currentAlien.y + 8) < 10) {
                this.aliens.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    makeABottomAlienShoot(bottomAliens) {
        let shootingAlien = random(bottomAliens);
    
        // Check if the player has reached level 4 NFT
        if (player && player.score >= player.fourthNftScore) {
            // Shoot three bullets
            for (let i = 0; i < 3; i++) {
                let bullet = new AlienBullet(shootingAlien.x + 10, shootingAlien.y + 10);
                this.bullets.push(bullet);
            }
        } else {
            // Shoot a single bullet
            let bullet = new AlienBullet(shootingAlien.x + 10, shootingAlien.y + 10);
            this.bullets.push(bullet);
        }
    
        this.timeSinceLastBullet = 0;
    }
    
    
    

    updateBullets(player) {
        // console.log("player!!!!", player);
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            this.bullets[i].y += 2;
            if (this.bullets[i].hasHitPlayer(player)) {
                player.loseLife();
                this.bullets.splice(i, 1);
            }
        }
    }


}