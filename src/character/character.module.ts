import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { Character, CharacterSchema } from './schemas/character.schema';
import { Class, ClassSchema } from 'src/class/schemas/class.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Character.name, schema: CharacterSchema }]),
    MongooseModule.forFeature([{ name: Class.name, schema: ClassSchema }]),
  ],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
