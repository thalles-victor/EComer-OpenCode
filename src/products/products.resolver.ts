import { Resolver, Query, Mutation, Args, ResolveField } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { ProductsOBJType } from './Core/ObjectTypes/Products.ObjType';
import { ProductsEntity } from './Core/Entities/Product.entity';
import { CreateProductDTO } from './Core/DOTs/Products.dot';
import { UpdateProductDTO } from './Core/DOTs/UpdateProducts.dto';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [ProductsOBJType])
  async getAllProducts(): Promise<ProductsEntity[]> {
    return await this.productsService.findAllProducts();
  }

  @Query(() => ProductsOBJType)
  async getProductById(@Args('productId') productId: string) {
    return await this.productsService.getProductById(productId);
  }

  @Mutation(() => ProductsOBJType)
  async createProduct(
    @Args('dataProducts') dataProducts: CreateProductDTO,
  ): Promise<ProductsEntity> {
    return this.productsService.createProduct(dataProducts);
  }

  @Mutation(() => ProductsOBJType)
  async updateProduct(
    @Args('productTargetId') productTargetId: string,
    @Args('dataUpdated') dataUpdated: UpdateProductDTO,
  ) {
    return this.productsService.updateProduct(productTargetId, dataUpdated);
  }

  @Mutation(() => ProductsOBJType)
  async deletProduct(@Args('productTargetId') productTargetId: string) {
    return this.productsService.deletProductById(productTargetId);
  }
}
