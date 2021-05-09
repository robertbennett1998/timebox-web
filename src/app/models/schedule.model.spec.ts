import { Guid } from 'guid-typescript';
import ScheduleModel from './schedule.model';
describe('ScheduleModel', () => {
  const date = new Date(Date.now());
  const duration = 5;

  beforeEach(async () => {});

  it('was created', () => {
    // Act
    const guid = Guid.create();
    const modelUnderTest = new ScheduleModel(guid, date, duration);

    // Assert
    expect(modelUnderTest.date).toEqual(date);
    expect(modelUnderTest.timeSlotLengthInMins).toEqual(duration);
    expect(modelUnderTest.scheduleId).toEqual(guid);
  });
});
