import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassModule } from '../pathfinder/class/class.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env'],
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@rpgw-dev.4dcel.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    ),
    ClassModule,
  ],
  controllers: [],
  providers: [],
})
export class SeederModule {}
