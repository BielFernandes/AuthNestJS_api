import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
type FindAllOrdersType = {
  where?: Prisma.OrderWhereInput;
  include?: Prisma.OrderInclude;
  skip?: number;
  take?: number;
  select?: Prisma.OrderSelectScalar;
};

type FindOneOrderType = {
  where: Prisma.OrderWhereUniqueInput;
  include?: Prisma.OrderInclude;
};

type DeleteOrderType = {
  where: Prisma.OrderWhereUniqueInput,
  include?: Prisma.OrderInclude
  select?: Prisma.OrderSelect
}

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async findAll(conditions: FindAllOrdersType) {
    return await this.prisma.order.findMany(conditions);
  }

  async findOne(conditions: FindOneOrderType) {
    return await this.prisma.order.findUnique(conditions);
  }

  async create({ data }: Prisma.OrderCreateArgs) {
    return await this.prisma.order.create({ data });
  }

  async update(orderId: number, order: Prisma.OrderUpdateInput) {
    return await this.prisma.order.update({
      where: { id: orderId },
      data: { ...order },
    });
  }

  async destroy(conditions : DeleteOrderType){
    return await this.prisma.order.delete(conditions)
  }

  async count(conditions: Prisma.OrderCountArgs) {
    return await this.prisma.order.count(conditions);
  }
}
