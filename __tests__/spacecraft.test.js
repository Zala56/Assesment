const Spacecraft = require("../Spacecraft")


describe('Spacecraft', () => {
    test('execute sample case 1', () => {
      const spacecraft = new Spacecraft(0, 0, 0, 'N');
  
      spacecraft.executeCommands(['r', 'f', 'l', 'b', 'u']);
    
  
      expect(spacecraft.getPosition()).toEqual({ x: 1, y: -1, z: 0 });
      expect(spacecraft.getDirection()).toBe('Up');
    });
  });

describe('Spacecraft', () => {
  test('excute sample case 2', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'S');

    spacecraft.executeCommands(['f', 'r', 'u', 'b', 'l']);
  

    expect(spacecraft.getPosition()).toEqual({ x: 1, y: -1, z: 0 });
    expect(spacecraft.getDirection()).toBe('S');
  });
});

  describe('Spacecraft', () => {
    test('execute sample case 3', () => {
      const spacecraft = new Spacecraft(0, 0, 0, 'N');
  
      spacecraft.executeCommands(['r', 'r', 'f', 'f', 'f']);
    
  
      expect(spacecraft.getPosition()).toEqual({ x: 0, y: -3, z: 0 });
      expect(spacecraft.getDirection()).toBe('S');
    });
  });

 