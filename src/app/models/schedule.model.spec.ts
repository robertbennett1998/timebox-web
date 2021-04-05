import ScheduleModel from './schedule.model';
describe('ScheduleModel', () => {
  const date = new Date(Date.now());
  const duration = 5;

  beforeEach(async () => {
  });

  it('was created', () => {
    // Act
    const modelUnderTest = new ScheduleModel(date, duration);

    // Assert
    expect(modelUnderTest.date).toEqual(date);
    expect(modelUnderTest.timeSlotLengthInMins).toEqual(duration);
  });
});
