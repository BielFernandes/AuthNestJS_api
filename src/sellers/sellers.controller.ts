import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { CurrentUser } from 'src/auth/user.decorator';
import { CurrentUserDto } from 'src/dto/currentUserDto';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createSellerDto: CreateSellerDto, @CurrentUser() currentUser: CurrentUserDto
  ) {
    return this.sellersService.create(createSellerDto, currentUser);
  }

  @UseGuards(AuthGuard)
  @Get()
  find(@CurrentUser() currentUser: CurrentUserDto) {
    return this.sellersService.findOne(currentUser);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSellerDto: UpdateSellerDto) {
    return this.sellersService.update(id, updateSellerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sellersService.remove(id);
  }
}
