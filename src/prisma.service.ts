import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    console.log("Connect!")
    await this.$connect();
  }

  async onModuleDestroy() {
    console.log("Disconnect!")
    await this.$disconnect();
  }
}