import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(userId, body) {
    const { post } = body
    const query = this.prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        userId: userId
      }
    })
    return query;
  }

  findAll(userId: number) {
    const query = this.prisma.post.findMany({
      where: {
        userId: userId
      }
    })

    return query;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} post`;
  // }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
