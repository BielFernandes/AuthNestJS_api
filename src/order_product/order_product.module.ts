import { Module } from '@nestjs/common';
import { OrderProductService } from './order_product.service';
import { OrderProductController } from './order_product.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [OrderProductService, PrismaService],
  controllers: [OrderProductController]
})
export class OrderProductModule {}
