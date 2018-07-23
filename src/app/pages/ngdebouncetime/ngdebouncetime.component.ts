import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-ngdebouncetime',
  templateUrl: './ngdebouncetime.component.html',
  styleUrls: ['./ngdebouncetime.component.css']
})
export class NgdebouncetimeComponent implements OnInit {

  input;
  example;
  debouncedInput;
  valorDigitado;

  constructor() {
  }

  ngOnInit() {
    this.input = document.getElementById('example') as HTMLInputElement;
    this.example = fromEvent(this.input, 'keyup').pipe(map(i => i));
    this.debouncedInput = this.example.pipe(debounceTime(500));
    const subscribe = this.debouncedInput.subscribe(val => {
      console.log(`Debounced Input: ${val.target.value}`);
      this.valorDigitado = val.target.value;
    });
  }

  teste() {
    alert('Valor digitado -> ' + this.valorDigitado);
  }

}
