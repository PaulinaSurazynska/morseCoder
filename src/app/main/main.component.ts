import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from '../animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [routeAnimations],
})
export class MainComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
