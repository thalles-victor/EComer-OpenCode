import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

import { CreateProductDTO } from './Core/DTOs/Product.DTO';
import { Products } from './prisma/Entites/Products.Entity';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllProducts(): Promise<Products[]> {
    const all_products = await this.prismaService.products.findMany();
    return all_products;
  }

  async createProduct(data: CreateProductDTO): Promise<Products> {
    const { name, image, stock, classification } = data;
    return await this.prismaService.products.create({
      data: {
        name,
        image,
        stock,
        classification,
      },
    });
  }
}
