import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HighChartComponent } from './high-chart/high-chart.component';

import { GuardService } from '../../core-services/guard.service';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,canActivate : [GuardService], canDeactivate : [GuardService], canActivateChild : [GuardService], children: [
      { path: 'bar', component: BarchartComponent },
      { path: 'pie', component: PiechartComponent, canDeactivate : [GuardService] },
      { path: 'line', component: LineChartComponent, canActivate : [GuardService] },
      { path: 'high', component: HighChartComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
