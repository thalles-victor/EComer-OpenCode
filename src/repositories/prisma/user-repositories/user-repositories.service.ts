import { Injectable } from '@nestjs/common';
import { IUserDTO } from 'src/auth/Core/DTOs/IUserDTO';
import { IUserEntity } from 'src/auth/Core/Entities/IUserEntity';
import { PrismaService } from '../../../prisma/prisma.service';
import { IUserRepository } from './Contracts/IUserRepository';

@Injectable()
export class UserRepositoriesService implements IUserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async register(user: IUserDTO): Promise<boolean> {
    const userAlreadyExsit = await this.prismaService.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (userAlreadyExsit) {
      return !!!userAlreadyExsit;
    }

    return !!(await this.prismaService.user.create({ data: user }));
  }

  async getAll(): Promise<IUserEntity[]> {
    const users = await this.prismaService.user.findMany();

    return users;
  }

  async getById(id: string): Promise<IUserEntity> {
    const user = await this.prismaService.user.findUnique({ where: { id } });

    if (!!!user) {
      throw new Error('This user not exist');
    }

    return user;
  }

  async getByEmail(email: string): Promise<IUserEntity> {
    const user = await this.prismaService.user.findUnique({ where: { email } });

    if (!!!user) {
      throw new Error('This user not exist');
    }

    return user;
  }
}
