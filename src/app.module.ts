import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OrderController } from './order/order.controller';
import { OrderModule } from './order/order.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, UsersModule, OrderModule, ConfigModule],
  controllers: [AppController, OrderController],
  providers: [AppService],
})
export class AppModule {}
