import { IsInt, IsString } from "class-validator";

export class CreateSellerDto {
    @IsInt()
    sale_quantity: number

    @IsString()
    location: string
}
