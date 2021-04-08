import { TestBed } from '@angular/core/testing';
import { DraggableAlreadyActiveError } from '../errors/draggable-already-active.error';
import { Draggable } from '../models/draggable';
import { DropTarget } from '../models/drop-target';

import { DraggingService } from './dragging.service';

describe('DraggingService', () => {
  let serviceUnderTest : DraggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    serviceUnderTest = TestBed.inject(DraggingService);
  });

  it('should be created', () => {
    expect(serviceUnderTest).toBeTruthy();
  });

  describe("get activeDragable", () => {
    it("should return null if no draggable is active.", () => {
      expect(serviceUnderTest.activeDraggable).toBeNull();
    });
  });

  describe("startDragging", () => {
    it("should store the draggable as the active draggable.", () => {
      // Arrange
      const draggable = new Draggable();

      // Act
      serviceUnderTest.startDragging(draggable);

      // Assert
      expect(serviceUnderTest.activeDraggable).toEqual(draggable);
    });

    it("should throw an error if a draggable is already active.", () => {
      // Arrange
      const activeDraggable = new Draggable();
      const newDraggable = new Draggable();
      spyOnProperty(serviceUnderTest, "activeDraggable", "get").and.returnValue(activeDraggable);

      // Act
      expect(() => serviceUnderTest.startDragging(newDraggable)).toThrow(DraggableAlreadyActiveError());

      // Assert
      expect(serviceUnderTest.activeDraggable).toBe(activeDraggable);
    });
  });

  describe("canDrop", () => {
    it("should call and return the value from can drop on the drop target.", () => {
      // Arrange
      const dropTarget = jasmine.createSpyObj<DropTarget>("DropTarget", ["canDrop"]);
      dropTarget.canDrop.and.returnValue(true);

      const activeDraggable = new Draggable();
      spyOnProperty(serviceUnderTest, "activeDraggable", "get").and.returnValue(activeDraggable);


      // Act
      const canDrop = serviceUnderTest.canDrop(dropTarget);

      // Assert
      expect(canDrop).toBeTrue();
      expect(dropTarget.canDrop).toHaveBeenCalledOnceWith(activeDraggable);
      expect(serviceUnderTest.activeDraggable).toBe(activeDraggable);
    });

    it("should call and return the value from can drop on the drop target.", () => {
      // Arrange
      const dropTarget = jasmine.createSpyObj<DropTarget>("DropTarget", ["canDrop"]);
      dropTarget.canDrop.and.returnValue(false);

      const activeDraggable = new Draggable();
      spyOnProperty(serviceUnderTest, "activeDraggable", "get").and.returnValue(activeDraggable);


      // Act
      const canDrop = serviceUnderTest.canDrop(dropTarget);

      // Assert
      expect(canDrop).toBeFalse();
      expect(dropTarget.canDrop).toHaveBeenCalledOnceWith(activeDraggable);
      expect(serviceUnderTest.activeDraggable).toBe(activeDraggable);
    });
  });

  describe("drop", () => {
    it("should check the draggable can be dropped into the drop target and drop it if it can be dropped.", () => {
      // Arrange
      const dropTarget = jasmine.createSpyObj<DropTarget>("DropTarget", ["canDrop"]);
      dropTarget.canDrop.and.returnValue(true);

      const activeDraggable = new Draggable();
      spyOnProperty(serviceUnderTest, "activeDraggable", "get").and.returnValue(activeDraggable);

      // Act
      serviceUnderTest.drop(dropTarget);

      // Assert
      expect(dropTarget.canDrop).toHaveBeenCalledOnceWith(activeDraggable);
      expect(dropTarget.recieveDraggable).toHaveBeenCalledOnceWith(activeDraggable);
    });

    it("should check the draggable can be dropped into the drop target and NOT drop it if it can NOT be dropped.", () => {
      // Arrange
      const dropTarget = jasmine.createSpyObj<DropTarget>("DropTarget", ["canDrop"]);
      dropTarget.canDrop.and.returnValue(false);

      const activeDraggable = new Draggable();
      spyOnProperty(serviceUnderTest, "activeDraggable", "get").and.returnValue(activeDraggable);

      // Act
      serviceUnderTest.drop(dropTarget);

      // Assert
      expect(dropTarget.canDrop).toHaveBeenCalledOnceWith(activeDraggable);
      expect(dropTarget.recieveDraggable).not.toHaveBeenCalled();
    });
  });

  describe("stopDragging", () => {
    it("should set the active draggable to null.", () => {
      // Act
      serviceUnderTest.stopDragging();

      // Assert
      expect(serviceUnderTest.activeDraggable).toBeNull();
    });
  });
});
