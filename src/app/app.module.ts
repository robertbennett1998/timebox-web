import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TimeboxComponent } from './schedule/timebox/timebox.component';
import { ToTimeSlotTimePipe } from './pipes/to-time-slot-time.pipe';
import { EzDragDropModule } from '../external/ezNg/ez-drag-drop/ez-drag-drop.module';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    TimeboxComponent,
    ToTimeSlotTimePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, EzDragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
