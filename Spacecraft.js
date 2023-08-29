class Spacecraft {
  constructor(x, y, z, direction) {
    this.position = { x, y, z };
    this.direction = direction;
  }

  moveForward() {
    const { x, y, z } = this.position;
    switch (this.direction) {
      case 'N':
        this.position = { x, y: y + 1, z };
        break;
      case 'S':
        this.position = { x, y: y - 1, z };
        break;
      case 'E':
        this.position = { x: x + 1, y, z };
        break;
      case 'W':
        this.position = { x: x - 1, y, z };
        break;
      case 'Up':
        this.position = { x, y, z: z + 1 };
        break;
      case 'Down':
        this.position = { x, y, z: z - 1 };
        break;
    }
  }

  moveBackward() {
    const { x, y, z } = this.position;
    switch (this.direction) {
      case 'N':
        this.position = { x, y: y - 1, z };
        break;
      case 'S':
        this.position = { x, y: y + 1, z };
        break;
      case 'E':
        this.position = { x: x - 1, y, z };
        break;
      case 'W':
        this.position = { x: x + 1, y, z };
        break;
      case 'Up':
        this.position = { x, y, z: z - 1 };
        break;
      case 'Down':
        this.position = { x, y, z: z + 1 };
        break;
    }
  }

  turnRight() {
    const directions = ['N', 'E', 'S', 'W', 'Up', 'Down'];
    const currentIndex = directions.indexOf(this.direction);
    const newIndex = (currentIndex + 1) % directions.length;
    this.direction = directions[newIndex];
  }

  turnLeft() {
    const directions = ['N', 'E', 'S', 'W', 'Up', 'Down'];
    const currentIndex = directions.indexOf(this.direction);
    const newIndex = (currentIndex - 1 + directions.length) % directions.length;
    this.direction = directions[newIndex];
  }

  rotateUp() {
    if (this.direction === 'N' || this.direction === 'S') {
      this.direction = 'Up';
    }
  }

  rotateDown() {
    if (this.direction === 'N' || this.direction === 'S') {
      this.direction = 'Down';
    }
  }

  executeCommands(commands) {
    for (const command of commands) {
      switch (command) {
        case 'f':
          this.moveForward();
          break;
        case 'b':
          this.moveBackward();
          break;
        case 'r':
          this.turnRight();
          break;
        case 'l':
          this.turnLeft();
          break;
        case 'u':
          this.rotateUp();
          break;
        case 'd':
          this.rotateDown();
          break;
        default:
          // unexpected case  
          break;
      }
    }
  }

  getPosition() {
    return this.position;
  }

  getDirection() {
    return this.direction;
  }
}

module.exports = Spacecraft;