import { NgModule } from '@angular/core';

import { AdminSoftchRoutingModule } from './admin-routing.module';

import { HomeComponent } from './pages/home/home.component';







@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    AdminSoftchRoutingModule
  ]
})
export class AdminModule { }
