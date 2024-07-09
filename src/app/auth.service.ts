import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;

  constructor(private router: Router) {}


  logIn(username: string, password: string): boolean {
    if (username === 'mewlud' && password === 'gti') {
      this.currentUser = { username };
      sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      return true;
    }
    return false;
  }

  logOut(): void {
    this.currentUser = null;
    sessionStorage.removeItem('currentUser');
  } //it clears the currentUser variable and removes the stored user data from sessionStorage using removeItem.

  getCurrentUser(): any {
    if (this.currentUser) {
      return this.currentUser;
    }
    const user = sessionStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }
}
