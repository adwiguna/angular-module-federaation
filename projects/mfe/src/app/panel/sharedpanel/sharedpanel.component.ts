import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharedpanel',
  template: `
    <p style="border: 2px dashed red">
      sharedpanel works!
      <button (click)="logWindow()">Log</button>
    </p>
  `,
  styles: [
  ]
})
export class SharedpanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logWindow() {
    console.log((window as any)['AngularCustomValue']);
  }
}
