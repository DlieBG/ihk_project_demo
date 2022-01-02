import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Station } from 'src/app/types/station.type';
import { TighteningTask } from 'src/app/types/tightening-task.type';
import { Task } from 'src/app/types/task.type';
import { Tightening } from 'src/app/types/tightening.type';

@Injectable({
  providedIn: 'root'
})
export class DashboardDemoService {

  private station: Station = { } as Station;
  private tighteningTask: TighteningTask = { } as TighteningTask;
  private task: Task = { } as Task;
  private tightenings: Tightening[] = [];
  private ongoingTightenings: Tightening[] = [];

  private stationSubscriber!: Subscriber<Station>;
  private tighteningTaskSubscriber!: Subscriber<TighteningTask>;
  private taskSubscriber!: Subscriber<Task>;
  private tighteningsSubscriber!: Subscriber<Tightening[]>;
  private ongoingTighteningsSubscriber!: Subscriber<Tightening[]>;

  station$!: Observable<Station>;
  tighteningTask$!: Observable<TighteningTask>;
  task$!: Observable<Task>;
  tightenings$!: Observable<Tightening[]>;
  ongoingTightenings$!: Observable<Tightening[]>;

  constructor() { 
    this.station$ = new Observable<Station>((subscriber) => {this.stationSubscriber = subscriber});
    this.tighteningTask$ = new Observable<TighteningTask>(subscriber => this.tighteningTaskSubscriber = subscriber);
    this.task$ = new Observable<Task>(subscriber => this.taskSubscriber = subscriber);
    this.tightenings$ = new Observable<Tightening[]>(subscriber => this.tighteningsSubscriber = subscriber);
    this.ongoingTightenings$ = new Observable<Tightening[]>(subscriber => this.ongoingTighteningsSubscriber = subscriber);
  }

  initSubscriptions() {
    this.stationSubscriber.next({
      stationNr: 1,
      ip: '127.0.0.1',
      port: 4545,
      pc: 'deborpw16dt3',
      name: 'Demo-Station 1',
      description: 'Demo-Station 1',
      status: 'active'
    });
  }

  startTighteningTask(size: number) {
    this.tighteningTask = {
      tighteningTaskNr: 1,
      faNr: '1',
      teilNr: 1,
      time: new Date(),
      task: 1,
      ready: false,
      success: null,
      reject: null
    };
    this.tighteningTaskSubscriber.next(this.tighteningTask);

    this.task = {
      taskNr: 1,
      station: 1,
      tag: '1',
      name: 'Demo-Task 1',
      description: 'Demo-Task 1',
      job: 1,
      size: size
    };
    this.taskSubscriber.next(this.task);

    this.tightenings = [];
    this.ongoingTightenings = [];
    this.tighteningsSubscriber.next([]);
    this.ongoingTighteningsSubscriber.next([]);
  }

  newOKTightening() {
    this.tightenings.push({
      tighteningNr: 1,
      sequence: (this.ongoingTightenings.length > 0 ? (this.ongoingTightenings[this.ongoingTightenings.length - 1].status == 'OK' ? this.ongoingTightenings[this.ongoingTightenings.length - 1].sequence + 1 : this.ongoingTightenings[this.ongoingTightenings.length - 1].sequence) : 1),
      tighteningTask: 1,
      time: new Date(),
      torque: 1,
      angle: 1,
      status: 'OK'
    });
    this.tighteningsSubscriber.next(this.tightenings);

    this.ongoingTightenings = this.getOngoingTightenings();
    this.ongoingTighteningsSubscriber.next(this.ongoingTightenings);

    if(this.ongoingTightenings[this.ongoingTightenings.length - 1].status == 'OK' && this.ongoingTightenings.length == this.task.size) {
      this.tighteningTask.ready = true;
      this.tighteningTaskSubscriber.next(this.tighteningTask);
    }
  }

  newNOKTightening() {
    this.tightenings.push({
      tighteningNr: 1,
      sequence: (this.ongoingTightenings.length > 0 ? (this.ongoingTightenings[this.ongoingTightenings.length - 1].status == 'OK' ? this.ongoingTightenings[this.ongoingTightenings.length - 1].sequence + 1 : this.ongoingTightenings[this.ongoingTightenings.length - 1].sequence) : 1),
      tighteningTask: 1,
      time: new Date(),
      torque: 1,
      angle: 1,
      status: 'NOK'
    });
    this.tighteningsSubscriber.next(this.tightenings);

    this.ongoingTightenings = this.getOngoingTightenings();
    this.ongoingTighteningsSubscriber.next(this.ongoingTightenings);
  }

  rejectTighteningTask() {
    this.tighteningTask.reject = new Date();
    this.tighteningTaskSubscriber.next(this.tighteningTask);
  }

  getOngoingTightenings(): Tightening[] {
    // Alle Verschraubungen auslesen
    let tightenings = this.tightenings;
    // Falls nur eine Verschraubung vorhanden ist, wird diese zurückgegeben
    if(tightenings.length == 1)
        return tightenings;
    
    // Falls keine Verschraubung vorhanden ist, wird nichts zurückgegeben
    if(tightenings.length == 0)
        return [];

    // Die letzte Verschraubung auslesen, egal ob OK oder NOK
    let lastTightening = tightenings[tightenings.length - 1];
    

    // Richtige Verschraubungen auslesen
    let okTightenings: Tightening[] = [];
    tightenings.forEach(tightening => {
      if(tightening.status == 'OK')
        okTightenings.push(tightening);
    });

    if(okTightenings.length == 0)
        return [lastTightening];

    // Die letzte OK-Verschraubung auslesen
    let lastOkTightening = okTightenings[okTightenings.length - 1];

    
    // Wenn die letzte getätigte Verschraubung nicht die letzte korrekte Verschraubung ist, dann muss diese die falsch verschraubte nächste Verschraubung sein, also wird sie an das Array angehängt
    if(lastOkTightening.sequence != lastTightening.sequence)
        okTightenings.push(lastTightening);

    return okTightenings;
  }

}
