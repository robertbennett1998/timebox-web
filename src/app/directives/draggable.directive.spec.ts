import { ElementRef, Renderer2 } from '@angular/core';
import { DraggingService } from '../services/dragging.service';
import { DraggableDirective } from './draggable.directive';

describe('DraggableDirective', () => {
  const elementRefSpy = jasmine.createSpyObj<ElementRef>(["nativeElement"]);
  const renderer2Spy = jasmine.createSpyObj<Renderer2>(["setStyle"]);
  const draggingServiceSpy = jasmine.createSpyObj<DraggingService>(["startDrag"]);

  it('should create an instance', () => {
    const directive = new DraggableDirective(elementRefSpy, renderer2Spy, draggingServiceSpy);
    expect(directive).toBeTruthy();
  });
});
