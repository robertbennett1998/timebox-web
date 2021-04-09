import { DraggableBase } from "../modules/ez-drag-drop/models/draggable-base";

export default class ScheduableBase extends DraggableBase {
  /**
   * _id - Unique id of the scheduable.
   */
  constructor(private _id : string, private _color : string = "#FF0") {
    super(["timebox"])
  }

  get id() {
    return this._id;
  }

  get color() {
    return this._color;
  }
}
