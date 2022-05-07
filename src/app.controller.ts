import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProductDTO } from './Core/DTOs/Product.DTO';
import { Products } from './prisma/Entites/Products.Entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Products[]> {
    return this.appService.getAllProducts();
  }

  @Post()
  createProducts(@Body() data: CreateProductDTO) {
    return this.appService.createProduct(data);
  }
}
