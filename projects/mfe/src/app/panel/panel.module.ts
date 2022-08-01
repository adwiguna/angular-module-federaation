import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedpanelComponent } from './sharedpanel/sharedpanel.component';
import { SharedPanelRoutingModule } from './sharedpanel-routing.module';

@NgModule({
  declarations: [
    SharedpanelComponent
  ],
  imports: [
    CommonModule,
    SharedPanelRoutingModule
  ],
  exports: [
    SharedpanelComponent
  ],
  bootstrap: [SharedpanelComponent]
})
export class PanelModule { }
