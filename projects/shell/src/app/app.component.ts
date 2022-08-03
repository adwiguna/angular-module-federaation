import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/standalone">Standalone Component</a></li>
      <li><a routerLink="/mfe">Regular Component</a></li>
    </ul>
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
    </div>

    <input type="text" [(ngModel)]="customValue">
    <button (click)="assignValue()">Assign value</button>

    <router-outlet></router-outlet>
  `,
  styles: []
})

export class AppComponent {
  title = 'shell';

  customValue = '';
  assignValue() {
    (window as any)['AngularCustomValue'] = this.customValue;
  }
}
