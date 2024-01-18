# StackUpInvader Game Upgrades

These upgrades have been seamlessly integrated into an existing game, a cornerstone of the Gamer Onboarding platform with Immutable Passport integration. Each feature is carefully described with reference to the relevant code snippets for a clear understanding.

## NFT Levels, Invaders Upgrade, and Spaceship Enhancements

### 1. **NFT Levels:**

- Additional NFT levels have been introduced to recognize player accomplishments.
- Each level unveils unique badges, each with its own set of distinctive features.

  [Refer to `getData` function in the provided login.js file.]

### 2. **Spaceship Upgrades:**

- Spaceship upgrades are triggered upon reaching specific NFT levels.
- Upgrades encompass enhanced firepower, improved mobility, and special abilities.

  [Refer to `nextLevel` and related methods in the `Invaders` class.]

### 3. **Invader Challenges:**

- Invader behavior evolves with each NFT level.
- Gradual speed increases and altered shooting patterns present players with new challenges.

  [Refer to the `update` method in the `Invaders` class.]

### 4. **Invader Shooting Upgrade:**

- Significantly upgraded invader shooting behavior introduced at NFT level 4.
- Altered alien shooting patterns, with multiple bullets fired simultaneously.

  [Refer to the `makeABottomAlienShoot` method in the `Invaders` class.]

### 5. **Game Pausing Mechanism:**

- The game pauses at certain NFT levels, allowing players to claim achievements.
- Upgrades and changes are highlighted to provide an immersive gaming narrative.

  [Refer to the NFT display section and `claim-btn` functionality in the provided login.js file.]

### 6. **NFT Display:**

- On-screen display showcases earned NFT badges, providing a visual representation of player accomplishments and progression.

  [Refer to the `getData` function in the provided JavaScript file.]

### 7. **Hit Effects:**

- Visual hit effects with dynamic visuals for player-alien interactions.
- Player hit effect creates an exclusion blend mode, with a blast effect and gradual fade.

  [Refer to the `Player` class and `drawHitEffect` function.]

## Game Sound Enhancements

**Sound Effects and Music:**

- Implementation of the p5.sound library enriches the audio experience.
- Sounds include shooting, taking damage, enemies exploding, and continuous game music.
- Delay Mechanism prevents sound lag by implementing time delays for shooting and enemy explosion sounds.

  [Refer to the sound-related functionalities in the provided JavaScript file.]

## Alien Explosion Upgrade

### Upgrade Highlights

- **Dynamic Particles:** A new `Particle` class has been introduced to create dynamic particles around the alien explosion.

  [Refer to the `Particle` class implementation.]

- **Randomized Characteristics:** Each particle possesses random sizes, colors, and movement directions for added unpredictability.

  [Refer to the `Particle` class implementation.]

- **Fading Effect:** Particles gracefully fade away, leaving a lasting impression and enhancing the overall visual impact.

  [Refer to the `Particle` class implementation.]

### Implementation Details

- The `Particle` class, now part of `Particles.js`, orchestrates the creation and animation of dynamic particles for mesmerizing alien explosions.

## Player Hit Effect Enhancement

### Enhancement Details

- **Visual Immersion:** The hit effect has undergone a revamp to offer a more immersive and visually engaging experience for players.

  [Refer to the `Player` class and `drawHitEffect` function.]

- **Dynamic Feedback:** Dynamic colors and enhanced animation deliver immediate and impactful feedback to players during gameplay.

  [Refer to the `Player` class and `drawHitEffect` function.]

- **Improved Aesthetics:** The upgrade elevates aesthetics, contributing to an enriched gaming atmosphere.

  [Refer to the `Player` class and `drawHitEffect` function.]

## Technical Implementation

- The core of the hit effect enhancement lies in the optimized `drawHitEffect` function within the `Player` class.

## Dynamic Debris Rotation

- Experience an enhanced gaming environment with dynamic rotation added to asteroids and debris in StackUpInvader.

### 1. **Asteroid Rotation:**

- Asteroids now rotate dynamically, providing a visually engaging experience with variable rotation rates.

  [Refer to the `debris` class implementation.]

### 2. **Debris Rotation:**

- Debris, including asteroids, showcase dynamic rotation with randomized rotation directions for added unpredictability.

  [Refer to the `Debris` class implementation.]

### 3. **Size Variation:**

- Asteroid size has been increased for diverse and challenging obstacles.

  [Refer to the `debris` class implementation.]

### 4. **Spawn Variation:**

- Debris objects spawn from both left and right sides, creating a dynamic gaming environment.

  [Refer to the `Debris` class implementation.]

### 5. **Reset Mechanism:**

- Debris objects reset off-screen, ensuring a continuous stream of rotating obstacles.

  [Refer to the `Debris` class implementation.]

These upgrades collectively provide an immersive blend of enhanced player capabilities, invader dynamics, and an extended range of NFT levels. Dive into the challenge, adapt your strategies, and savor the intensified gaming experience in StackInvader!
