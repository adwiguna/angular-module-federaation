import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharedpanel',
  template: `
    <p style="border: 2px dashed red">
      sharedpanel works!
    </p>
  `,
  styles: [
  ]
})
export class SharedpanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
