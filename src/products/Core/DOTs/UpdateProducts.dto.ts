import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNumber, IsInt } from 'class-validator';

@InputType()
export class UpdateProductDTO {
  @Field({ nullable: true })
  @IsString()
  name: string;

  @Field({ nullable: true })
  @IsString()
  image: string;

  @Field({ nullable: true })
  @IsNumber()
  stock: number;

  @Field({ nullable: true })
  @IsInt()
  classification?: number;

  @Field({ nullable: true })
  @IsInt()
  sold: number;

  @Field({ nullable: true })
  @IsInt()
  interested: number;
}
