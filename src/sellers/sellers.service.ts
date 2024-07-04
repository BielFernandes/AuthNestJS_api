import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { CurrentUserDto } from 'src/dto/currentUserDto';

@Injectable()
export class SellersService {
  constructor(private prisma: PrismaService) {}

  create(createSellerDto: CreateSellerDto, user: CurrentUserDto) {
    return this.prisma.seller.create({
      data: {
        ...createSellerDto,
        user_id: user.id
      }
    })
  }

  find(user: CurrentUserDto) {
    return this.prisma.seller.findUnique({
      where: {
        user_id: user.id
      }
    })
  }

  update(id: number, updateSellerDto) {
    return this.prisma.seller.update({
      where: {
        id
      },
      data: updateSellerDto
    })
  }

  remove(id: number) {
    return this.prisma.seller.delete({
      where: {
        id
      }
    })
  }
}
