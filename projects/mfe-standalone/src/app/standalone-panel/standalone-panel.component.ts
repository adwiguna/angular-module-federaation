import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standalone-panel',
  template: `<p style="border: '2px dashed green'">
            standalone-component works!</p>
            <button (click)="logWindow()">Log</button>`,
  imports: [CommonModule],
  standalone: true
})
export class StandalonePanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logWindow() {
    console.log((window as any)['AngularCustomValue']);
  }
}
