import { Component, ViewChild, Input, ViewContainerRef } from '@angular/core';
import { ChatComponent } from './chat/chat.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit() {}
  public str: any;

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  addComponent(): void {
    if (this.str) {
      let chat = this.container.createComponent(ChatComponent);
      chat.instance.userName = this.str;
      chat.instance.compoRef = chat;
      this.str = '';
    }
    else {
      alert('please enter valid name');
      return;
    }
  }
}
