import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Volunter extends Document {
  @Prop()
  name: string;

  @Prop()
  birthDate: string;

  @Prop()
  phone: string;

  @Prop()
  neighboorhood: string;

  @Prop()
  areahelped: string[];

  @Prop()
  knownWhere: string;
}

export const volunterSchema = SchemaFactory.createForClass(Volunter);