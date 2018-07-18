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
  subscription: Subscription;
  public texto: any;

  constructor(private messageService: MessagesService) {
      // subscribe to home component messages
      this.subscription = this.messageService.getMessage()
                                             .subscribe(message => { this.message = message.text; });
  }

  ngOnInit() {
  }

  sendMessage(msg): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(msg);
  }

  clearMessage(): void {
      // clear message
      this.messageService.clearMessage();
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}
