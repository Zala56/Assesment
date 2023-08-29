const Spacecraft = require("../Spacecraft")


//For the north direction
describe('Spacecraft', () => {
    test('execute sample case 1', () => {
      const spacecraft = new Spacecraft(0, 0, 0, 'N');
  
      spacecraft.executeCommands(['r', 'f', 'l', 'b', 'u']);
    
  
      expect(spacecraft.getPosition()).toEqual({ x: 1, y: -1, z: 0 });
      expect(spacecraft.getDirection()).toBe('Up');
    });
  });

 //For the South Direction 
describe('Spacecraft', () => {
  test('excute sample case 2', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'S');

    spacecraft.executeCommands(['f', 'r', 'u', 'b', 'l']);
  

    expect(spacecraft.getPosition()).toEqual({ x: 1, y: -1, z: 0 });
    expect(spacecraft.getDirection()).toBe('S');
  });
});

//For the East direction
describe('Spacecraft', () => {
    test('execute sample case 3', () => {
      const spacecraft = new Spacecraft(0, 0, 0, 'E');
  
      spacecraft.executeCommands(['r', 'r', 'f', 'f', 'f']);
    
  
      expect(spacecraft.getPosition()).toEqual({ x: -3, y: 0, z: 0 });
      expect(spacecraft.getDirection()).toBe('W');
    });
  });

 //For the West Direction
 describe('Spacecraft', () => {
    test('execute sample case 1', () => {
      const spacecraft = new Spacecraft(0, 0, 0, 'W');
  
      spacecraft.executeCommands(['r', 'f', 'l', 'b', 'u']);
    
  
      expect(spacecraft.getPosition()).toEqual({ x: 1, y: 0, z: 1 });
      expect(spacecraft.getDirection()).toBe('W');
    });
  });


 //For the  Up Direction
  describe('Spacecraft', () => {
    test('execute sample case 1', () => {
      const spacecraft = new Spacecraft(0, 0, 0, 'Up');
  
      spacecraft.executeCommands(['r', 'f', 'l', 'b', 'u']);
    
  
      expect(spacecraft.getPosition()).toEqual({ x: 0, y: 0, z:-2 });
      expect(spacecraft.getDirection()).toBe('Up');
    });
  });


   //For the Down Direction
  describe('Spacecraft', () => {
    test('execute sample case 1', () => {
      const spacecraft = new Spacecraft(0, 0, 0, 'Down');
  
      spacecraft.executeCommands(['r', 'f', 'l', 'b', 'u']);
    
  
      expect(spacecraft.getPosition()).toEqual({ x: 0, y: 1, z: 1 });
      expect(spacecraft.getDirection()).toBe('Down');
    });
  });

 
 