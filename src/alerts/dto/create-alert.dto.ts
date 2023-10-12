import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAlertDto {
  @IsString()
  @ApiProperty()
  user: string; 

  @IsString()
  @ApiProperty()
  message: string;

  @IsBoolean()
  @ApiProperty()
  isRead: boolean;

  @IsEnum(['Schedule'])
  @ApiProperty({ enum: ['Schedule'] })
  type: string;

  @IsOptional()
  @ApiProperty()
  data: any;
}
