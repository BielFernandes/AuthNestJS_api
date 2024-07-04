import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsInt, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsString()
    name: string

    @IsInt()
    price: number

    @IsInt()
    quantity: number

    @IsString()
    description: string
    
    @IsInt()
    discount: number
}
