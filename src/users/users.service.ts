import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

type FindAllUserType = {
  where?: Prisma.UserWhereInput;
  include?: Prisma.UserInclude;
  skip?: number;
  take?: number;
  select?: Prisma.UserSelectScalar;
};

type FindOneUserType = {
  where: Prisma.UserWhereUniqueInput;
  include?: Prisma.UserInclude;
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(conditions: FindAllUserType) {
    return await this.prisma.user.findMany(conditions);
  }

  async findOne(conditions: FindOneUserType) {
    return await this.prisma.user.findUnique(conditions);
  }

  async create(user: Prisma.UserCreateArgs) {
    return await this.prisma.user.create({
      data: {
        ...user.data,
        full_name: `${user.data.first_name} ${user.data.last_name}`,
      },
    });
  }

  async update(userId: number, user: Prisma.UserUpdateArgs) {
    return await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: { ...user },
    });
  }

  async delete(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
