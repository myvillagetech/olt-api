import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/hari')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getmessage')
  getHello(): string {
    return this.appService.getHello();
  }
}
