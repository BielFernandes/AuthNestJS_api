import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class loginDto{
    @IsNotEmpty()
    @IsNumber()
    id: number

    @IsNotEmpty()
    @IsString()
    email: string
}