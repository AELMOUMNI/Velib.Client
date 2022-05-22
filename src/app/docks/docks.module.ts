import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DockAvailableListComponent } from '../docks/dock-available-list/dock-available-list.component'
import { DockNotworkingstationListComponent } from './dock-notworkingstation-list/dock-notworkingstation-list.component';



@NgModule({
  declarations: [
  DockAvailableListComponent,
  DockNotworkingstationListComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'docksavailable', component: DockAvailableListComponent},
      {path: 'notworkingstation', component: DockNotworkingstationListComponent}
    ]),
    CommonModule
  ]
})
export class DocksModule { }
