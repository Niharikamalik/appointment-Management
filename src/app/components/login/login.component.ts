import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interface/login';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup ;
  constructor(
    public _fb: FormBuilder,
    private hospitalService : HospitalService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) {
    this.loginForm = this._fb.group({
      hospitalName: '',
      password:'',
    })
  }

  ngOnInit(): void {}
  closeDialog() {
    this.dialogRef.close(true);
  }
  onFormSubmit() {
    console.log(this.loginForm.value)
    // store login input to local storage
    localStorage.setItem('Login', JSON.stringify(this.loginForm.value));
    this.dialogRef.close([{ ...this.loginForm.value}]);
  }
}
