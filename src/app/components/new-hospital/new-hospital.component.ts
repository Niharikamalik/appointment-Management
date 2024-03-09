import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrls: ['./new-hospital.component.css']
})
export class NewHospitalComponent {

  hospitalReg: FormGroup;
  constructor(
    public fb: FormBuilder,

  ) {
     this.hospitalReg = this.fb.group({
       hospitalName: '',
       contact: '',
       hospitalEmail: '',
       openingDate: '',
       ownerName: '',
       ownerContact: '',
       OwnerEmail: '',
       city: '',
       password:'',
     });
  }
  OnSubmit() {
    if()

  }

}
