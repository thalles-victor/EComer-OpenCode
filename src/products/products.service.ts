import { Injectable } from '@nestjs/common';
import { ApolloError } from 'apollo-server-errors';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDTO } from './Core/DOTs/Products.dot';
import { UpdateProductDTO } from './Core/DOTs/UpdateProducts.dto';
import { ProductsEntity } from './Core/Entities/Product.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllProducts(): Promise<ProductsEntity[]> {
    return await this.prismaService.products.findMany();
  }

  async createProduct(data: CreateProductDTO): Promise<ProductsEntity> {
    return await this.prismaService.products.create({ data });
  }

  async getProductById(id: string): Promise<ProductsEntity> {
    return await this.prismaService.products.findUnique({
      where: {
        id,
      },
    });
  }

  async updateProduct(
    productTargetId: string,
    dataUpdated: UpdateProductDTO,
  ): Promise<ProductsEntity> {
    const product = await this.getProductById(productTargetId);

    if (!product) {
      throw new ApolloError(`This product not exist`);
    }

    return await this.prismaService.products.update({
      where: {
        id: productTargetId,
      },
      data: dataUpdated,
    });
  }

  async deletProductById(productTargetId: string): Promise<ProductsEntity> {
    const product = await this.getProductById(productTargetId);
    if (!product) {
      throw new ApolloError('This Product not exist');
    }

    const deleted = await this.prismaService.products.delete({
      where: {
        id: productTargetId,
      },
    });
    return deleted;
  }
}
