import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

type FindAllOrderProductType = {
  where?: Prisma.OrderProductWhereInput;
  include?: Prisma.OrderProductInclude;
  skip?: number;
  take?: number;
  select?: Prisma.OrderProductSelectScalar;
};

type FindOneOrderProductType = {
  where: Prisma.OrderProductWhereUniqueInput;
  include?: Prisma.OrderProductInclude;
};

@Injectable()
export class OrderProductService {
  constructor(private prismaService : PrismaService){
    this.prismaService = prismaService
  }


  async findAll(conditions : FindAllOrderProductType){
    return await this.prismaService.orderProduct.findMany(conditions)
  }

  async findOne(conditions : FindOneOrderProductType){
    return await this.prismaService.orderProduct.findUnique(conditions)
  }

  async create(data : Prisma.OrderProductCreateArgs){
    return await this.prismaService.orderProduct.create(data)
  }

  async update(data: Prisma.OrderProductUpdateArgs){
    return await this.prismaService.orderProduct.update(data)
  }

  async delete(data: Prisma.OrderProductDeleteArgs){
    return await this.prismaService.orderProduct.delete(data)
  }
}
