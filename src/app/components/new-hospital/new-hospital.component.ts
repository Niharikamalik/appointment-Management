import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
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
    private _hospitalService: HospitalService,
    private router: Router,
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
              localStorage.setItem('Login', JSON.stringify({
                hospitalName: this.hospitalRegisteration.value.hospitalName,
                password: this.hospitalRegisteration.value.password
              }));
              console.log('submitted successfully', res)
              this.router.navigateByUrl('/home')
              this.hospitalRegisteration.reset()
              this.submitted = true
           }
         })
        }
      })
    }
    else {
      console.log('invalid')
    }

  }

}
