import { Component, Input, OnInit } from '@angular/core';
import { TighteningTask } from 'src/app/types/tightening-task.type';
import { Task } from 'src/app/types/task.type';

@Component({
  selector: 'app-dashboard-tighteningtask',
  templateUrl: './dashboard-tighteningtask.component.html',
  styleUrls: ['./dashboard-tighteningtask.component.scss']
})
export class DashboardTighteningtaskComponent implements OnInit {

  @Input() tighteningTask!: TighteningTask;
  @Input() task!: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
