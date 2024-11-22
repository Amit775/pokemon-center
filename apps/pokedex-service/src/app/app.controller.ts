import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Pokemon } from './entities/pokemon.entity';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	public insertPokemons(): Pokemon[] {
		return this.appService.insertPokemons();
	}
}
