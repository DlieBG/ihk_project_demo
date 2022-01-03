import { Component, Input, OnInit } from '@angular/core';
import { DashboardDemoService } from 'src/app/services/dashboard-demo/dashboard-demo.service';
import { TighteningTask } from 'src/app/types/tightening-task.type';

@Component({
  selector: 'app-dashboard-overlay',
  templateUrl: './dashboard-overlay.component.html',
  styleUrls: ['./dashboard-overlay.component.scss']
})
export class DashboardOverlayComponent implements OnInit {

  @Input() tighteningTask!: TighteningTask;

  constructor() { }

  ngOnInit(): void {
  }

}
