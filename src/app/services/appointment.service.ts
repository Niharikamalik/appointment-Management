import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Constant } from '../constant/constant';
import { appointment } from '../interface/appointment';
import { map } from 'rxjs';
import { hospital } from '../interface/hospital';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private _http: HttpClient) {}

  // add appointment
  addAppointment(data: appointment[], id: string) {
    return this._http.post(
      environment.api_url +
        Constant.API_END_POINT.ADD_NEW_HOSPITAL +
        `/${id}` +
        Constant.API_END_POINT.ADD_APPOINTMENT +
        '.json',
      data
    );
  }

  // get all appointments of oarticular hospital
  getAppointment(id: string) {
    return this._http
      .get(
        `https://appointment-13143-default-rtdb.firebaseio.com/hospitals/${id}/appointment.json`
      )
      .pipe(
        map((response: any) => {
          let task = [];
          // convert response object into array
          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              task.push({ ...response[key], id: key });
            }
          }
          return task;
        })
      );
  }

  // delete appointment details
  deleteAppointment(hospitalId: string, ApptId: string) {
    return this._http.delete(
      `https://appointment-13143-default-rtdb.firebaseio.com/hospitals/${hospitalId}/appointment/${ApptId}.json`
    );
  }

  // get appointment detail of particular appointment
  appointmentDetails(hospitalId: string, ApptId: string) {
    return this._http.get(`https://appointment-13143-default-rtdb.firebaseio.com/hospitals/${hospitalId}/appointment/${ApptId}.json`);
  }

  // update appointment details
  updateAppointment(hospitalId: string, apptId: string , data : appointment) {
    return this._http.put(`https://appointment-13143-default-rtdb.firebaseio.com/hospitals/${hospitalId}/appointment/${apptId}.json`,data);
  }
}
