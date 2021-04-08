import { DraggableBase } from "./draggable-base";

export class DropTargetBase {
  canDrop(draggable : DraggableBase) : boolean {
    throw new Error('Method not implemented.');
  }

  recieveDraggable(draggable : DraggableBase) {
    throw new Error('Method not implemented.');
  }
}
