import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sidebarOpen = true
  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggler() {
    this.sidebarOpen = !this.sidebarOpen
  }

}
