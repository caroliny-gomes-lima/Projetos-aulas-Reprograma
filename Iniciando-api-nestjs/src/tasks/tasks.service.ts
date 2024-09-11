//A lógica dos códigos sempre vai estar na service
import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable() //decorator avisando que a estrutura abaixo é uma classe injetavel
export class TasksService {
  private tasks: Task[] = [];

  createTask(titulo: string, descricao: string): Task {
    const newTTask = new Task(titulo, descricao);
    this.tasks.push(newTTask);
    return newTTask;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTaskById(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
