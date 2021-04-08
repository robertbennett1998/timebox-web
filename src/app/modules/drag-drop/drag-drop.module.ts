import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from './directives/draggable.directive';
import { DropTargetDirective } from './directives/drop-target.directive';

@NgModule({
  declarations: [DraggableDirective, DropTargetDirective],
  imports: [
    CommonModule
  ]
})
export class DragDropModule { }
