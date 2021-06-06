import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading, PreloadAllModules } from '@angular/router';
import {CustomPreloadingStrategy} from './custom-preloading';

import { HomePageComponent } from './home-page/home-page.component';
import { BootstrapDemoComponent } from './bootstrap-demo/bootstrap-demo.component';
import {MochParentComponent} from './moch-parent/moch-parent.component';

import { GuardService } from './core-services/guard.service';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'bootstrap', component: BootstrapDemoComponent},
  {
    path : 'auth', loadChildren : () => import('./feature-module/auth/auth.module').then(module => module.AuthModule),
    data : { preload : false },
    canLoad : [GuardService]
  },
  {
    path : 'reports', loadChildren : () => import('./feature-module/reports/reports.module').then(module => module.ReportsModule),
    data : { preload : false }
  },
  {
    path : 'settings', loadChildren : () => import('./feature-module/settings/settings.module').then(module => module.SettingsModule),
    data : { preload : true },
    canLoad : [GuardService]
  },
  {
    path : 'moch', component: MochParentComponent, canActivate : [GuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy : CustomPreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
