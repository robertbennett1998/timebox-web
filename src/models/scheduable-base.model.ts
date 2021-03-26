export default class ScheduableBase {
  /**
   * _id - Unique id of the scheduable.
   */
  constructor(private _id : string) {
  }

  get id() {
    return this._id;
  }
}
