import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { appointment } from 'src/app/interface/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { HospitalService } from 'src/app/services/hospital.service';
import { DateFormatPipe } from '../../../../pipe/date.pipe';
import { hospital } from '../../../../interface/hospital';
import { FilterAppt } from 'src/app/pipe/filterAppt.pipe';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css'],
})
export class DashboardContainerComponent implements OnInit {
  [x: string]: any;
  hospitalName: string;
  hospitalId: string;
  apptData: appointment[] = [];
  dataSource: MatTableDataSource<appointment>;
  todayAppt = [];
  yesterdayAppt: any[] = [];
  otherAppt: any[] = [];
  tomorrowAppt: any[] = [];
  currentDate: Date = new Date();

  displayedColumns: string[] = [
    'id',
    'patientName',
    'appointmentDate',
    'age',
    'gender',
    'city',
    'contact',
  ];

  constructor(
    private _hospitalService: HospitalService,
    private _apptService: AppointmentService,
    private _dateFormat: DateFormatPipe,
    private _filterAppt: FilterAppt,
  ) {

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
    let loggedData = localStorage.getItem('Login');
    if (loggedData != null) {
      let loggedUser = JSON.parse(loggedData);
      this._hospitalService
        .getData(loggedUser.hospitalName, loggedUser.password)
        .subscribe({
          next: (res) => {
            this.hospitalId = res[0].id;
            this.hospitalName = res[0].hospitalName;
            this._apptService.getAppointment(this.hospitalId).subscribe({
              next: (res) => {
                this.apptData = res;
                this.todayAppt = this._filterAppt.transform(res, 'today');
                this.yesterdayAppt = this._filterAppt.transform(
                  res,
                  'yesterday'
                );
                this.tomorrowAppt = this._filterAppt.transform(res, 'tomorrow');
                console.log(this.apptData);
                this.dataSource = new MatTableDataSource(this.apptData);
                this.dataSource.paginator = this.paginator;
              },
            });
          },
        });
    }
  }
}
