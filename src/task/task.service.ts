import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Task } from "./schemas/task.schema";
import * as mongoose from "mongoose";

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private taskModel: mongoose.Model<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskModel.find();
  }
}
