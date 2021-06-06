import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AlertComponent } from './core-components/alert/alert.component';


@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [AlertComponent]
})
export class SharedModule { }
