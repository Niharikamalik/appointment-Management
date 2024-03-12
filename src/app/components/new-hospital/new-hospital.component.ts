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
  result: any;
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
  // on form submit
  val: boolean = false;
OnSubmit() {

  if (this.hospitalRegisteration.valid) {
// check hospital in database
    this._hospitalService.checkForRegister(this.hospitalRegisteration.value.hospitalName).subscribe(result => {
        // if user already present
        if(result) {
          alert('already register')
          this.hospitalRegisteration.reset()
        }
      // if not create new user
        else {
          this._hospitalService.addHospital(this.hospitalRegisteration.value).subscribe({
            next: (res) => {
              console.log('submitted successfully', res)
              this.hospitalRegisteration.reset()
              this.submitted = true
           }
         })
        }
      })
      // console.log(this.hospitalRegisteration.value?.hospitalName)
      // val = Boolean(val)
      console.log(this.val)
    }
    else {
      console.log('invalid')
    }

  }

}
