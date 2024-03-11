import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hospital } from '../interface/hospital';
import { environment } from 'src/environments/environment';
import { Constant } from '../constant/constant';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  constructor(private _http: HttpClient) {}

  addHospital(data: hospital): Observable<any> {
    return this._http.post(environment.api_url + Constant.API_END_POINT.ADD_NEW_HOSPITAL+`.json`,data);
  }
}
