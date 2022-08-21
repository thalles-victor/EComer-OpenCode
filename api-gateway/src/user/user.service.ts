import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { ICreatedUserDTO } from './Core/DTOs/ICreateUserDTO';
import { UserCreatedEvent } from './Event/user-created.event';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MICROSERVICE') private readonly userClient: ClientKafka,
  ) {}

  create({ name, email, age, photo }: ICreatedUserDTO) {
    this.userClient.emit(
      'user_created',
      new UserCreatedEvent(name, email, age, photo),
    );
  }
}
