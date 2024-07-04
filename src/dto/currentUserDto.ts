import { IsDate, IsEmail, IsInt, IsString } from "class-validator";

export class CurrentUserDto {
    @IsInt()
    id: number

    @IsString()
    first_name: string

    @IsString()
    last_name: string

    @IsEmail()
    @IsString()
    email: string

    @IsDate()
    created_at: string
    updated_at: string
}
