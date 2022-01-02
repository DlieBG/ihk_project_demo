import { Component, Input, OnInit } from '@angular/core';
import { Tightening } from 'src/app/types/tightening.type';

@Component({
  selector: 'app-dashboard-tightening-table',
  templateUrl: './dashboard-tightening-table.component.html',
  styleUrls: ['./dashboard-tightening-table.component.scss']
})
export class DashboardTighteningTableComponent implements OnInit {

  @Input() tightenings!: Tightening[];

  columns: string[] = ['sequence', 'status', 'time', 'torque', 'angle'];

  constructor() { }

  ngOnInit(): void {
  }

}
