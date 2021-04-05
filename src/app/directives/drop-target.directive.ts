import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { DraggingService } from '../services/dragging.service';

export class DropTarget {
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  constructor(private _name: string = "default") {

  }
}

@Directive({
  selector: '[appDropTarget]'
})
export class DropTargetDirective {
  @Input() appDropTarget !: string;

  @HostListener("dragover", ['$event']) onDragOver(e : DragEvent) {
  }

  @HostListener("drop", ['$event']) onDrop(e : DragEvent) {
  }

  constructor(private _elementRef : ElementRef, private _renderer : Renderer2, private _draggingService : DraggingService) {
  }
}

