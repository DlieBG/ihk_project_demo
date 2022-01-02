import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardDemoService } from 'src/app/services/dashboard-demo/dashboard-demo.service';
import { Station } from 'src/app/types/station.type';
import { Task } from 'src/app/types/task.type';
import { TighteningTask } from 'src/app/types/tightening-task.type';
import { Tightening } from 'src/app/types/tightening.type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('flash', [
      transition(':increment', [
        animate('125ms ease-in', style({opacity: 0.4})),
        animate('125ms ease-in', style({opacity: 1}))
      ]),
      transition(':decrement', [
        animate('125ms ease-in', style({opacity: 0.4})),
        animate('125ms ease-in', style({opacity: 1}))
      ])
    ]),
    trigger('ready', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s ease-in', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('500ms ease-in', style({opacity: 0})),
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {

  station!: Station;
  station$!: Observable<Station>;

  tighteningTask!: TighteningTask;
  tighteningTask$!: Observable<TighteningTask>;

  task!: Task;
  task$!: Observable<Task>; 

  tightenings!: Tightening[];
  tightenings$!: Observable<Tightening[]>;

  ongoingTightenings!: Tightening[];
  ongoingTightenings$!: Observable<Tightening[]>;

  constructor(private dashboardDemoService: DashboardDemoService) { }

  ngOnInit(): void {
    this.dashboardDemoService.station$.subscribe(station => this.station = station);
    this.dashboardDemoService.tighteningTask$.subscribe(tighteningTask => this.tighteningTask = tighteningTask);
    this.dashboardDemoService.task$.subscribe(task => this.task = task);
    this.dashboardDemoService.tightenings$.subscribe(tightenings => this.tightenings = tightenings);
    this.dashboardDemoService.ongoingTightenings$.subscribe(ongoingTightenings => this.ongoingTightenings = ongoingTightenings);

    this.dashboardDemoService.initSubscriptions();
  }

}
