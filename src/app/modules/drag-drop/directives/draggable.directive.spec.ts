import { ElementRef, Renderer2 } from '@angular/core';
import { DraggableBase } from '../models/draggable-base';
import { DraggingService } from '../services/dragging.service';
import { DraggableDirective } from './draggable.directive';

describe('DraggableDirective', () => {
  let elementRefSpy : jasmine.SpyObj<ElementRef>;
  let renderer2Spy : jasmine.SpyObj<Renderer2>;
  let draggingServiceSpy : jasmine.SpyObj<DraggingService>;
  let dragEventSpy : DragEvent;

  let directiveUnderTest : DraggableDirective;

  beforeEach(() => {
    elementRefSpy = jasmine.createSpyObj<ElementRef>("ElementRef", ["nativeElement"]);
    renderer2Spy = jasmine.createSpyObj<Renderer2>("Renderer2", ["addClass", "removeClass"]);
    draggingServiceSpy = jasmine.createSpyObj<DraggingService>("DraggingService", ["startDragging", "stopDragging"]);

    dragEventSpy = jasmine.createSpyObj(dragEventSpy, ["preventDefault", "stopPropagation"]);

    directiveUnderTest = new DraggableDirective(elementRefSpy, renderer2Spy, draggingServiceSpy);
  });

  it('should create an instance', () => {
    const directive = new DraggableDirective(elementRefSpy, renderer2Spy, draggingServiceSpy);
    expect(directive).toBeTruthy();
  });

  describe('onDragStart', () => {
    it('should call startDragging in the dragging service', () => {
      // Arrange
      const draggable = new DraggableBase();

      directiveUnderTest.draggable = draggable;

      // Act
      directiveUnderTest.onDragStart(dragEventSpy);

      // Assert
      expect(draggingServiceSpy.startDragging).toHaveBeenCalledOnceWith(draggable);
    });
  });

  describe('onDragEnd', () => {
    it('should call stopDragging in the dragging service', () => {
      // Arrange
      const draggable = new DraggableBase();

      directiveUnderTest.draggable = draggable;

      // Act
      directiveUnderTest.onDragEnd(dragEventSpy);

      // Assert
      expect(draggingServiceSpy.stopDragging).toHaveBeenCalledTimes(1);
    });
  });
});
