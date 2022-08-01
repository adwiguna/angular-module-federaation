import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedpanelComponent } from './sharedpanel/sharedpanel.component';

const routes: Routes = [
  {
    path: '',
    component: SharedpanelComponent
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedPanelRoutingModule { }
