import ScheduableBase from './scheduable-base.model';
import TimeboxModel from './timebox.model';

describe('TimeboxModel', () => {
  const date = new Date(Date.now());
  const duration = 5;

  beforeEach(async () => {
  });

  it('was created', () => {
    // Arrange
    const expectedScheduled = new ScheduableBase("3");
    const expectedScheduledHistory = [
                                        new ScheduableBase("1"),
                                        new ScheduableBase("2")
                                      ];

    // Act
    const modelUnderTest = new TimeboxModel(date, duration, expectedScheduled, expectedScheduledHistory);

    // Assert
    expect(modelUnderTest.from).toEqual(date);
    expect(modelUnderTest.durationInMins).toEqual(duration);
    expect(modelUnderTest.allocatedScheduable).toEqual(expectedScheduled);
    expect(modelUnderTest.scheduableHistory).toEqual(expectedScheduledHistory);
  });

  it('sets the new scheduable as the allocated one', () => {
    // Arrange
    const expectedScheduable = new ScheduableBase("1");
    const expectedScheduableHistory : ScheduableBase[] = [];
    const modelUnderTest = new TimeboxModel(date, duration);

    // Act
    modelUnderTest.allocatedScheduable = expectedScheduable;

    // Assert
    expect(modelUnderTest.allocatedScheduable).toEqual(expectedScheduable);
    expect(modelUnderTest.scheduableHistory).toEqual(expectedScheduableHistory);
  });

  it('sets the new scheduable as the allocated one and stores the existing one', () => {
    // Arrange
    const initialAllocatedScheduable = new ScheduableBase("2");
    const expectedScheduable = new ScheduableBase("3");
    const initialScheduableHistory = [new ScheduableBase("1")]
    const expectedScheduableHistory = [ ...initialScheduableHistory, initialAllocatedScheduable ];

    const modelUnderTest = new TimeboxModel(date, duration, initialAllocatedScheduable, initialScheduableHistory);

    // Act
    modelUnderTest.allocatedScheduable = expectedScheduable;

    // Assert
    expect(modelUnderTest.allocatedScheduable).toEqual(expectedScheduable);
    expect(modelUnderTest.scheduableHistory).toEqual(expectedScheduableHistory);
  });
});
