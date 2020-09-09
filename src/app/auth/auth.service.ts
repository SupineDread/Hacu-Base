import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AuthData } from './interfaces/auth-data-model';
import * as fromRoot from '../app.reducer';
import { UiService } from '../shared/ui.service';
import * as UI from '../shared/ui.actions';
import * as Auth from '../auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private uiService: UiService,
    private store: Store<fromRoot.State>
  ) { }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new Auth.SetAuthenticated());
        this.router.navigate(['/dashboard'])
      } else {
        this.store.dispatch(new Auth.SetUnauthenticated());
        this.router.navigate(['/login'])
      }
    })
  }

  login(authData: AuthData) {
    this.store.dispatch(new UI.StartLoading());
    this.afAuth.signInWithEmailAndPassword(authData.email, authData.password).then(res => {
      this.store.dispatch(new UI.StopLoading());
    }).catch(error => {
      this.store.dispatch(new UI.StopLoading());
      this.uiService.showSnackBar(error.message, null, {duration: 3000});
    })
  }

  logout() {
    this.afAuth.signOut();
  }

}
