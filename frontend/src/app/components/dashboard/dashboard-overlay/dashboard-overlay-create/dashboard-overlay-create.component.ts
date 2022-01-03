import { Component, OnInit } from '@angular/core';
import { DashboardDemoService } from 'src/app/services/dashboard-demo/dashboard-demo.service';

@Component({
  selector: 'app-dashboard-overlay-create',
  templateUrl: './dashboard-overlay-create.component.html',
  styleUrls: ['./dashboard-overlay-create.component.scss']
})
export class DashboardOverlayCreateComponent implements OnInit {

  size: number = 8;

  constructor(private dashboardDemoService: DashboardDemoService) { }

  ngOnInit(): void {
  }

  startTighteningTask() {
    this.dashboardDemoService.startTighteningTask(this.size);
  }

}
