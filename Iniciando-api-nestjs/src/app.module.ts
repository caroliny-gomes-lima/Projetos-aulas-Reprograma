import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';

/*
* @Module é um decorator que está indicando que a estrutura abeixo 
  é um modulo e AppModule é um objeto de configuração que vai definir 
  uma estrutura de modulos.

* Decorator é como uma anotation em java, ou seja,
  um decorator é um metadado em que sua estrutura sempre possui um "@"
  e serve para indicar o comportamento da estrutura
*/
@Module({
  imports: [], //importação de outros modulos(pastas, diretórios)
  controllers: [AppController, TasksController], //lista de controlers que serão utilizado na aplicação
  providers: [AppService, TasksService], //Os provedores que serão registrados nos modules(provedores são services)
  //nos providers também é feita a "injeção de componentes"
})
export class AppModule {}
