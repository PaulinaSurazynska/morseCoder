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
      console.log('I am going back!');
    }, 8000);
  };

  inactiveUserAction() {
    // no user activity => go back to attractor
    this.router.navigate(['']);
  }

  activateTracingUserActivity() {
    window.addEventListener('click', this.resetUserActivityTimeout);
    window.addEventListener('mousemove', this.resetUserActivityTimeout);
    window.addEventListener('keypress', this.resetUserActivityTimeout);
  }

  disactivateTracingUserAcivity() {
    window.removeEventListener('click', this.resetUserActivityTimeout);
    window.removeEventListener('mousemove', this.resetUserActivityTimeout);
    window.removeEventListener('keypress', this.resetUserActivityTimeout);
    clearTimeout(this.userActivityTimeout);
  }
}
