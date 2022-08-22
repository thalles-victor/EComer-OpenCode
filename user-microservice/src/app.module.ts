import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRepositoryService } from './infra/repository/user-repository/user-repository.service';
import { PrismaClientService } from './infra/prisma-client/prisma-client.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserRepositoryService, PrismaClientService],
})
export class AppModule {}
