import ScheduableBase from "./scheduable-base.model";

describe('ScheduableBase', () => {
  const date = new Date(Date.now());
  const duration = 5;

  beforeEach(async () => {
  });

  it('was created', () => {
    // Act
    const modelUnderTest : ScheduableBase = new ScheduableBase("id");

    // Assert
    expect(modelUnderTest.id).toBe("id");
  });
});
