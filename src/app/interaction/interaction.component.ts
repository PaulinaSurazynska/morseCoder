import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  attractor() {
    this.router.navigate(['']);
  }
}
