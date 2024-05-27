import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/createUserDto.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async getAllUsers(){
        return await this.prisma.user.findMany({})
    }

    async findOne(email:string){
        return await this.prisma.user.findFirst({
            where: {
                email: email
            }
        })
    }

    async create(data: CreateUserDto){
        return await this.prisma.user.create({
            data: {
                full_name: data.full_name,
                email: data.email,
                password: data.password
            }
        })
    }

    async findByUserEmail(email: any){
        return await this.prisma.user.findFirst({
            where:{
                email: email
            }
        })
    }
}
