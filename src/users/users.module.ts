import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { UniqueEmailValidator } from 'src/dtos/UniqueEmailValidator.dto';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UniqueEmailValidator],
  exports: [UsersService]
})
export class UsersModule {}
