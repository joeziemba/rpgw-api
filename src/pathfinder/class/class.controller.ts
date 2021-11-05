import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  create(@Body() createClassDto: CreateClassDto) {
    return this.classService.create(createClassDto);
  }

  @Get()
  findAll() {
    return this.classService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string, @Res({ passthrough: true }) res: Response) {
  //   const requestedClass = this.classService.findOne(+id);
  //   if (!requestedClass) {
  //     res.status(HttpStatus.NO_CONTENT);
  //     res.statusText('No class with that ID found');
  //     return {};
  //   }

  //   return requestedClass;
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classService.update(+id, updateClassDto);
  }

  @Delete(':id')
  @HttpCode(501)
  remove(@Param('id') id: string) {
    return this.classService.remove(+id);
  }
}
