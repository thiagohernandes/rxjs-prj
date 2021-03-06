import { Injectable } from '@angular/core';
import { Observable, Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  private subject = new Subject<any>();
  private subjectNomes = new Subject<string>();

    // *****************************
    // Subject Messages
    // *****************************

    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    // *****************************
    // Subject Nomes
    // *****************************

    sendNome(nome: string): void {
      this.subjectNomes.next(nome);
    }

    clearNome() {
        this.subjectNomes.next();
    }

    getNome(): Observable<string> {
        return this.subjectNomes.asObservable();
    }
}
