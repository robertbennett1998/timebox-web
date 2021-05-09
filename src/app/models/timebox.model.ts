import { DropTargetBase } from '../../external/ezNg/ez-drag-drop/models/drop-target-base';
import ScheduableBase from './scheduable-base.model';

export default class TimeboxModel extends DropTargetBase {
  /**
   * timeFrom - the time this box starts at
   * duration - the duration of this time box
   * allocatedScheduable - the currently scheduled scheduable
   * scheduableHistory - the list of all scheduables that have been scheduled
   */
  constructor(
    private _from: Date,
    private _durationInMins: number,
    allocatedScheduable: ScheduableBase | null = null,
    private _scheduableHistory: ScheduableBase[] = []
  ) {
    super('timebox', allocatedScheduable);
  }

  set allocatedScheduable(scheduable: ScheduableBase | null) {
    if (this.allocatedScheduable) {
      this._scheduableHistory.push(this.allocatedScheduable);
    }

    super.draggable = scheduable;
  }

  get allocatedScheduable(): ScheduableBase | null {
    return super.draggable as ScheduableBase;
  }

  get scheduableHistory(): ScheduableBase[] {
    return this._scheduableHistory;
  }

  get from(): Date {
    return this._from;
  }

  get durationInMins(): number {
    return this._durationInMins;
  }
}
