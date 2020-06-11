// implementation based on https://css-tricks.com/detecting-inactive-users/

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserActivityService {
  userActivityTimeout = null;

  constructor(private router: Router) {}

  resetUserActivityTimeout = () => {
    clearTimeout(this.userActivityTimeout);
    this.userActivityTimeout = setTimeout(() => {
      this.inactiveUserAction();
    }, 3000);
  };

  inactiveUserAction() {
    // no user activity => go back to attractor
    this.router.navigate(['']);
  }
}
