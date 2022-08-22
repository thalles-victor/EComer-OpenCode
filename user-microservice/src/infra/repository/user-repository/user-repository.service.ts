import { Injectable } from '@nestjs/common';
import { ICreatedUserDTO } from 'src/Core/DTOs/ICreateUserDTO';
import { PrismaClientService } from '../../prisma-client/prisma-client.service';

@Injectable()
export class UserRepositoryService {
  constructor(private readonly prismaClient: PrismaClientService) {}

  async register(user: ICreatedUserDTO) {
    const chechUserAlreadyExist = await this.findByEmail(user.email);

    if (chechUserAlreadyExist) {
      throw new Error(`This user ${user.email} already exist`);
    }

    await this.prismaClient.user.create({ data: user });
  }

  async findByEmail(email: string) {
    return await this.prismaClient.user.findUnique({
      where: {
        email,
      },
    });
  }
}
