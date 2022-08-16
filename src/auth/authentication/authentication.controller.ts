import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { IUserDTO } from '../Core/DTOs/IUserDTO';
import { IUserEntity } from '../Core/Entities/IUserEntity';

import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Get()
  get(): string {
    return 'hello authentication controller';
  }

  @Post()
  async registerUser(@Body() user: IUserDTO) {
    const isRegister = await this.authenticationService.register(user);

    if (!isRegister) {
      return {
        status: 400,
        message: 'this user aready exist',
      };
    }

    return {
      status: 201,
      message: 'created',
    };
  }

  @Get(':userId')
  async getUserById(
    @Param('suerId') userId: string,
  ): Promise<IUserEntity | false> {
    return await this.authenticationService.getUserById(userId);
  }
}
