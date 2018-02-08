import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {

  constructor() {
  }

  messages: String[] = [];

  add(message: String) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
