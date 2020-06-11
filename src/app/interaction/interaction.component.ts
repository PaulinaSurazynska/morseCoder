import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../service/data.service';
import { UserActivityService } from '../service/user-activity.service';
import { Data } from '../models/data';
import { formAnimation } from '../animations/animations';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
  animations: [formAnimation],
})
export class InteractionComponent implements OnInit, OnDestroy {
  animationState = 'initial';
  data: Data;
  dotDashArr: any = [];
  errorMsg = '';
  isError: boolean = false;
  isResultVisible: boolean = false;
  morseCodeArr: any = [];
  word = '';

  constructor(
    private router: Router,
    private dataService: DataService,
    private userActivityService: UserActivityService,
  ) {}

  ngOnInit() {
    this.getData();

    window.addEventListener('click', this.userActivityService.resetUserActivityTimeout);
    window.addEventListener('keypress', this.userActivityService.resetUserActivityTimeout);
  }

  getData() {
    // subscribe to data from the servicse
    this.dataService.getData().subscribe(
      (data) => {
        this.data = data;
      }, // in case of error => let user know about it ;)
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

  ngOnDestroy() {
    // remove all events listeners and clear timeout
    window.removeEventListener('click', this.userActivityService.resetUserActivityTimeout);
    window.removeEventListener('keypress', this.userActivityService.resetUserActivityTimeout);
    clearTimeout(this.userActivityService.userActivityTimeout);
  }
}
