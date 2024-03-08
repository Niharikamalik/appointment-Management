import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HospitalListComponent } from './components/hospital-list/hospital-list.component';
import { NewHospitalComponent } from './components/new-hospital/new-hospital.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'appointment', component: AppointmentListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hospital', component: HospitalListComponent },
  { path: 'new-hospital', component: NewHospitalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
