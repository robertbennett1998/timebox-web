import { DraggableBase } from '../../external/ezNg/ez-drag-drop/models/draggable-base';

export default class ScheduableBase extends DraggableBase {
  /**
   * _id - Unique id of the scheduable.
   */
  constructor(private _id: string, private _color: string = '#FF0') {
    super(['timebox']);
  }

  get id(): string {
    return this._id;
  }

  get color(): string {
    return this._color;
  }
}
