# StackUpInvader Game Upgrades

The StackUpInvader game has undergone substantial upgrades, introducing new features and enhancements that enrich the gaming experience. These upgrades are integral to the campaign of Gamer Onboarding platform with Immutable Passport integration.

## NFT Levels, Invaders Upgrade, and Spaceship Enhancements

### 1. **NFT Levels:**

- **Description:** Additional NFT levels have been implemented to acknowledge player accomplishments.
- **Implementation:** The `getData` function in the provided JavaScript file manages the retrieval and display of earned NFT badges, showcasing player achievements and progression.

### 2. **Spaceship Upgrades:**

- **Description:** Spaceship upgrades are now triggered upon reaching specific NFT levels, offering enhanced firepower, improved mobility, and special abilities.
- **Implementation:** Methods like `nextLevel` in the `Invaders` class handle the progression logic and initialization of upgraded spaceship features.

### 3. **Invader Challenges:**

- **Description:** Evolving invader behavior presents new challenges with each NFT level, featuring gradual speed increases and altered shooting patterns.
- **Implementation:** The `update` method in the `Invaders` class manages the dynamic behavior of invader entities, ensuring a progressive and challenging gaming experience.

### 4. **Invader Shooting Upgrade:**

- **Description:** At NFT level 4, a significant invader shooting upgrade has been introduced, altering alien shooting behavior to include the firing of multiple bullets simultaneously.
- **Implementation:** The `makeABottomAlienShoot` method in the `Invaders` class handles the shooting behavior, considering the player's NFT level.

### 5. **Game Pausing Mechanism:**

- **Description:** The game now pauses at specific NFT levels, allowing players to claim achievements and highlighting upgrades for an immersive gaming narrative.
- **Implementation:** The `claim-btn` functionality in the provided JavaScript file enables players to claim their achievements when prompted.

### 6. **NFT Display:**

- **Description:** An on-screen display showcases earned NFT badges, providing a visual representation of player accomplishments.
- **Implementation:** The `getData` function in the provided JavaScript file fetches and displays NFT details, enhancing the player's sense of progression.

### 7. **Hit Effects:**

- **Description:** Visual hit effects enhance player-alien interactions, with a player hit effect featuring an exclusion blend mode, blast effect, and gradual fade.
- **Implementation:** The `Player` class and the `drawHitEffect` function handle the graphical representation of player-alien interactions.

## Game Sound Enhancements

**Sound Effects and Music:**

- **Description:** The integration of the p5.sound library enriches the gaming experience with sounds for shooting, taking damage, enemies exploding, and continuous game music.
- **Implementation:** Sound-related functionalities in the provided JavaScript file, including time delays and limits for concurrent sound effects, contribute to a smoother and more immersive gaming soundscape.

## Alien Explosion Upgrade

### Upgrade Highlights

- **Dynamic Particles:** A new `Particle` class has been introduced to create dynamic particles around alien explosions, adding visual appeal.
- **Randomized Characteristics:** Each particle has random sizes, colors, and movement directions, injecting unpredictability into every explosion.
- **Fading Effect:** Particles gracefully fade away, contributing to the overall visual impact of alien explosions.

### Implementation Details

- The `Particle` class, part of `Particles.js`, orchestrates the creation and animation of dynamic particles, enhancing the visual spectacle of alien explosions.

## Player Hit Effect Enhancement

### Enhancement Details

- **Visual Immersion:** The hit effect has been revamped to provide a more immersive and visually engaging experience for players.
- **Dynamic Feedback:** Dynamic colors and enhanced animation deliver immediate and impactful feedback to players during gameplay.
- **Improved Aesthetics:** The upgrade brings a higher level of aesthetics, contributing to an overall enriched gaming atmosphere.

### Technical Implementation

- The core of this enhancement lies in the optimized `drawHitEffect` function within the `Player` class, providing a visually stunning hit effect when a player encounters alien bullets.

## Dynamic Debris Rotation

- Experience an enhanced gaming environment with dynamic rotation added to asteroids and debris in StackUpInvader.

### 1. **Asteroid Rotation:**

- **Description:** Asteroids now rotate dynamically for a visually engaging experience, featuring variable rotation rates.
- **Implementation:** The `Asteroid` class governs the dynamic rotation of asteroids, adding complexity and challenge to the game.

### 2. **Debris Rotation:**

- **Description:** Debris, including asteroids, showcase dynamic rotation with randomized rotation directions for added unpredictability.
- **Implementation:** The `Debris` class manages the dynamic rotation of debris objects, introducing an element of unpredictability.

### 3. **Size Variation:**

- **Description:** Asteroid size has been increased for diverse and challenging obstacles, enhancing the gaming experience.
- **Implementation:** The `Asteroid` class controls the size variation of asteroids, adding diversity to the obstacles players face.

### 4. **Spawn Variation:**

- **Description:** Debris objects spawn from both left and right sides, creating a dynamic gaming environment with varied spawning patterns.
- **Implementation:** The `Debris` class governs the spawn variation of debris objects, ensuring a continuous stream of rotating obstacles.

### 5. **Reset Mechanism:**

- **Description:** Debris objects reset off-screen, ensuring a continuous stream of rotating obstacles without disruption.
- **Implementation:** The `Debris` class ensures that debris objects reset off-screen, maintaining a seamless and challenging gameplay flow.

These upgrades collectively contribute to an immersive gaming experience, offering enhanced player capabilities, dynamic invader behavior, and an extended range of NFT levels. Players are encouraged to embrace the challenges, adapt their strategies, and enjoy the intensified gaming experience in StackInvader!
