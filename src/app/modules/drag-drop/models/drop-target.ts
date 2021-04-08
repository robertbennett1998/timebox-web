import { Draggable } from "./draggable";

export class DropTarget {
  canDrop(draggable : Draggable) : boolean {
    throw new Error('Method not implemented.');
  }

  recieveDraggable(draggable : Draggable) {
    throw new Error('Method not implemented.');
  }
}
