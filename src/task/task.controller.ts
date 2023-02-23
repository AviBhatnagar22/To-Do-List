import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
    return await this.taskService.create(task);
  }

  @Get(':id')
  async findTaskById(@Param('id') id: string): Promise<Task> {
    return await this.taskService.findById(id);
  }
}
