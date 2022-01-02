import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('easteregg', [
      transition(':enter', [
        style({ 'margin-right': 0, width: 0, transform: 'scale(0)' }),
        animate('500ms ease-out', style({ 'margin-right': '1em', width: '40px' })),
        animate('250ms ease-out', style({ transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ transform: 'scale(0)' })),
        animate('500ms ease-out', style({ 'margin-right': 0, width: 0 }))
      ])
    ])
  ]
})
export class AppComponent {

  title = 'Flender Verschraubungen - Demo';
  rickrole = false;

  rollit() {
    this.rickrole = false;
    setTimeout(() => {
      window.open('https://youtu.be/dQw4w9WgXcQ?t=0', '_blank');
    }, 420 * 2);
  }
}
