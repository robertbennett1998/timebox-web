import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { DropTargetBase } from '../models/drop-target-base';
import { DraggingService } from '../services/dragging.service';

@Directive({
  selector: '[appDropTarget]'
})
export class DropTargetDirective {
  @Input("appDropTarget") dropTarget !: DropTargetBase;

  @HostListener("dragover", ['$event']) onDragOver(e : DragEvent) {
    if (this.draggingService.canDrop(this.dropTarget)) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  @HostListener("drop", ['$event']) onDrop(e : DragEvent) {
    this.draggingService.drop(this.dropTarget);
  }

  constructor(private elementRef : ElementRef, private renderer : Renderer2, private draggingService : DraggingService) { }

}
