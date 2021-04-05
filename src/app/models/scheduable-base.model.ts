export default class ScheduableBase {
  /**
   * _id - Unique id of the scheduable.
   */
  constructor(private _id : string, private _color : string = "#FF0") {
  }

  get id() {
    return this._id;
  }

  get color() {
    return this._color;
  }
}
 