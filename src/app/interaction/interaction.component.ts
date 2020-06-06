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
  isError: boolean = false;
  errorMsg = '';
  data: Data;
  word = '';
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(
      (data) => {
        this.data = data;
      },
      (err) => {
        this.isError = true;
        this.errorMsg = err;
      },
    );
  }

  onSubmit(value) {
    // remove white spaces, transform to lowercase
    let letters = value.toLowerCase().replace(/\s/g, '').split('');
    console.log(letters);
    // check input value agains this.data;  go through array of letters from the input and return only these ones where input value corrensponds to value of key in this.data object
    let morseCode = letters.map((letter: string) => this.data[letter]);
    console.log(morseCode);
  }

  attractor() {
    this.router.navigate(['']);
  }
}
