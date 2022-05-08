import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsInt, Min, Max, IsOptional } from 'class-validator';

@InputType()
export class UpdateProductDTO {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  image: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  stock: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  price: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(5)
  classification?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  sold: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  interested: number;
}
