import { Injectable } from '@angular/core';
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
    throw new Error('Method not implemented.');
  }

  canDrop(dropTarget : DropTarget) {
    throw new Error('Method not implemented.');
  }

  drop(dropTarget : DropTarget) {
    throw new Error('Method not implemented.');
  }

  stopDragging() {
    throw new Error('Method not implemented.');
  }
}
