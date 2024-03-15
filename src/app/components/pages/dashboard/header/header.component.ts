import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  hospitalName: string;
  @Output() ForToggleSidebar: EventEmitter<any>  = new EventEmitter() ;
  constructor(private router: Router, private routes: ActivatedRoute) {
    let loggedData = localStorage.getItem('Login');
    if (loggedData != null) {
      let loggedUser = JSON.parse(loggedData);
      this.hospitalName = loggedUser.hospitalName;
    }
  }

  ngOnInit(): void {}

  logOff() {
    localStorage.removeItem('Login');
    this.router.navigateByUrl('/home');
  }
  toggleSideBar() {
    this.ForToggleSidebar.emit();
  }
}
