import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('fibonacci/:index')
  getFibonacci(@Param('index') index: number): number {
    return this.appService.getFibonacci(index);
  }
}
