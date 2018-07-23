import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from '../../../../node_modules/rxjs';
import { MessagesService } from '../../services/messages.service';
import { FormsModule } from '@angular/forms'; // ngModule

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {

  message: any;
  nomeFromObservable: any;
  subscription: Subscription;
  subscriptionNomes: Subscription;
  public texto: any;
  public nome: string;

  constructor(private messageService: MessagesService) {
      // subscribe to home component messages
      this.subscription = this.messageService.getMessage()
                                             .subscribe(message => { this.message = message.text; });

  }

  ngOnInit() {
    this.subscriptionNomes = this.messageService.getNome()
                                                .subscribe(nome => { this.nomeFromObservable = nome; });

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    this.subscriptionNomes.unsubscribe();
}

  // ***************************************************
  //  Observable Messages
  // ***************************************************
  sendMessage(msg): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(msg);
  }

  clearMessage(): void {
      // clear message
      this.messageService.clearMessage();
  }

  // ***************************************************
  //  Observable Nome
  // ***************************************************

  sendNome(nome): void {
    // send nome to subscribers via observable subject
    this.messageService.sendNome(nome);
  }

  clearNome(): void {
      // clear nome
      this.messageService.clearNome();
  }

}
