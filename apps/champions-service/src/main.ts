import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	// 3001, so this runs alongside pokedex-service on 3000 rather than fighting it for the port.
	const port = process.env.CHAMPIONS_PORT || 3001;
	await app.listen(port);
	Logger.log(`⚡ Champions GraphQL API running on: http://localhost:${port}/graphql`);
}

bootstrap();
