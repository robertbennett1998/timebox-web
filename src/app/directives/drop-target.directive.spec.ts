import { ElementRef, Renderer2 } from '@angular/core';
import { DraggingService } from '../services/dragging.service';
import { DropTargetDirective } from './drop-target.directive';

describe('DropTargetDirective', () => {
  const elementRefSpy = jasmine.createSpyObj<ElementRef>(["nativeElement"]);
  const renderer2Spy = jasmine.createSpyObj<Renderer2>(["setStyle"]);
  const draggingServiceSpy = jasmine.createSpyObj<DraggingService>(["startDrag"]);

  it('should create an instance', () => {
    const directive = new DropTargetDirective(elementRefSpy, renderer2Spy, draggingServiceSpy);
    expect(directive).toBeTruthy();
  });
});
