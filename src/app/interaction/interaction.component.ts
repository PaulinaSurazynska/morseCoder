import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../service/data.service';
import { Data } from '../models/data';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent implements OnInit {
  data: Data;
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      console.log('data: ', data);
    });
    // convert to array
  }

  attractor() {
    this.router.navigate(['']);
  }
}