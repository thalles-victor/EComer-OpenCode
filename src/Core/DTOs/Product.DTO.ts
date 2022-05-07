import { IsString, IsNumber } from 'class-validator';
export class CreateProductDTO {
  @IsString()
  name: string;

  @IsString()
  image: string;

  @IsNumber()
  stock: number;

  @IsNumber()
  classification: number;
}
