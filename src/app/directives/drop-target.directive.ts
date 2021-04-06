import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { DraggingService } from '../services/dragging.service';
import { Draggable } from './draggable.directive';

export class DropTarget {
  public get invalidClass(): string {
    return this._invalidClass;
  }
  public set invalidClass(value: string) {
    this._invalidClass = value;
  }

  public get validClass(): string {
    return this._validClass;
  }

  public set validClass(value: string) {
    this._validClass = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  constructor(private _validClass : string = "valid-drop-target", private _invalidClass : string = "invalid-drop-target", private _name : string = "default") {

  }
}

@Directive({
  selector: '[appDropTarget]'
})
export class DropTargetDirective {
  @Input() dropTargetName !: string;
  @Input() validDropTargetClass !: string;
  @Input() invalidDropTargetClass !: string;
  @Input() canDropCallback !: ((draggable : Draggable) => boolean) | null;

  appliedClass !: string;

  private get dropTarget() {
    return new DropTarget(this.validDropTargetClass, this.invalidDropTargetClass, this.dropTargetName);
  }

  @HostListener("dragover", ['$event']) onDragOver(e : DragEvent) {
    if (this.canDrop()) {
      this._renderer.addClass(this._elementRef.nativeElement, this.dropTarget.validClass);
      this.appliedClass = this.dropTarget.validClass;
    }
    else {
      this._renderer.addClass(this._elementRef.nativeElement, this.dropTarget.invalidClass);
      this.appliedClass = this.dropTarget.invalidClass;
    }
  }

  @HostListener("dragleave", ['$event']) onDragLeave(e : DragEvent) {
    this._renderer.removeClass(this._elementRef.nativeElement, this.appliedClass);
  }

  @HostListener("drop", ['$event']) onDrop(e : DragEvent) {
    this._renderer.removeClass(this._elementRef.nativeElement, this.appliedClass);
    this._draggingService.drop(this.dropTarget);
  }

  constructor(private _elementRef : ElementRef, private _renderer : Renderer2, private _draggingService : DraggingService) {
  }

  private canDrop() {
    let status = true;
    if (this._draggingService.activeDraggable && this.canDropCallback)
      status = status && this.canDropCallback(this._draggingService.activeDraggable);

    return status && this._draggingService.canDrop(this.dropTarget);
  }
}

