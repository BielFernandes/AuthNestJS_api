import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '14400s' },
    }),],
  controllers: [ProductController],
  providers: [ProductService, PrismaService],
})
export class ProductModule {}
