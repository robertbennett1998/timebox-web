import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTimeSlotTime',
})
export class ToTimeSlotTimePipe implements PipeTransform {
  transform(value: Date): string {
    return `${('0' + value.getHours()).slice(-2)}:${(
      '0' + value.getMinutes()
    ).slice(-2)}`;
  }
}
