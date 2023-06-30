import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {} // 28/06/2023 - Dashboard Page

  // 28/06/2023 - Dashboard Page
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
  // 28/06/2023 - End Dashboard Page
}
