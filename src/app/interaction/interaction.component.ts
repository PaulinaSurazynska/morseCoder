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

        console.log('this.data key', Object.keys(this.data));
        Object.keys(this.data).map((word) =>
          console.log('morseCode object assing to sign: ', this.data[word]),
        );
      },
      (err) => {
        this.isError = true;
        this.errorMsg = err;
      },
    );
  }

  onSubmit(word) {
    console.log(word);
    // remove white spaces, transform to lowercase
    let value = word.toLowerCase().replace(/\s/g, '').split('');
    console.log(value);
    // check input value agains keys from this.data
  }

  attractor() {
    this.router.navigate(['']);
  }
}
