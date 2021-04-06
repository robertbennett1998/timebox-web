import { ElementRef, Renderer2 } from '@angular/core';
import { DraggingService } from '../services/dragging.service';
import { DropTarget, DropTargetDirective } from './drop-target.directive';

describe('DropTargetDirective', () => {
  let elementRefSpy : jasmine.SpyObj<ElementRef>;
  let renderer2Spy : jasmine.SpyObj<Renderer2>;
  let draggingServiceSpy : jasmine.SpyObj<DraggingService>;
  let directiveUnderTest : DropTargetDirective;

  beforeEach(() => {
    elementRefSpy = jasmine.createSpyObj<ElementRef>(["nativeElement"]);
    renderer2Spy = jasmine.createSpyObj<Renderer2>(["addClass", "removeClass", "setAttribute"]);
    draggingServiceSpy = jasmine.createSpyObj<DraggingService>(["canDrop", "drop"]);
    directiveUnderTest = new DropTargetDirective(elementRefSpy, renderer2Spy, draggingServiceSpy);
  });

  it('should create an instance', () => {
    expect(directiveUnderTest).toBeTruthy();
  });

  describe("onDragOver", () => {
    it('should apply the valid class to the native element if the draggable can be dropped', () => {
      // Arrange
      const expectedClass = "test-valid-drop-target";

      directiveUnderTest.dropTargetName = "test";
      directiveUnderTest.validDropTargetClass = expectedClass;
      directiveUnderTest.invalidDropTargetClass = "test-invalid-drop-target";
      const dragEventSpy = jasmine.createSpyObj<DragEvent>(["preventDefault"]);
      const dropTarget = new DropTarget(expectedClass, "test-invalid-drop-target", "test");

      draggingServiceSpy.canDrop.and.returnValue(true);

      // Act
      directiveUnderTest.onDragOver(dragEventSpy);

      // Assert
      expect(draggingServiceSpy.canDrop).toHaveBeenCalledWith(dropTarget);
      expect(directiveUnderTest.appliedClass).toBe(expectedClass);
      expect(renderer2Spy.addClass).toHaveBeenCalledWith(elementRefSpy.nativeElement, expectedClass);
    });

    it('should apply the invalid class to the native element if the draggable can NOT be dropped', () => {
      // Arrange
      const expectedClass = "test-invalid-drop-target";

      directiveUnderTest.dropTargetName = "test";
      directiveUnderTest.validDropTargetClass = "test-valid-drop-target";
      directiveUnderTest.invalidDropTargetClass = expectedClass;
      const dragEventSpy = jasmine.createSpyObj<DragEvent>(["preventDefault"]);
      const dropTarget = new DropTarget("test-valid-drop-target", expectedClass, "test");

      draggingServiceSpy.canDrop.and.returnValue(false);

      // Act
      directiveUnderTest.onDragOver(dragEventSpy);

      // Assert
      expect(draggingServiceSpy.canDrop).toHaveBeenCalledWith(dropTarget);
      expect(directiveUnderTest.appliedClass).toBe(expectedClass);
      expect(renderer2Spy.addClass).toHaveBeenCalledWith(elementRefSpy.nativeElement, expectedClass);
    });
  });

  describe("onDragLeave", () => {
    it('should remove the applied class', () => {
      // Arrange
      const expectedClass = "test-class";
      const dragEventSpy = jasmine.createSpyObj<DragEvent>(["preventDefault"]);

      directiveUnderTest.appliedClass = "test-class"

      // Act
      directiveUnderTest.onDragLeave(dragEventSpy);

      // Assert
      expect(renderer2Spy.removeClass).toHaveBeenCalledWith(elementRefSpy.nativeElement, expectedClass);
    });
  });

  describe("onDrop", () => {
    it("should call drop in the dragging service and remove the applied class", () => {
      // Arrange
      const expectedClass = "test-class";
      const dragEventSpy = jasmine.createSpyObj<DragEvent>(["preventDefault"]);

      directiveUnderTest.appliedClass = "test-class"

      // Act
      directiveUnderTest.onDrop(dragEventSpy);

      // Assert
      expect(draggingServiceSpy.drop).toHaveBeenCalledWith(new DropTarget());
      expect(renderer2Spy.removeClass).toHaveBeenCalledWith(elementRefSpy.nativeElement, expectedClass);
    });
  });
});
