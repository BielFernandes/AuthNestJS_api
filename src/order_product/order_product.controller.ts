import { Controller } from '@nestjs/common';
import { OrderService } from 'src/order/order.service';

@Controller('order-product')
export class OrderProductController {
  constructor(private orderService : OrderService){}

  async index(){
    return await this.orderService.findAll({})
  }

}
