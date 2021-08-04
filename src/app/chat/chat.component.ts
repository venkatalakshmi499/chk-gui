import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
 @Input() conversation;
  constructor() { }

  ngOnInit(): void {
  }
  submitMessage(event) {
     let value = event.target.value.trim();
     event.target.value='';
     if (value.length < 1) return false;
     this.conversation.messages.unshift({
       id: 1,
      body: value,
      time: '10:21',
      me: true,
     });
  }

}
