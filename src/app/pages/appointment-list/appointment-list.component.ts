import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { User } from '../../interface/login';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  constructor(
    private _hospitalService : HospitalService
  ) { }

  ngOnInit(): void {
    let loggedData = localStorage.getItem('Login');
    if (loggedData != null) {
      let loggedUser = JSON.parse(loggedData);
      this._hospitalService.getData(loggedUser.username, loggedUser.password)
    }
  }

}
