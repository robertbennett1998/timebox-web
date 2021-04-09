import { DraggableBase } from "./draggable-base";

export class DropTargetBase {
  private _name : string;
  get name() : string {
    return this._name;
  }

  private _draggable : DraggableBase | null = null;
  get draggable() : DraggableBase | null {
    return this._draggable;
  }

  constructor(name : string = "default") {
    this._name = name;
  }

  canDrop(draggable : DraggableBase) : boolean {
    return draggable.targetables.includes(this.name);
  }

  recieveDraggable(draggable : DraggableBase) : boolean {
    if (!this.canDrop(draggable) || this.draggable)
      return false;

    draggable.dropTarget = this;
    this._draggable = draggable;

    return true;
  }
}
