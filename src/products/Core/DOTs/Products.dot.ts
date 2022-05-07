import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNumber, IsInt } from 'class-validator';

@InputType()
export class CreateProductDTO {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString({ message: 'Image is a string' })
  image: string;

  @Field()
  @IsNumber()
  stock: number;

  @Field({ nullable: true })
  @IsString()
  classification: number;

  @Field({ nullable: true })
  @IsInt()
  sold: number;

  @Field({ nullable: true })
  @IsInt()
  interested: number;
}
