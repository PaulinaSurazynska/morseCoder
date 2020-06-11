import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../service/data.service';
import { Data } from '../models/data';
import { analyzeFileForInjectables } from '@angular/compiler';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent implements OnInit {
  isError: boolean = false;
  isResultVisible: boolean = false;
  errorMsg = '';
  data: Data;
  word = '';
  morseCodeArr: any = [];
  dotDashArr: any = [];
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

    // check input value against this.data; go through array of letters from the input and return only these ones where input value corrensponds to value of key in this.data object
    this.morseCodeArr = letters.map((letter: string) => this.data[letter]);
    // show result
    this.isResultVisible = true;

    // clear input field
    this.word = '';
  }

  convertToImgs(morseCode) {
    // assing  morsecode sign to corresonding img
    return morseCode.split('').map((el) => (el === '.' ? (el = 'dot') : (el = 'dash')));
  }

  attractor() {
    this.router.navigate(['']);
  }
}
