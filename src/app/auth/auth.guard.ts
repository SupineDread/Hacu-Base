import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as fromRoot from '../app.reducer';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1));
  }

  canLoad(route: Route) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1));
  }

}
