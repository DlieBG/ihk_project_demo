import { Component, Input, OnInit } from '@angular/core';
import { Tightening } from 'src/app/types/tightening.type';
import { Task } from 'src/app/types/task.type';

@Component({
  selector: 'app-dashboard-tightening-circle',
  templateUrl: './dashboard-tightening-circle.component.html',
  styleUrls: ['./dashboard-tightening-circle.component.scss']
})
export class DashboardTighteningCircleComponent implements OnInit {

  @Input() task!: Task;
  @Input() ongoingTightenings!: Tightening[];

  constructor() { }

  ngOnInit(): void {
  }

  calculateAngle() {
    return 360 / this.task.size;
  }

  calculateIAngle(i: number, m: boolean = false) {
    if(m)
      return ((360 / this.task.size) * -i) + 90;

    return ((360 / this.task.size) * i) - 90;
  }

}
