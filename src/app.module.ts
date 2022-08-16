import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { ProductsModule } from './products/products.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthenticationService } from './auth/authentication/authentication.service';
import { AuthenticationController } from './auth/authentication/authentication.controller';
import { UserRepositoriesService } from './repositories/prisma/user-repositories/user-repositories.service';

@Module({
  imports: [
    PrismaModule,
    ProductsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController, AuthenticationController],
  providers: [AppService, PrismaService, AuthenticationService, UserRepositoriesService],
})
export class AppModule {}
