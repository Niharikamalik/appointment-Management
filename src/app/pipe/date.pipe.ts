import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date): string {
    const CurrentDay: Date = new Date();
    const change: number = Math.floor(
      (Date.parse(value.toString()) - Date.parse(CurrentDay.toString())) /
        86400000
    );

    if (change === -1) {
      return 'yesterday';
    }

    if (change === 0) {
      return 'today';
    }

    if (change === 1) {
      return 'tomorrow';
    }

    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const dayOfWeek: number = CurrentDay.getDay();

    const givenDayofWeek: number = value.getDay();

    if (givenDayofWeek > dayOfWeek && change < 7) {
      return days[givenDayofWeek];
    }

    return value.toDateString();
  }
}
