import { Component, OnInit } from '@angular/core';
import { concat, delay, mapTo, startWith, scan } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { interval } from 'rxjs/internal/observable/interval';
import { merge } from 'rxjs/internal/observable/merge';
import { Funcoes } from '../../classes/funcoes';

@Component({
  selector: 'app-rxjs-ex',
  templateUrl: './rxjs-ex.component.html',
  styleUrls: ['./rxjs-ex.component.css']
})
export class RxjsExComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.funcaoTesteUm();
  }

  exemploConcat() {
    const sourceOne = of(1, 2, 3);
    const sourceTwo = of(4, 5, 6);
    const example = sourceOne.pipe(concat(sourceTwo));
    const subscribe = example.subscribe(val =>
    console.log('Concat simples:', val ));
  }

  exemploConcatDelay() {
    const sourceOne = of(1, 2, 3);
    const sourceTwo = of(4, 5, 6);
   // const sourceThree = sourceOne.pipe(delay(3000));
    const sourceThree = sourceOne.pipe(delay(3000),
                                       concat(sourceTwo));
    // const example = sourceThree.pipe(concat(sourceTwo));
   // const subscribe = example.subscribe(val =>
    const subscribe = sourceThree.subscribe(val =>
      console.log('Concat e delay', val)
    );
  }

  exemploMerge() {
    const first = interval(1000);
    const second = interval(2000);
    const third = interval(3000);
    const fourth = interval(6000);

    const example = merge(
      first.pipe(mapTo('FIRST!')),
      second.pipe(mapTo('SECOND!')),
      third.pipe(mapTo('THIRD')),
      fourth.pipe(mapTo('FOURTH'))
    );
    const subscribe = example.subscribe(val => console.log(val));
  }

  exemploStartWith() {
    const source = of(1, 2, 3);
    const example = source.pipe(startWith(0));
    const subscribe = example.subscribe(val => console.log(val));
  }

  exemploStartWithScan() {
    // emit ('World!', 'Goodbye', 'World!')
    const source = of('World!', 'Goodbye', 'World!');
    // start with 'Hello', concat current string to previous
    const example = source.pipe(
      startWith('HelloAcc'),
      scan((acc, curr) => `${acc} ${curr}`)
    );
    /*
      output:
      "Hello"
      "Hello World!"
      "Hello World! Goodbye"
      "Hello World! Goodbye World!"
    */
    const subscribe = example.subscribe(val => console.log(val));
  }

  exemploStartWithCounter() {
    // emit values in sequence every 1s
    const source = interval(1000);
    // start with -3, -2, -1
    const example = source.pipe(startWith(-3, -2, -1));
    // output: -3, -2, -1, 0, 1, 2....
    const subscribe = example.subscribe(val => console.log(val));
  }

  exemploMapUm() {
    const evens = [2, 4, 6, 8];
    const odds = evens.map(v => v + 1);
    odds.forEach(i => {
      console.log(i);
    });
  }

   funcaoTesteUm() {
     const func = new Funcoes('Greeting!');
     const sizeString = func.sizeString('Greeting!');
     console.log(sizeString);
   }



}
