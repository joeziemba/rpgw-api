import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  async create(@Body() createCharacterDto: CreateCharacterDto) {
    return await this.characterService.create(createCharacterDto);
  }

  @Get()
  async findAll() {
    return await this.characterService.findAll();
  }

  @Get('user/:userid')
  async findAllForUser(@Param('userid') userId: string) {
    return await this.characterService.findAllForUser(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.characterService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCharacterDto: UpdateCharacterDto) {
    return this.characterService.update(+id, updateCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterService.remove(+id);
  }
}
