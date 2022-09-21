import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { ChatMessage } from './chat.service';
import { ChatFormat } from './chat.interface';
import { subscribeOn, Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  public userName : string = '';
  public userMessage:string = '';
  chatMessage:string = '';
  sub! : Subscription;
  compoRef!: ComponentRef<ChatComponent>;
  constructor(private messageService : ChatMessage){}

  ngOnInit(){
      this.sub = this.messageService.msg.subscribe(msg => this.saveMessage(msg))
    }

    @ViewChild('container', {read:ViewContainerRef}) container!: ViewContainerRef;
    sendMessage(){
      let message: ChatFormat = {
        Name : this.userName,
        Message : this.userMessage,
        Time : new Date().toLocaleString()
      }
      this.messageService.message(message);
    }

    saveMessage(msg:ChatFormat){
      let message = this.container.createComponent(MessageComponent);
      message.instance.user = msg.Name;
      message.instance.message = msg.Message;
      message.instance.time = msg.Time;
      message.instance.isSender = (msg.Name === this.userName)
      this.userMessage = '';
  }

  closeChat(){
    this.sub.unsubscribe();
    this.compoRef.destroy();
  }
}
