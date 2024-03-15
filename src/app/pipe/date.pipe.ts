import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date): string {
   const currentDate = new Date();
   // Set it to midnight to disregard time differences
   currentDate.setHours(0, 0, 0, 0);

   // Create date objects for yesterday, today, and tomorrow
   const yesterday = new Date(currentDate);
   yesterday.setDate(currentDate.getDate() - 1);
   const tomorrow = new Date(currentDate);
   tomorrow.setDate(currentDate.getDate() + 1);

   // Convert inputDate to midnight time
   const inputDateMidnight = new Date(value);
   inputDateMidnight.setHours(0, 0, 0, 0);

   if (inputDateMidnight.getTime() === yesterday.getTime()) {
     return 'Yesterday';
   } else if (inputDateMidnight.getTime() === currentDate.getTime()) {
     return 'Today';
   } else if (inputDateMidnight.getTime() === tomorrow.getTime()) {
     return 'Tomorrow';
   } else {
     return 'Other';
   }
  }
}
