import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { OrderRequest } from './interfaces/request';
import { OrderService } from './order.service';
import { OrderParamsDto } from './dto/queries.dto';
import { CreateOrderDto } from './dto/createOrder.dto';
import { UpdateOrderDto } from './dto/updateOrderDto.dto';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @UseGuards(AuthGuard)
  @Get()
  async index(@Request() req: OrderRequest, @Query() queries: OrderParamsDto) {
    console.log('queries', queries);
    const page = Number(queries.page) || 1;

    const perPage = Number(queries.perPage) || 10;

    const searchCondition = {
      where: {
        user_id: req.user.id,
      },
    };
    const totalItems = await this.orderService.count(searchCondition);
    const totalPages = Math.floor(totalItems / perPage);
    const results = await this.orderService.findAll({
      ...searchCondition,
      skip: page * perPage,
      take: perPage,
    });

    return {
      page,
      perPage,
      totalItems,
      totalPages,
      results,
    };
  }

  @Get(':id')
  async show(@Param('id') id: number) {
    const order = await this.orderService.findOne({ where: { id } });

    if (!order) {
      throw new NotFoundException('Pedido nao existente');
    }
    return order;
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Request() req: OrderRequest, @Body() orderDto: CreateOrderDto) {
    orderDto.user_id == req.user.id;
    return await this.orderService.create({
      data: {
        ...orderDto,
      },
    });
  }


  @UseGuards(AuthGuard)
  @Put(":id")
  async update(@Request() req: OrderRequest, @Body() orderDto : UpdateOrderDto, @Param("id") id: string){
    return await this.orderService.update(Number(id), orderDto)
  }

  @UseGuards(AuthGuard)
  @Delete(":id")
  async delete(@Param("id") id: string){
    return await this.orderService.destroy({
      where: {
        id: Number(id)
      }
    })
  }
}
