/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { CommandFactory } from 'nestjs-command';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  await CommandFactory.run(AppModule, ['log', 'error', 'warn', 'debug', 'verbose']);
  
  await app.close();
}

bootstrap();
