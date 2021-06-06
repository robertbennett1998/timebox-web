import { Guid } from 'guid-typescript';
import ScheduableBase from './scheduable-base.model';
import TimeboxModel from './timebox.model';

export default class ScheduleModel {
  generatedTimeboxes: TimeboxModel[];

  /**
   * _date - the date this schedule represents
   * _timeslotLengthInMins - the length of each individual time slot
   */
  constructor(
    private _scheduleId: Guid,
    private _date: Date,
    private _timeslotLengthInMins: number = 15
  ) {
    this.generatedTimeboxes = [];
    for (
      let i = 0;
      i <
      ((24 - this._date.getHours()) * 60 - this._date.getMinutes()) /
        this._timeslotLengthInMins;
      i++
    ) {
      this.generatedTimeboxes.push(
        new TimeboxModel(
          new Date(
            this._date.getFullYear(),
            this._date.getMonth(),
            this._date.getDate(),
            this._date.getHours(),
            this._date.getMinutes() + 15 * i
          ),
          this._timeslotLengthInMins,
          Math.floor(Math.random() * 101) >= 50
            ? new ScheduableBase(Guid.create().toString())
            : null
        )
      );
    }
  }

  get scheduleId(): Guid {
    return this._scheduleId;
  }

  get date(): Date {
    return this._date;
  }

  get timeboxes(): TimeboxModel[] {
    return this.generatedTimeboxes;
  }
}
