/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { CommandService } from 'nestjs-command';
import { AppModule } from './app/app.module';

async function bootstrap() {
	const app = await NestFactory.createApplicationContext(AppModule, {
		logger: ['log', 'error', 'warn', 'debug', 'verbose'],
	});

	const commandService = app.get(CommandService);
	await commandService.exec();

	await app.close();
}

bootstrap();
