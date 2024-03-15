// import { HttpClientMoudle } from '@angular/core/HttpClientMoudle';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './components/pages/appointment-list/appointment-list.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HospitalListComponent } from './components/hospital-list/hospital-list.component';
import { NewHospitalComponent } from './components/new-hospital/new-hospital.component';
import { PatientListComponent } from './components/pages/patient-list/patient-list.component';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NewAppointmentComponent } from './components/pages/appointment-list/new-appointment/new-appointment.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider'
import { DateFormatPipe } from './pipe/date.pipe';
import { MatSelectModule } from '@angular/material/select';
import { FilterAppt } from './pipe/filterAppt.pipe';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './components/pages/dashboard/header/header.component';
import { SideNavComponent } from './components/pages/dashboard/side-nav/side-nav.component';
import { DashboardContainerComponent } from './components/pages/dashboard/dashboard-container/dashboard-container.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    DashboardComponent,
    HomeComponent,
    HospitalListComponent,
    NewHospitalComponent,
    PatientListComponent,
    LoginComponent,
    NewAppointmentComponent,
    DateFormatPipe,
    FilterAppt,
    HeaderComponent,
    SideNavComponent,
    DashboardContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatPaginatorModule
  ],
  providers: [DateFormatPipe,FilterAppt],
  bootstrap: [AppComponent],
})
export class AppModule {}
