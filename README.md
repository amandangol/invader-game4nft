# StackUpInvader Game Upgrades

These upgrades are implemented in an existing game built on the campaign of Gamer Onboarding platform with Immutable Passport integration.

## NFT Levels, Invaders Upgrade, and Spaceship Enhancements

### 1. **NFT Levels:**

- Additional NFT levels added for player accomplishments.
- Each level introduces unique badges with distinct features.

### 2. **Spaceship Upgrades:**

- Spaceship upgrades triggered by reaching specific NFT levels.
- Upgrades include enhanced firepower, improved mobility, and special abilities.

### 3. **Invader Challenges:**

- Evolving invader behavior with each NFT level.
- Gradual speed increases and altered shooting patterns for new challenges.

### 4. **Invader Shooting Upgrade:**

- Significant invader upgrade at NFT level 4.
- Altered alien shooting behavior with multiple bullets fired simultaneously.

### 5. **Game Pausing Mechanism:**

- Game pauses at certain NFT levels, allowing players to claim achievements.
- Upgrades and changes highlighted for an immersive gaming narrative.

### 6. **NFT Display:**

- On-screen display of earned NFT badges showcases player accomplishments and progression.

### 7. **Hit Effects:**

- Visual hit effects with dynamic visuals for player-alien interactions.
- Player hit effect creates an exclusion blend mode, with a blast effect and gradual fade.

## Game Sound Enhancements

**Sound Effects and Music:**

- Implemented p5.sound library for a rich audio experience.
- Sounds include shooting, taking damage, enemies exploding, and continuous game music played on a loop.
- Delay Mechanism: Implemented time delay for shooting and enemy explosion sounds to prevent lag.
- Limits the number of concurrent sound effects for a smoother gaming experience.

## Alien Explosion Upgrade

### Upgrade Highlights

- **Dynamic Particles:** I've added a new `Particle` class that brings dynamic particles to life around the alien explosion.

- **Randomized Characteristics:** Each particle boasts random sizes, colors, and movement directions, injecting a burst of unpredictability into every explosion.

- **Fading Effect:** Watch as the particles gracefully fade away, leaving a lasting impression and enhancing the overall visual impact.

### Implementation Details

The `Particle` class, now part of `Particles.js`, takes charge of creating and animating these dynamic particles. It's the secret sauce behind the mesmerizing alien explosions in the game.

## Player Hit Effect Enhancement

## Enhancement Details

- **Visual Immersion:** The hit effect has been revamped to provide a more immersive and visually engaging experience for players.

- **Dynamic Feedback:** With dynamic colors and enhanced animation, the hit effect delivers immediate and impactful feedback to players during gameplay.

- **Improved Aesthetics:** The upgrade brings a higher level of aesthetics, contributing to an overall enriched gaming atmosphere.

## Technical Implementation

The core of this enhancement lies in the `drawHitEffect` function within the `Player` class. This function has been optimized to deliver a visually stunning hit effect when a player encounters alien bullets.

## Dynamic Debris Rotation

Experience an enhanced gaming environment with dynamic rotation added to asteroids and debris in StackUpInvader.

### 1. **Asteroid Rotation:**

- Asteroids now rotate dynamically for a visually engaging experience.
- Variable rotation rates add complexity and challenge.

### 2. **Debris Rotation:**

- Debris, including asteroids, showcase dynamic rotation.
- Randomized rotation direction introduces unpredictability.

### 3. **Size Variation:**

- Asteroid size increased for diverse and challenging obstacles.

### 4. **Spawn Variation:**

- Debris objects spawn from both left and right sides, creating a dynamic gaming environment.

### 5. **Reset Mechanism:**

- Debris objects reset off-screen, ensuring a continuous stream of rotating obstacles.

These upgrades are implemented within the game code, providing a seamless blend of enhanced player capabilities, invader dynamics, and an extended range of NFT levels. Embrace the challenge, adapt your strategies, and enjoy the intensified gaming experience in StackInvader!
