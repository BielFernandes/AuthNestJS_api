import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { User } from 'src/types/CurrentUser';

@Injectable()
export class SellersService {
  constructor(private prisma: PrismaService) {}

  findAll(){
    return this.prisma.seller.findMany();
  }

  findOne(user: User) {
    return this.prisma.seller.findUnique({
      where: {
        user_id: user.id
      }
    });
  }

  create(createSeller, user: User) {
    return this.prisma.seller.create({
      data: {
        ...createSeller,
        user_id: user.id
      }
    });
  }

  update(id: number, updateSellerDto: Prisma.SellerUpdateInput) {
    return this.prisma.seller.update({
      where: {
        id
      },
      data: updateSellerDto
    });
  }

  remove(id: number) {
    return this.prisma.seller.delete({
      where: {
        id
      }
    });
  }
}
