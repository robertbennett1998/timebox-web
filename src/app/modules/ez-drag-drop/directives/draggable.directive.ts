import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DraggableBase } from '../models/draggable-base';
import { DraggingService } from '../services/dragging.service';

@Directive({
  selector: '[ezDraggable]'
})
export class DraggableDirective implements OnInit {
  @Input("ezDraggable") draggable !: DraggableBase;

  @HostListener("dragstart", ['$event']) onDragStart(e : DragEvent) {
    this.draggingService.startDragging(this.draggable);
  }

  @HostListener("dragend", ['$event']) onDragEnd(e : DragEvent) {
    this.draggingService.stopDragging();
  }

  constructor(private elementRef : ElementRef, private renderer : Renderer2, private draggingService : DraggingService) {

  }

  ngOnInit(): void {
    this.renderer.setAttribute(this.elementRef.nativeElement, "draggable", "true");
  }
}
