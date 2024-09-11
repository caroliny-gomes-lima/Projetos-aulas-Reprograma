import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {} //"TasksService" é injetavel. foi injetado no constructor

  //C do crud
  @Post('criar')
  createTastk(@Body() body: { titulo: string; descricao: string }) {
    //o "@Body()" é para avisar que vai vir um body(que vai ter um body)
    const task = this.taskService.createTask(body.titulo, body.descricao);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Task criada co sucesso',
      data: task,
    };
  }

  @Get()
  getAllTasks() {
    const tasks = this.taskService.getAllTasks();
    return {
      statusCode: HttpStatus.OK,
      message: 'Todas as Tasks retornadas com sucesso',
      data: tasks,
    };
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    //o "@Param()" a requisição está esperando um parametro id(eu estou esperando um parametro 'id')
    const task = this.taskService.getTaskById(id);
    if (!task) {
      throw new HttpException('Task não encontrada', HttpStatus.NOT_FOUND);
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'Todas as Tasks retornadas com sucesso',
      data: task,
    };
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    //o "@Param()" a requisição está esperando um parametro id(eu estou esperando um parametro 'id')
    this.taskService.deleteTaskById(id);
    return {
      statusCode: HttpStatus.NO_CONTENT,
      message: 'Task deletada com sucesso',
    };
  }
}
