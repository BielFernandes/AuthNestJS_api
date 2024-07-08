import { IsString, IsOptional } from 'class-validator';

export class OrderParamsDto {
  @IsString()
  @IsOptional()
  perPage: string;

  @IsString()
  @IsOptional()
  page: string;
}
