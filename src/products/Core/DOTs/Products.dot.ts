import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  IsOptional,
  IsInt,
  Min,
  Max,
  IsNotEmpty,
} from 'class-validator';

@InputType()
export class CreateProductDTO {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString({ message: 'Image is a string' })
  image: string;

  @Field()
  @IsInt()
  stock: number;

  @Field()
  @IsInt()
  price: number;

  @Field({ nullable: true })
  @IsInt()
  @IsOptional()
  @Min(0, { message: 'Min value is 0' })
  @Max(5, { message: 'Max value is 5' })
  classification: number;

  @Field()
  @IsInt()
  @IsOptional()
  sold: number;

  @Field({ nullable: true })
  @IsInt()
  @IsOptional()
  interested: number;
}
