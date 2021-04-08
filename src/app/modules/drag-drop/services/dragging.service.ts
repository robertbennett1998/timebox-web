import { Injectable } from '@angular/core';
import { DraggableAlreadyActiveError } from '../errors/draggable-already-active.error';
import { NoDraggableActiveError } from '../errors/no-draggable-active.error';
import { Draggable } from '../models/draggable';
import { DropTarget } from '../models/drop-target';

@Injectable({
  providedIn: 'root'
})
export class DraggingService {
  private _activeDraggable : Draggable | null = null;

  public get activeDraggable(): Draggable | null {
    return this._activeDraggable;
  }

  constructor() { }

  startDragging(draggable : Draggable) {
    if (this.activeDraggable !== null) {
      throw DraggableAlreadyActiveError();
    }

    this._activeDraggable = draggable;
  }

  canDrop(dropTarget : DropTarget) {
    if (!this.activeDraggable) {
      throw NoDraggableActiveError();
    }

    return dropTarget.canDrop(this.activeDraggable);
  }

  drop(dropTarget : DropTarget) {
    if (!this.activeDraggable) {
      throw NoDraggableActiveError();
    }

    if (this.canDrop(dropTarget)) {
      dropTarget.recieveDraggable(this.activeDraggable);
    }

    this.stopDragging();
  }

  stopDragging() {
    if (!this.activeDraggable) {
      throw NoDraggableActiveError();
    }

    this._activeDraggable = null;
  }
}
