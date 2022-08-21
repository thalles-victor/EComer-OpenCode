import { Injectable } from '@nestjs/common';
import { UserCreatedEvent } from './Event/user-created.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(userCreatedEvent: UserCreatedEvent) {
    console.log(userCreatedEvent);
  }
}
