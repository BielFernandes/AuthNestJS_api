import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { SellersModule } from './sellers/sellers.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    OrderModule,
    ConfigModule,
    ProductModule,
    SellersModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})
export class AppModule { }
