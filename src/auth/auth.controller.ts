import {
  Controller,
  Post,
  UseGuards,
  Get,
  Res,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/requests.dto';
import { Response } from 'express';
import { RegisterUserDto } from './dto/registerUserDto.dto';
import { AuthGuard } from './auth.guard';
import { CurrentUser } from './user.decorator';
import { CurrentUserDto } from 'src/dto/currentUserDto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginUserDto: LoginRequestDto, @Res() res: Response) {
    const { user, token } = await this.authService.login(
      loginUserDto.email,
      loginUserDto.password,
    );
    res.setHeader('Authentication', `Bearer ${token}`);
    res.status(200).send(user);
  }

  @Post('register')
  async register(
    @Body() registerUserDto: RegisterUserDto,
    @Res() res: Response,
  ) {
    const { token, user } = await this.authService.register({
      data: {
        ...registerUserDto,
      },
    });

    res.setHeader('Authorization', `Bearer ${token}`);
    res.status(200).json({ ...user, password: undefined });
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getProfile(@CurrentUser() currentUser: CurrentUserDto) {
    return currentUser;
  }
}
