import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-app';
  user : string = '';
  userName:string = '';
  Users:Array<string> = [];

  onKeydown(event: { key: string; }) {
    if (event.key === "Enter") {
      this.createUser();
    }
  }
  createUser(){
  if(this.Users.includes(this.user))
  {
    alert("User is already in Chat");
    return;
  }
  else if(!this.user){
    alert("Please Enter UserName");
    return;
  }
  else{
    this.userName = this.user;
    this.Users.push(this.userName);
    this.user = '';
  }

}
}
