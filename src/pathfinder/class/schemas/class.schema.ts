import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IBoost } from 'src/common/models/Boost.model';

export type ClassDocument = Document & Class;

@Schema()
export class Class {
  @Prop()
  name: string;
  @Prop({ default: 0 })
  hp: number;

  @Prop()
  boosts: IBoost[];
}

export const ClassSchema = SchemaFactory.createForClass(Class);
