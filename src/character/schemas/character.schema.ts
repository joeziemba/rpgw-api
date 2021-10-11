import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CharacterDoc = Character & Document;

@Schema()
export class Character {
  @Prop({ immutable: true, default: new Date() })
  createdAt: Date;
  @Prop({ default: new Date() })
  updatedAt: Date;

  @Prop({ required: true })
  name: string;

  @Prop(
    raw({
      str: { type: Number, default: 10 },
      dex: { type: Number, default: 10 },
      con: { type: Number, default: 10 },
      int: { type: Number, default: 10 },
      wis: { type: Number, default: 10 },
      cha: { type: Number, default: 10 },
    }),
  )
  abilities: Record<string, number>;

  @Prop(
    raw({
      name: { type: String },
      id: { type: String },
    }),
  )
  class: Record<string, any>;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
