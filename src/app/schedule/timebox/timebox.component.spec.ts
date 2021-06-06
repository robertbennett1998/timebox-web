import { ComponentFixture, TestBed } from '@angular/core/testing';
import TimeboxModel from 'src/app/models/timebox.model';

import { TimeboxComponent } from './timebox.component';

describe('TimeboxComponent', () => {
  let component: TimeboxComponent;
  let fixture: ComponentFixture<TimeboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeboxComponent);
    component = fixture.componentInstance;
    component.timebox = jasmine.createSpyObj<TimeboxModel>("TimeboxModel", ["allocatedScheduable"]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
