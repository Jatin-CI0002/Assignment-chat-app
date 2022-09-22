import { Component, Input, OnInit } from '@angular/core';
import { ChatModel } from '../chat/chat.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent{
  @Input() messageData!:ChatModel;
  @Input() userName : string = '';
  side:boolean = true;
  public user : string = '';
  public message : string = '';
  public time : string = '';

  ngOnInit(){
    this.side = (this.messageData.Name === this.userName);
  }
}
