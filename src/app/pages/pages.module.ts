import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { PagesComponent } from './pages.component';
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    CarListComponent,
    CarFormComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
  ]
})
export class PagesModule { }
