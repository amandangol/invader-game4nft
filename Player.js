class Player {
    constructor(playerShooterImage, imgNft1, hitAudio, alienExplosionSound, shootingSound, secondUpgradedShooterImage, thirdUpgradedShooterImage) {
      this.image = playerShooterImage;
      this.secondUpgradedShooterImage = secondUpgradedShooterImage;
      this.thirdUpgradedShooterImage = thirdUpgradedShooterImage;
      this.imgNft1 = imgNft1;
      this.hitSound = hitAudio;
      this.explodeAlienSound = alienExplosionSound;
      this.shootSound = shootingSound;
      this.x = width / 2;
      this.y = height - 30;
      this.isMovingLeft = false;
      this.isMovingRight = false;
      this.isMovingUp = false;
      this.isMovingDown = false;
      this.bullets = [];
      this.lives = 3;
      this.maxBullets = 2;
      this.score = 0;
      this.r = 10;
      this.nft = false;
      this.gas = [];
      this.nftShown = { '1': false, '2': false, '3': false, '4': false, '5': false};
      this.gamePaused = false;
      this.resumeCount = 0;
      this.hitAlpha = 255;
      this.hitEffect = false;
      this.firstNftScore = 50;
      this.secondNftScore = 150;
      this.thirdNftScore = 300;
      this.fourthNftScore = 500;
      this.fifthNftScore = 700
      this.lastExplodeTime = 0;
    }
  
    showNft(tokenId) {
      if (!this.nftShown[tokenId]) {
        this.nft = true;
        this.nftShown[tokenId] = true;
        window.getData(tokenId);
      }
    }
  
    upgradeSpaceship(image, maxBullets) {
        this.image = image;
        this.maxBullets = maxBullets;
    }
  
    respawn() {
      this.lives -= 1;
      this.hitEffect = true;
      this.resetPos();
    }
  
    update() {
      if (this.gamePaused) return;
      this.handleMovement();
      this.updateBullets();
    }
  
    handleMovement() {
      if (this.isMovingRight && this.x < width - 40) {
        this.x += 1;
      } else if (this.isMovingLeft && this.x > 0) {
        this.x -= 1;
      }
  
      if (this.isMovingUp && this.y > 0) {
        this.y -= 1;
      } else if (this.isMovingDown && this.y < height - 30) {
        this.y += 1;
      }
    }
  
    explodeAliens(i) {
      const currentTime = millis();
      if (currentTime - this.lastExplodeTime >= 300) {
        this.explodeAlienSound.play();
        this.lastExplodeTime = currentTime;
      }
  
      for (let p = 0; p < 5; p++) {
        let particleColor = color(255, 0, 0);
        particlesArray.push(new Particle(this.bullets[i].x, this.bullets[i].y, particleColor));
      }
    }
   
    updateBullets() {
      for (let i = this.bullets.length - 1; i >= 0; i--) {
        this.bullets[i].update();
        if (this.hasHitAlien(this.bullets[i])) {
          this.explodeAliens(i);
          this.bullets.splice(i, 1);
          this.score += 10;
          break;
        } else if (this.bullets[i].isOffScreen()) {
          this.bullets.splice(i, 1);
          break;
        }
      }
    }
  
    pauseGame(tokenId) {
      this.gamePaused = true;
      this.showNft(tokenId);
    }
  
    resumeGame() {
        this.gamePaused = false;
        
        console.log('Resuming game...');
      
        if (this.score >= this.secondNftScore) {
          this.upgradeSpaceship(this.secondUpgradedShooterImage, 4);
          console.log('Spaceship upgraded to level 2');
        }
      
        if (this.score >= this.fourthNftScore) {
          this.upgradeSpaceship(this.thirdUpgradedShooterImage, 6);
          console.log('Spaceship upgraded to level 4');
        }
      
      }
      
    
  
    moveLeft() {
      this.isMovingRight = false;
      this.isMovingLeft = true;
    }
  
    moveRight() {
      this.isMovingLeft = false;
      this.isMovingRight = true;
    }
  
    moveUp() {
      this.isMovingUp = true;
      this.isMovingDown = false;
    }
  
    moveDown() {
      this.isMovingUp = false;
      this.isMovingDown = true;
    }
  
    shoot() {
        const bulletOffset = 5;
        if (this.bullets.length < this.maxBullets) {
            this.bullets.push(new PlayerBullet(this.x + this.r, this.y, this.playerIsUp()));
    
            if (this.maxBullets > 2) {
                if (this.score >= this.secondNftScore && this.score < this.fourthNftScore) {
                    // Level 2: Fire two bullets
                    this.bullets.push(new PlayerBullet(this.x - this.r + bulletOffset, this.y, this.playerIsUp()));
                } else if (this.score >= this.fourthNftScore) {
                    // Level 3 and beyond: Fire four bullets
                    this.bullets.push(new PlayerBullet(this.x - this.r + bulletOffset, this.y, this.playerIsUp()));
                    this.bullets.push(new PlayerBullet(this.x - this.r + bulletOffset * 2, this.y, this.playerIsUp()));
                    this.bullets.push(new PlayerBullet(this.x - this.r + bulletOffset * 3, this.y, this.playerIsUp()));
                }
            }
        }
    }
    
    
    

   
  
    draw() {
        image(this.image, this.x, this.y, this.r * 2, this.r * 2);
        this.drawBullets();
        this.drawGas();
      
        this.handleNftPause();
      
        // Check for spaceship upgrades based on NFT badge levels
        if (this.score >= this.firstNftScore && !this.nftShown['1']) {
            this.pauseGame('1');
        } else if (this.score >= this.secondNftScore && !this.nftShown['2']) {
            this.pauseGame('2');
            this.upgradeSpaceship(this.secondUpgradedShooterImage, 4); // Upgrade spaceship to the second level
        } else if (this.score >= this.thirdNftScore && !this.nftShown['3']) {
            this.pauseGame('3');
        } else if (this.score >= this.fourthNftScore && !this.nftShown['4']) {
            this.pauseGame('4');
            this.upgradeSpaceship(this.thirdUpgradedShooterImage, 6); // Upgrade spaceship to the third level

        }else if(this.score>=this.fifthNftScore && !this.nftShown['5']){
            this.pauseGame('5');
            this.gainExtraLives(2); // Gain two extra lives at NFT level 5
        }
        
      
        if (this.hitEffect) {
          this.drawHitEffect();
        }
      }
      
  
      handleNftPause() {
        for (let i = 1; i <= 5; i++) {
            const nftScore = this.getNftScore(i);
            if (this.score >= nftScore && !this.nftShown[i.toString()]) {
                this.pauseGame(i.toString());
                console.log(`Game paused at NFT level ${i}`);
    
                if (i === 5) {
                    this.gainExtraLives(2); // Gain two extra lives at NFT level 5
                    console.log('Extra lives gained!');
                }
    
                break;
            }
        }
    }
    
      
      gainExtraLives(numLives) {
        this.lives += numLives;
      }
      
  
    getNftScore(level) {
      return this[`level${level}NftScore`];
    }
  
    drawHitEffect() {
      blendMode(EXCLUSION);
      let flameColor = color(255, 165, 0);
      fill(flameColor.levels[0], flameColor.levels[1], flameColor.levels[2], this.hitAlpha);
  
      let blastSize = map(this.hitAlpha, 0, 255, 0, 100);
      ellipse(this.x + this.r, this.y + this.r, blastSize, blastSize);
  
      blendMode(BLEND);
      this.hitAlpha -= 10;
      if (this.hitAlpha <= 0) {
        this.hitEffect = false;
        this.hitAlpha = 255;
      }
    }
  
    resetPos() {
      this.hitEffect = true;
      this.hitEffectX = this.x;
      this.hitEffectY = this.y;
    }
  
    drawBullets() {
      for (let bullet of this.bullets) {
        bullet.draw();
      }
    }
  
    drawGas() {
      let blocks = 8;
      let blockW = this.r / 2;
      let blockH = this.r / 3;
  
      for (let i = 0; i < blocks; i++) {
        let currentW = blockW - i + 2;
        let px = this.x + blockW * 2 - currentW / 2;
        if (this.isMovingLeft === true) {
          px += 2 * i + 1;
        } else if (this.isMovingRight === true) {
          px -= 2 * i + 1;
        }
  
        fill(245, random(150, 220), 66);
        rect(px + random(-2, 2), this.y + this.r * 2 + i * blockH + 4 + random(-2, 2), currentW, blockH);
      }
    }
  
    drawLives() {
      for (let i = 0; i < this.lives; i++) {
        image(this.image, width - (i + 1) * 30, 10, this.r * 2, this.r * 2);
      }
    }
  
    drawNfts() {
      for (let i = 0; i < (window.nfts ?? []).length; i++) {
        if (window.nfts[i]?.name === "Level 1 Badge" && window.nfts[i]?.contract_address === '0xdeab4e436bc7cc9a10fa1a55a22455e080970868') {
          image(this.imgNft1, width / 2 - this.r * 4 + (i + 1) * 30, 10, this.r * 2.5, this.r * 2.5);
        }
      }
    }
    
  
    drawInfo() {
        fill(255);
        let bounty_text = window?.userProfile?.email + ": ";
        let bounty_text_w = textWidth(bounty_text);
        let score = text(bounty_text, 50, 25);
        push();
        fill(100, 255, 100);
        text(this.score, bounty_text_w + 50, 25);
    
        // Display NFT level
        let nftLevelText = `NFT Level: ${this.getCurrentNftLevel()}`;
        text(nftLevelText, width - 400, 25);
    
        pop();
        this.drawLives();
        this.drawNfts();
    }
    
    getCurrentNftLevel() {
        if (this.score >= this.fifthNftScore) {
            return 5;
        } else if (this.score >= this.fourthNftScore) {
            return 4;
        } else if (this.score >= this.thirdNftScore) {
            return 3;
        } else if (this.score >= this.secondNftScore) {
            return 2;
        } else if (this.score >= this.firstNftScore) {
            return 1;
        } else {
            return 0;
        }
    }
    
  
    hasHitAlien(bullet) {
      return invaders.checkCollision(bullet.x, bullet.y);
    }
  
    playerIsUp() {
      return this.y > invaders.aliens[0].y;
    }
  
    loseLife() {
      if (this.lives > 0) {
        this.hitSound.play();
        this.respawn();
      }
    }
  }
  