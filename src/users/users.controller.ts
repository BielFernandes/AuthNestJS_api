import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll() {
    const allUsers = await this.usersService.findAll({
      select: {
        id: true,
        email: true,
        first_name: true,
        last_name: true,
        full_name: true,
        password: false,
        created_at: true,
        updated_at: true,
      },
    });
    return allUsers;
  }

  @Get(':email')
  async findOne(@Param('email') user_email: string) {
    const findOne = await this.usersService.findOne({
      where: { email: user_email },
    });

    return findOne;
  }

  @Post()
  async create(@Body() data: CreateUserDto) {
    const createUser = await this.usersService.create({ data: { ...data } });
    return createUser ? 'User created successfully.' : 'Error occured.';
  }
}
