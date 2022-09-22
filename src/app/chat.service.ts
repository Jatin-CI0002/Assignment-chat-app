import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { ChatModel } from "./chat/chat.model";

@Injectable({
  providedIn: 'root',
 })

export class ChatService{
  private data = new Subject<ChatModel>();
  message = this.data.asObservable();
  nextMessage(msg:ChatModel){
    this.data.next(msg);
  }
}
