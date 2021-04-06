import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Draggable } from '../directives/draggable.directive';
import ScheduleModel from '../models/schedule.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  schedule : ScheduleModel = new ScheduleModel(new Date(2021, 3, 26, 9, 0, 0, 0));

  constructor() { }

  ngOnInit(): void {
  }
}
