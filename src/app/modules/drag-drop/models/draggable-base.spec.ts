import { DraggableBase } from './draggable-base';

describe('Draggable', () => {
  it('should create an instance', () => {
    expect(new DraggableBase()).toBeTruthy();
  });

  describe('construction', () => {
    it('should correctly initialse the targatables array and drop target when NO values are provided', () => {
      // Act
      const draggable = new DraggableBase();

      // Assert
      expect(draggable.targetables).toEqual(["default"]);
      expect(draggable.dropTarget).toBeNull();
    });
  });
});
