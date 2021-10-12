import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Class, ClassDocument } from 'src/class/schemas/class.schema';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character, CharacterDoc } from './schemas/character.schema';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel(Character.name) private CharacterModel: Model<CharacterDoc>,
    @InjectModel(Class.name) private ClassModel: Model<ClassDocument>,
  ) {}

  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const newChar = new this.CharacterModel(createCharacterDto);
    return newChar.save();
  }

  async findAll() {
    return this.CharacterModel.find({});
  }

  async findAllForUser(userId: string) {
    return this.CharacterModel.find({ userId });
  }

  findOne(id: string) {
    return this.CharacterModel.findById(id);
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }

  async assignClass(updateCharacterDto: UpdateCharacterDto) {
    const characterToUpdate = await this.CharacterModel.findById(updateCharacterDto.characterId);
    const oldClass = characterToUpdate.class;
    const classToAssign = await this.ClassModel.findById(updateCharacterDto.classId);

    // Remove old class boosts
    characterToUpdate.boosts = characterToUpdate.boosts.filter(
      (boost) => boost.source !== oldClass.name,
    );

    // Add new class boosts
    characterToUpdate.boosts = characterToUpdate.boosts.concat(classToAssign.boosts);
    characterToUpdate.class = {
      id: classToAssign.id,
      name: classToAssign.name,
      hp: classToAssign.hp,
    };

    // TODO: Calculate stats
    characterToUpdate.updatedAt = new Date();
    return characterToUpdate.save();
  }
}
