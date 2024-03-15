import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  private _hospitalService: HospitalService;
  hospitalId: any;
  hospitalName: any;

  constructor() {
    let loggedData = localStorage.getItem('Login');
    if (loggedData != null) {
      let loggedUser = JSON.parse(loggedData)
      this.hospitalName = loggedUser.hospitalName
    }
  }

  ngOnInit(): void {
  }

}
