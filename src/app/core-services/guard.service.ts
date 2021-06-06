import { Injectable } from '@angular/core';
import {
  Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot,
  RouterStateSnapshot, CanLoad, CanDeactivate
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return true;
  }

  canLoad(): boolean {

    return true;
  }

  canDeactivate(component: any): boolean {

    return false
  }



}
