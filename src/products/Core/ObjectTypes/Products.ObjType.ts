import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export abstract class ProductsOBJType {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field()
  stock: number;

  @Field()
  classification: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
