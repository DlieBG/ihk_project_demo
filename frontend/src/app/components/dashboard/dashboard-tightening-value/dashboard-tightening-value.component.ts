import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/types/task.type';
import { Tightening } from 'src/app/types/tightening.type';

@Component({
  selector: 'app-dashboard-tightening-value',
  templateUrl: './dashboard-tightening-value.component.html',
  styleUrls: ['./dashboard-tightening-value.component.scss']
})
export class DashboardTighteningValueComponent implements OnInit {

  @Input() task!: Task;
  @Input() ongoingTightenings!: Tightening[];

  constructor() { }

  ngOnInit(): void {
  }

}
