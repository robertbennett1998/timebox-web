import { Component, Input, OnInit } from '@angular/core';
import TimeboxModel from 'src/app/models/timebox.model';

@Component({
  selector: 'app-timebox',
  templateUrl: './timebox.component.html',
  styleUrls: ['./timebox.component.scss'],
})
export class TimeboxComponent implements OnInit {
  @Input() timebox!: TimeboxModel;

  constructor() {}

  ngOnInit(): void {}
}
