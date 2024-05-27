import { IsNotEmpty, IsString } from "class-validator";
import { IsEmailUnique } from "src/dtos/UniqueEmailValidator.dto";

export class CreateUserDto{

    @IsNotEmpty()
    @IsString()
    full_name: string

    @IsNotEmpty()
    @IsString()
    // @IsEmailUnique({message: 'This email is already taken.'})
    email: string

    @IsNotEmpty()
    @IsString()
    password: string

}