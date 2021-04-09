import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { DraggableBase } from '../models/draggable-base';
import { DraggingService } from '../services/dragging.service';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  @Input("appDraggable") draggable !: DraggableBase;

  @HostListener("dragstart", ['$event']) onDragStart(e : DragEvent) {
    this.draggingService.startDragging(this.draggable);
  }

  @HostListener("dragend", ['$event']) onDragEnd(e : DragEvent) {
    this.draggingService.stopDragging();
  }

  constructor(private elementRef : ElementRef, private renderer : Renderer2, private draggingService : DraggingService) {

  }
}
