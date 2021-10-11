import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character, CharacterDoc } from './schemas/character.schema';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel(Character.name) private character: Model<CharacterDoc>,
  ) {}

  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const newChar = new this.character(createCharacterDto);
    return newChar.save();
  }

  async findAll() {
    return this.character.find({});
  }

  async findAllForUser(userId: string) {
    return this.character.find({ userId });
  }

  findOne(id: number) {
    return `This action returns a #${id} character`;
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
