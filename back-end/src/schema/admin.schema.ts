import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Admin extends Document {
  @Prop()
  name: string;
  @Prop()
  pass: string;
}

export const adminSchema = SchemaFactory.createForClass(Admin);