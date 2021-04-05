import { TestBed } from '@angular/core/testing';
import { DraggableAlreadyActiveError } from 'src/exceptions/DraggableAlreadyActiveError';
import { NoDroppableActiveError } from 'src/exceptions/NoDroppableActiveError';
import { Draggable } from '../directives/draggable.directive';
import { DropTarget } from '../directives/drop-target.directive';

import { DraggingService } from './dragging.service';

describe('DraggingService', () => {
  let serviceUnderTest !: DraggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    serviceUnderTest = TestBed.inject(DraggingService);
  });

  it('should be created', () => {
    expect(serviceUnderTest).toBeTruthy();
  });

  //----------------------
  // START DRAG
  //----------------------
  it('should store the draggable when it starts dragging', () => {
    // Arrange
    const draggable = new Draggable();

    // Act
    serviceUnderTest.startDrag(draggable);

    // Assert
    expect(serviceUnderTest.activeDraggable).toBe(draggable);
  });

  it('should throw an error if startDrag is called when a draggable is active', () => {
    // Arrange
    const draggable = new Draggable(["test"]);
    serviceUnderTest.activeDraggable = draggable;

    // Act & Assert
    expect(() => serviceUnderTest.startDrag(new Draggable())).toThrow(DraggableAlreadyActiveError());
  });

  //----------------------
  // CANCEL DRAG
  //----------------------
  it('should set the draggable to null when dragging is cancelled', () => {
    // Arrange
    serviceUnderTest.activeDraggable = new Draggable();

    // Act
    serviceUnderTest.cancelDrag();

    // Assert
    expect(serviceUnderTest.activeDraggable).toBeNull();
  });

  //----------------------
  // DROP
  //----------------------
  it('should set the draggable to null when a drop succeedes', () => {
    // Arrange
    serviceUnderTest.activeDraggable = new Draggable();

    // Act
    const dropped = serviceUnderTest.drop(new DropTarget());

    // Assert
    expect(serviceUnderTest.activeDraggable).toBeNull();
    expect(dropped).toBeTrue();
  });

  it('should keep the same draggable when a drop fails', () => {
    // Arrange
    const draggable = new Draggable(["test"]);
    serviceUnderTest.activeDraggable = draggable;

    // Act
    const dropped = serviceUnderTest.drop(new DropTarget());

    // Assert
    expect(serviceUnderTest.activeDraggable).toBe(draggable);
    expect(dropped).toBeFalse();
  });

  it('should throw an error if there is no droppable active', () => {
    // Act & Assert
    expect(() => serviceUnderTest.drop(new DropTarget())).toThrow(NoDroppableActiveError());;
  });

  //----------------------
  // CAN DROP
  //----------------------
  it('should throw an error if there is no droppable active', () => {
    // Arrange

    // Act & Assert
    expect(() => serviceUnderTest.canDrop(new DropTarget("test"))).toThrow(NoDroppableActiveError());
  });

  it('should allow a drop if the targets is contained in the targetable list', () => {
    // Arrange
    const draggable = new Draggable(["test"]);
    serviceUnderTest.activeDraggable = draggable;

    // Act
    const canDrop = serviceUnderTest.canDrop(new DropTarget("test"));

    // Assert
    expect(canDrop).toBeTrue();
  });

  it('should allow a drop if the targets is contained in the targetable list', () => {
    // Arrange
    const draggable = new Draggable(["a", "b", "c"]);
    serviceUnderTest.activeDraggable = draggable;

    // Act
    const canDrop = serviceUnderTest.canDrop(new DropTarget("b"));

    // Assert
    expect(canDrop).toBeTrue();
  });

  it('should allow a drop if the targetable list is empty', () => {
    // Arrange
    const draggable = new Draggable();
    serviceUnderTest.activeDraggable = draggable;

    // Act
    const canDrop = serviceUnderTest.canDrop(new DropTarget("test"));

    // Assert
    expect(canDrop).toBeTrue();
  });

  it('should NOT allow a drop if the targets is NOT contained in the targetable list', () => {
    // Arrange
    const draggable = new Draggable(["a", "b"]);
    serviceUnderTest.activeDraggable = draggable;

    // Act
    const canDrop = serviceUnderTest.canDrop(new DropTarget("test"));

    // Assert
    expect(canDrop).toBeFalse();
  });

});
