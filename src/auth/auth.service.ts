import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Prisma, User } from '@prisma/client';
import { EmailAlreadyRegisteredException } from 'src/exceptions/emailExistsException';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register({ data }: Prisma.UserCreateArgs) {
    const userExists = this.usersService.findOne({
      where: { email: data.email },
    });

    if (userExists) {
      throw new EmailAlreadyRegisteredException();
    }
    const hashPass = await bcrypt.hash(data.password, 10);
    const user = await this.usersService.create({
      data: { ...data, password: hashPass },
    });
    return {
      user,
      token: this.generateJwt(user),
    };
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findOne({ where: { email } });

    if (!user) {
      throw new NotFoundException('Email ou senha invalidos');
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new NotFoundException('Email ou senha invalidos');
    }

    return {
      user,
      token: this.generateJwt(user),
    };
  }

  private generateJwt(user: User) {
    return this.jwtService.sign({ ...user, password: undefined });
  }
}
