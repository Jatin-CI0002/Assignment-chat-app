import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../chat.service';
import { ChatModel } from './chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent{

  constructor(private messageService : ChatService ){}
  @Input() userName : string = '';
  message:string = '';
  messages:ChatModel[] = [];
  isSender:boolean = true;
  subscriber!:Subscription;
  close:boolean = true;
  ngOnInit(){
    this.subscriber = this.messageService.message.subscribe(msg=>this.nextMessage(msg))
  }

  onKeydown(event: { key: string; }) {
    if (event.key === "Enter") {
      this.createMessage();
    }
  }
  createMessage(){
    if(this.message){
    let obj:ChatModel = {
      Name : this.userName,
      Message : this.message,
      Time : new Date().toLocaleString(),
    }
    console.log(this.messages);
    this.messageService.nextMessage(obj);
    this.message = '';
  }
  else{
    alert("Can't Send Empty Message");
    return;
  }
  }
  nextMessage(msg:ChatModel){
    this.messages.push(msg);
  }

  closeChat(){
    this.subscriber.unsubscribe();
    this.close = !this.close;
  }
}
