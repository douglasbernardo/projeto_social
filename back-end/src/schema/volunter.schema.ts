import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Volunter extends Document {
  @Prop()
  name: string;

  @Prop()
  birthDate: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  city: string;

  @Prop()
  areasIWillHelp: string[];

  @Prop()
  howDidYouKnowUs: string;
}

export const volunterSchema = SchemaFactory.createForClass(Volunter);