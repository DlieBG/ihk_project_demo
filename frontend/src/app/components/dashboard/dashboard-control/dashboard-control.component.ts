import { Component, OnInit } from '@angular/core';
import { DashboardDemoService } from 'src/app/services/dashboard-demo/dashboard-demo.service';

@Component({
  selector: 'app-dashboard-control',
  templateUrl: './dashboard-control.component.html',
  styleUrls: ['./dashboard-control.component.scss']
})
export class DashboardControlComponent implements OnInit {

  constructor(private dashboardDemoService: DashboardDemoService) { }

  ngOnInit(): void {
  }

  newOKTightening() {
    this.dashboardDemoService.newOKTightening();
  }

  newNOKTightening() {
    this.dashboardDemoService.newNOKTightening();
  }

  rejectTighteningTask() {
    this.dashboardDemoService.rejectTighteningTask();
  }

}
