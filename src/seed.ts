import { NestFactory } from '@nestjs/core';
import { ClassSeeder } from './class/class.seeder';
import { SeederModule } from './seeder.module';

async function bootstrap() {
  NestFactory.createApplicationContext(SeederModule)
    .then(async (appContext) => {
      const seeder = appContext.get(ClassSeeder);
      await seeder
        .seed()
        .then(() => {})
        .catch((error) => {
          throw error;
        })
        .finally(() => appContext.close());
    })
    .catch((error) => {
      throw error;
    });
}
bootstrap();
