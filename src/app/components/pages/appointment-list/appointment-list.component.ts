import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { AppointmentService } from '../../../services/appointment.service';
import { appointment } from 'src/app/interface/appointment';
import { filter, switchMap } from 'rxjs';

interface day {
  value: string;
  viewValue : string;
}
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  hospitalId: string;
  hospitalName: string;
  apptDetails: appointment[];
  filterby: string = 'all';
  

  constructor(
    private _hospitalService: HospitalService,
    private _apptService: AppointmentService,
    private _dialog: MatDialog
  ) {
    let loggedData = localStorage.getItem('Login');
    if (loggedData != null) {
      let loggedUser = JSON.parse(loggedData);
      this._hospitalService
        .getData(loggedUser.hospitalName, loggedUser.password)
        .subscribe({
          next: (res) => {
            this.hospitalId = res[0].id;
            this.hospitalName = res[0].hospitalName;
            // console.log(this.hospitalId);
            this.getAppointment();
          },
        });
    }
  }
  ngOnInit(): void {}

  // add new appointment dialog
  openApptDailog() {
    const dialogRef = this._dialog.open(NewAppointmentComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this._apptService.addAppointment(result, this.hospitalId).subscribe({
        next: (res) => {
          console.log(res);
          this.getAppointment();
        },
      });
    });
  }

  // get appointment details
  getAppointment() {
    this._apptService.getAppointment(this.hospitalId).subscribe({
      next: (response) => {
        // console.log(response);
        this.apptDetails = response;
        // console.log(this.apptDetails);
      },
    });
  }

  // dialog for appointment details
  details(id: string) {
    console.log(id);
  }

  // delete appointment
  deleteAppointment(id: string) {
    this._apptService.deleteAppointment(this.hospitalId, id).subscribe({
      next: (res) => {
        this.getAppointment();
      },
    });
  }

  // edit Appointment
  editAppt(id: string) {
    this._apptService
      .appointmentDetails(this.hospitalId, id)
      .pipe(
        switchMap((ApptDetails) => {
          // Open dialog here and pass appointment data
          return this._dialog
            .open(NewAppointmentComponent, {
              disableClose: true,
              data: [ApptDetails, this.hospitalId, id],
            })
            .afterClosed();
        })
      )
      .subscribe({
        next: (res) => {
          // console.log(res);
          this.getAppointment();
        },
      });
  }
}
