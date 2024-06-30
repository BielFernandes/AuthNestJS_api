import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailAlreadyRegisteredException extends HttpException {
  constructor() {
    super('Email ja esta cadastrado', HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
