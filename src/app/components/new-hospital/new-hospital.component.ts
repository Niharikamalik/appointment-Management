import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrls: ['./new-hospital.component.css']
})
export class NewHospitalComponent {

  hospitalRegisteration: FormGroup;
  submitted: boolean = false;
  constructor(
    private _hospitalService : HospitalService,
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
      this._hospitalService.addHospital(this.hospitalRegisteration.value).subscribe({
        next: (res) => {
          console.log('submitted successfully', res)
          this.hospitalRegisteration.reset()
          this.submitted = true
       }
     })
    }
    else {
      console.log('invalid')
    }

  }

}
