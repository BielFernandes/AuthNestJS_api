import { IsNumber, IsOptional } from 'class-validator';

export class UpdateOrderDto {
  
  @IsOptional()
  status: 'AWAITING_PAYMENT';

  user_id: number;

  @IsOptional()
  delivery_date: Date;

  @IsOptional()
  @IsNumber()
  value: number;

  @IsOptional()
  @IsNumber({}, { each: true })
  orderProducts: number[];
}
