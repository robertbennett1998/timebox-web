import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import ScheduleModel from '../models/schedule.model';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor() {}

  getSchedule(scheduleId: Guid): Observable<ScheduleModel> {
    return new Observable<ScheduleModel>((sub) => {
      sub.next(
        new ScheduleModel(scheduleId, new Date(2021, 3, 26, 9, 0, 0, 0))
      );
      sub.complete();
    });
  }
}
