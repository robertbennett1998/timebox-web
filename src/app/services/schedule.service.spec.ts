import { fakeAsync, TestBed } from '@angular/core/testing';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import ScheduleModel from '../models/schedule.model';

import { ScheduleService } from './schedule.service';

describe('ScheduleServiceService', () => {
  let sut: ScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    sut = TestBed.inject(ScheduleService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  describe('getSchedule', () => {
    let expectedScheduleModel: ScheduleModel;
    const date = new Date(2021, 3, 26, 9, 0, 0, 0);
    const scheduleId = Guid.create();

    beforeEach(() => {
      expectedScheduleModel = new ScheduleModel(scheduleId, date);
    });

    it('should return an observable', () => {
      // Act
      const returnValue = sut.getSchedule(scheduleId);

      // Assert
      expect(returnValue).toBeTruthy();
    });
  });
});
