import { IsInt, IsString } from "class-validator";

export class CreateProductDto {
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
