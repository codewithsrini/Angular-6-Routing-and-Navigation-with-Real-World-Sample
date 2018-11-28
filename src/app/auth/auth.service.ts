import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor() { }

  checkLoginSatus(): Observable<boolean> {
    return of(JSON.parse(localStorage.getItem('isLoggedIn')));
  }

  login(): Observable<boolean> {
    // authenticaion mechanism
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
    this.isLoggedIn = true;
    return of(true);
  }

  logout():void {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }
}
