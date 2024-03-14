import { hospital } from './../../interface/hospital';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { User, login } from 'src/app/interface/login';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  loggedIn: boolean = false;
  userData: hospital[]=[];
  constructor(
    public dialog: MatDialog,
    private data: HospitalService,
  ) {
    // load user data if login
    let loggedData = localStorage.getItem('Login');
    if (loggedData != null) {
      let loggedUser = JSON.parse(loggedData);
      this.data.getData(loggedUser.hospitalName, loggedUser.password).subscribe({
        next: (data) => {
          if (data.length != 0) {
            this.loggedIn = true;
            this.userData = [...data];
            console.log(this.userData);
          } else {
            this.loggedIn = false;
          }
        },
      });
    }
   }

  ngOnInit(): void {

  }
// Open login dialog
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      disableClose: true,
    });
    // store login form data
    dialogRef.afterClosed().subscribe((result) => {
      // console.log('dialog response : ', result);
      // retrieving hospital data from data base using Hospital service
      this.data.getData(result[0].hospitalName, result[0].password ).subscribe({
        next: (data) => {
          if (data.length != 0) {
            this.loggedIn = true
            this.userData = [...data]
            // console.log(this.userData);
          }
          else {
            this.loggedIn = false;
            alert('enter correct username and password')
          }
        }
      });
    });
  }

  // logout functionality

  logOff() {
    localStorage.removeItem('Login');
    this.userData = [];
    this.loggedIn = false;
  }


}
