import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrls: ['./new-hospital.component.css']
})
export class NewHospitalComponent {

  hospitalRegisteration: FormGroup;
hospitalReg: any;
  constructor(
    public fb: FormBuilder,

  ) {
     this.hospitalRegisteration = this.fb.group({
       hospitalName: '',
       contact: '',
       hospitalEmail: '',
       openingDate:'',
       ownerName: '',
       ownerContact: '',
       ownerEmail: '',
       city: '',
       password:'',
     });
  }
  OnSubmit() {
    if (this.hospitalRegisteration.valid) {
      console.log('valid')
    }
    else {
      console.log('invalid')
    }

  }

}
