import { Component, OnInit } from '@angular/core';
import { GridReadyEvent } from 'ag-grid-community';
import { GridApi } from 'ag-grid-community';
import { hospital } from 'src/app/interface/hospital';
import { HospitalService } from 'src/app/services/hospital.service';
import { filter } from 'rxjs';
@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css'],
})
export class HospitalListComponent implements OnInit {
  displayedColumns: string[] = ['hospitalName', 'hospitalEmail','city' , 'contact'];
  dataSource : hospital[]= [];
  constructor(private hosiptalService: HospitalService) {}

  ngOnInit(): void {
    this.onGetData();
  }

  onGetData() {
    this.hosiptalService.getAllHospital().subscribe((res: any) => {
      this.dataSource = res;
      console.log(this.dataSource);
    });
  }
}
