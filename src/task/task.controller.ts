import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './schemas/task.schema';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get()
  async getAllTasks(): Promise<Task[]> {
    return await this.taskService.findAll();
  }

  @Post()
  async createTask(@Body() task): Promise<Task> {
    console.log("Hello world")
    return await this.taskService.create(task);
  }
}
