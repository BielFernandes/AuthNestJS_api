import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto.dto';
import { loginDto } from './dto/loginDto.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async getAll() {
    const allUsers = await this.usersService.getAllUsers()
    return allUsers
  }

  @Get(':email')
  async findOne(@Param('email') user_email:string) {
    const findOne = await this.usersService.findOne(user_email)

    return findOne
  }

  @Post()
  async create(@Body() data: CreateUserDto) {
    const createUser = await this.usersService.create(data)
    return createUser ? 'User created successfully.' : 'Error occured.'
  }
}
