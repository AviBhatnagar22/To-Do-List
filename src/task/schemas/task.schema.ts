import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({versionKey: false})
export class Task {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
