import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({versionKey: false})
export class User {
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
