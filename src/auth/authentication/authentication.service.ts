import { Injectable } from '@nestjs/common';
import { UserRepositoriesService } from '../../repositories/prisma/user-repositories/user-repositories.service';
import { IUserDTO } from '../Core/DTOs/IUserDTO';

@Injectable()
export class AuthenticationService {
  constructor(private readonly userRepository: UserRepositoriesService) {}

  async register(user: IUserDTO) {
    const userHaveRegister = await this.userRepository.register(user);

    return userHaveRegister;
  }

  async getUserById(id: string) {
    const user = await this.userRepository.getById(id);

    if (!user) {
      return false;
    }
    return user;
  }
}
