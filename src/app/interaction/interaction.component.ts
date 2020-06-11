import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../service/data.service';
import { Data } from '../models/data';
import { formAnimation, resultAnimation } from '../animations/animations';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
  animations: [formAnimation],
})
export class InteractionComponent implements OnInit {
  animationState = 'initial';
  data: Data;
  dotDashArr: any = [];
  errorMsg = '';
  isError: boolean = false;
  isResultVisible: boolean = false;
  morseCodeArr: any = [];
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

    // check input value against this.data; go through array of letters from the input and return only these ones where input value corrensponds to value of key in this.data object
    this.morseCodeArr = letters.map((letter: string) => this.data[letter]);
    // show result
    this.isResultVisible = true;

    // toggle form and result visiblity
    this.animationState = this.animationState === 'initial' ? 'active' : 'initial';
  }

  convertToImgs(morseCode) {
    // assing  morsecode sign to corresonding img
    return morseCode.split('').map((el) => (el === '.' ? (el = 'dot') : (el = 'dash')));
  }

  tryAgain() {
    this.isResultVisible = false;
    this.animationState = 'initial';

    // clear input field here => word you want to translate is visible in result div
    this.word = '';
  }

  attractor() {
    this.router.navigate(['']);
  }
}
