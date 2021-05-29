import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { BootstrapDemoComponent } from './bootstrap-demo/bootstrap-demo.component';
import {MochParentComponent} from './moch-parent/moch-parent.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'bootstrap', component: BootstrapDemoComponent},
  {
    path : 'auth', loadChildren : () => import('./feature-module/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path : 'reports', loadChildren : () => import('./feature-module/reports/reports.module').then(module => module.ReportsModule)
  },
  {
    path : 'moch', component: MochParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
