import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { appointment } from 'src/app/interface/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css'],
})
export class NewAppointmentComponent implements OnInit {
  hospitalId: string = '';
  newAppointment: FormGroup;
  constructor(
    private _dialogRef : MatDialogRef<NewAppointmentComponent>,
    private _hospitalService: HospitalService,
    private _appointmentService: AppointmentService,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder
  ) {
    this.newAppointment = this.fb.group({
      patientName: '',
      contact: 0,
      age:  0,
      gender: '',
      appointmentDate: new Date(),
      problem: '',
      city: '',
    });
    }

  ngOnInit(): void {
    if (this.data) {
      this.newAppointment.patchValue(this.data[0])
      console.log(this.data.length)
    }

  }

  onAppointmentSubmit() {
    if (this.newAppointment.valid) {
      if (this.data && this.data.length != 0) {
        this._appointmentService.updateAppointment(this.data[1], this.data[2], this.newAppointment.value)
          .subscribe({
            next: (res) => {
              this._dialogRef.close()
            }
        })
      }
      else {
        this._dialogRef.close({...this.newAppointment.value})
      }
    }
  }
  closeDialog() {
    this._dialogRef.close()
  };
}
