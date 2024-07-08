import { IsDateString, IsDefined, IsNumber } from 'class-validator';

export class CreateOrderDto {
  status: 'AWAITING_PAYMENT';

  user_id: number;

  @IsDefined()
  @IsDateString()
  delivery_date: Date;

  @IsDefined()
  @IsNumber()
  value: number;

  @IsDefined()
  @IsNumber({}, { each: true })
  orderProducts: number[];
}
