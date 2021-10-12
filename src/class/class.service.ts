import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ability } from 'src/common/constants';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class, ClassDocument } from './schemas/class.schema';

@Injectable()
export class ClassService {
  constructor(@InjectModel(Class.name) private ClassModel: Model<ClassDocument>) {}
  async create(classToCreate: CreateClassDto) {
    // Check class doesn't already exist
    if (await this.ClassModel.exists({ name: classToCreate.name })) {
      await this.ClassModel.findOneAndReplace({ name: classToCreate.name }, classToCreate);
      console.log(`Replaced Class ${classToCreate.name}`);
      return;
    }
    const newClass = new this.ClassModel(classToCreate);
    console.log(`Inserted Class ${classToCreate.name}`);
    return newClass.save();
  }

  findAll() {
    return `This action returns all class`;
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
