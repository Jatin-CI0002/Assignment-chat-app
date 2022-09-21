import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { ChatFormat } from "./chat.interface";
@Injectable({
  providedIn: 'root',
 })

export class ChatMessage{

  private data = new Subject<ChatFormat>();
  msg = this.data.asObservable();
  constructor(){  }
  message(msg:ChatFormat){
    this.data.next(msg);
  }
}
