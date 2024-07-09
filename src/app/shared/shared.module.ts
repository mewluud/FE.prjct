import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDepsModule } from '../material-deps/material-deps.module';
import {LoginComponent} from "../login/login.component";
import {SuccessMessageComponent} from "../success-message/success-message.component";
import {DangerMessageComponent} from "../danger-message/danger-message.component";




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDepsModule,
    LoginComponent,
    SuccessMessageComponent,
    DangerMessageComponent
  ],
  exports: [
      FormsModule,
    ReactiveFormsModule,
    MaterialDepsModule]
})
export class SharedModule { }
