import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject, fromEvent } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-learning2',
  templateUrl: './learning2.component.html',
  styleUrls: ['./learning2.component.css']
})
export class Learning2Component implements OnInit {

  firstSubject = new Subject();
  observer1: any;

  constructor() {
    this.observer1 = this.firstSubject.subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('Completed!')
      );
  }

  ngOnInit() {
    this.methodSubject();
    this.firstSubject.next('FINAL sent!');
    this.observer1.unsubscribe();
  }

  methodObserver1() {
    const observable = fromEvent(document, 'click');
    setTimeout(() => {
      const subscription = observable.subscribe(
        (x: any) => console.log('Teste')
      );
    }, 2000);
  }

  methodSubject() {
    this.firstSubject.next('First sent!');
    this.firstSubject.next('Second sent!');
    this.firstSubject.next('Third sent!');
  }

}
