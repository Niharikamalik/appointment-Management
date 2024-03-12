import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hospital } from '../interface/hospital';
import { environment } from 'src/environments/environment';
import { Constant } from '../constant/constant';
import { Observable, filter, map } from 'rxjs';
import { User } from '../interface/login';


@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  constructor(private _http: HttpClient) {}

  addHospital(data: hospital): Observable<hospital> {
    return this._http.post<hospital>(environment.api_url + Constant.API_END_POINT.ADD_NEW_HOSPITAL+`.json`,data);
  }

  // login(data:User) : Observable<User>{
  //   return this._http.post<User>( environment.api_url + Constant.API_END_POINT.LOGIN_HOSPITAL + `.json`, data );
  // }
  checkForRegister(data : string) : Observable<boolean>{
      return this._http.get<boolean>( environment.api_url + Constant.API_END_POINT.ADD_NEW_HOSPITAL + '.json')
       .pipe( map((response: any) => {
         // convert response object into array
         let val = false;
         for (let key in response) {
             if (response.hasOwnProperty(key) && response[key].hospitalName === data) {
              val=true;
             }
           }
         return val;
         })
       );
  }
  getData(name: string, password:string){
    return this._http.get(environment.api_url + Constant.API_END_POINT.ADD_NEW_HOSPITAL + '.json').pipe(
        map((response:any) => {
          let task = [];
          // convert response object into array
          for (let key in response) {
            if (response.hasOwnProperty(key) && response[key].hospitalName == name) {
              if (response[key].password  == password)
                task.push({ ...response[key], id: key });
            }
          }
          return task;
        }),
      );
  }
}
