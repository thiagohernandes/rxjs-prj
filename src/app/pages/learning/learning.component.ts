import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  observableOne = Observable.create((observer: any) => {
    try {
    observer.next('Hey guys!');
    observer.next('How are u!');
    observer.complete();
    observer.next('Not sent');
    } catch (err) {
      observer.error(err);
    }
  });

  observableTwo = Observable.create((observer: any) => {
    try {
    observer.next('Hey guys!');
    observer.next('How are u!');
    setInterval(() => {
      observer.next('I´m good');
    }, 3000);
    } catch (err) {
      observer.error(err);
    } /* finally {
      observer.complete();
    } */
  });

  constructor() {
   const obs = this.observableTwo.subscribe((y: any) => {
      console.log(y);
    });
    setTimeout(() => {
      obs.unsubscribe();
    }, 7000);
  }

  ngOnInit() {
    // this.metodoObservable();
  }

  metodoObservable() {
    this.observableOne.subscribe((x: any) => {
      console.log(x);
      this.metodoShowConsole(x);
    } );
    this.metodoObservable1();
  }

  metodoObservable1() {
    this.observableOne.subscribe(
      (x: any) => {this.metodoShowConsole(x + 'from method 2'); },
      (error: any) => this.metodoShowConsole(error + 'erro!'),
      () => this.metodoShowConsole('Completed from method 2')
    );
  }

  metodoShowConsole(texto) {
    console.log(texto + ' from the method!');
  }

}
