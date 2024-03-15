import { Pipe, PipeTransform } from "@angular/core";
import { appointment } from '../interface/appointment';
import { DateFormatPipe } from "./date.pipe";

@Pipe({
  name : 'filterAppt'
})

export class FilterAppt implements PipeTransform {
  constructor(public customPipe1: DateFormatPipe) {}
  transform(list: appointment[], filterby: string) {
    if (filterby === 'all' || filterby === '' || list.length == 0 ) {
      return list;
    }
    else {
      return list.filter((appt) => {
        return this.customPipe1.transform(appt.appointmentDate).toLowerCase()=== filterby.toLowerCase()
      })
    }
  }

}
