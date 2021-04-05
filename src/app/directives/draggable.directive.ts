import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { DraggingService } from '../services/dragging.service';

export class Draggable {
  public get targets(): string[] {
    return this._targets;
  }

  public set targets(value: string[]) {
    this._targets = value;
  }

  constructor(private _targets : string[] = []) {

  }
}

@Directive({
  selector: '[appDraggable]',
})
export class DraggableDirective {
  @Input() targetables : string[] = ["test"];

  @HostListener("dragstart", ['$event']) onDragStart(e : DragEvent) {
  }

  @HostListener("dragend", ['$event']) onDragEnd(e : DragEvent) {
  }

  constructor(private _elementRef : ElementRef, private _renderer : Renderer2, private _draggingService : DraggingService) {
  }

}
