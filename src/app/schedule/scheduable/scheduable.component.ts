import { Component, Input, OnInit } from '@angular/core';
import ScheduableBase from 'src/app/models/scheduable-base.model';

@Component({
  selector: 'app-scheduable',
  templateUrl: './scheduable.component.html',
  styleUrls: ['./scheduable.component.scss']
})
export class ScheduableComponent implements OnInit {
  @Input() scheduable!: ScheduableBase;

  constructor() { }

  ngOnInit(): void {
  }

}
