import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import ScheduleModel from '../models/schedule.model';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  @Input() selectedScheduleId!: Guid;
  schedule!: ScheduleModel;

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.scheduleService
      .getSchedule(this.selectedScheduleId)
      .subscribe((schedule) => {
        this.schedule = schedule;
      });
  }
}
