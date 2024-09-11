//Controler é responsável pelas rotas
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //decorator avisando que a estrutura abaixo é um get
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //decorator avisando que a estrutura abaixo é um get
  getHello(): string {
    return this.appService.getHello();
  }
}
