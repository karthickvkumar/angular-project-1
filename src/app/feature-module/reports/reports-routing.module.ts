import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';

const routes: Routes = [
  {path: 'bar', component: BarchartComponent },
  {path : 'pie', component : PiechartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
