import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DraggingService } from '../services/dragging.service';
import { Draggable, DraggableDirective } from './draggable.directive';

describe('DraggableDirective', () => {
  let elementRefSpy : jasmine.SpyObj<ElementRef>;
  let renderer2Spy : jasmine.SpyObj<Renderer2>;
  let draggingServiceSpy : jasmine.SpyObj<DraggingService>;
  let directiveUnderTest : DraggableDirective;

  beforeEach(() => {
    elementRefSpy = jasmine.createSpyObj<ElementRef>(["nativeElement"]);
    renderer2Spy = jasmine.createSpyObj<Renderer2>(["setAttribute"]);
    draggingServiceSpy = jasmine.createSpyObj<DraggingService>(["startDrag", "cancelDrag"]);
    directiveUnderTest = new DraggableDirective(elementRefSpy, renderer2Spy, draggingServiceSpy);
  });

  it('should create an instance', () => {
    expect(directiveUnderTest).toBeTruthy();
  });

  it('should call startDrag when a drag event is recieved', () => {
    //Arrange
    const dragEventSpy = jasmine.createSpyObj<DragEvent>(["preventDefault"]);
    const draggable = new Draggable();

    // Act
    directiveUnderTest.onDragStart(dragEventSpy);

    // Assert
    expect(draggingServiceSpy.startDrag).toHaveBeenCalledOnceWith(draggable);
  });

  it('should call startDrag when a drag event is recieved and targets should be passed through', () => {
    //Arrange
    const dragEventSpy = jasmine.createSpyObj<DragEvent>(["preventDefault"]);
    const draggable = new Draggable(["test"]);

    directiveUnderTest.targets = ["test"];

    // Act
    directiveUnderTest.onDragStart(dragEventSpy);

    // Assert
    expect(draggingServiceSpy.startDrag).toHaveBeenCalledOnceWith(draggable);
  });

  it('should call cancelDrag when a dragend event is recieved', () => {
    //Arrange
    const dragEventSpy = jasmine.createSpyObj<DragEvent>(["preventDefault"]);
    const draggable = new Draggable(["test"]);

    directiveUnderTest.targets = ["test"];

    // Act
    directiveUnderTest.onDragEnd(dragEventSpy);

    // Assert
    expect(draggingServiceSpy.cancelDrag).toHaveBeenCalledTimes(1);
  });
});
