import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attractor',
  templateUrl: './attractor.component.html',
  styleUrls: ['./attractor.component.scss'],
})
export class AttractorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  start() {
    console.log('asd');
    this.router.navigate(['interaction']);
  }
}
