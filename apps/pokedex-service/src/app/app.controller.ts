import { Controller, Get } from '@nestjs/common';

import { Observable, of } from 'rxjs';
import { AppService } from './app.service';
import { Pokemon } from './entities/pokemon.entity';

const env: 'dev' | 'test' | 'prod' = 'dev';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	public insertPokemons(): Observable<Pokemon[]> {
		switch (env) {
			case 'dev':
			case 'test':
				return of([]);
			default:
				break;
		}

		if (['dev', 'test'].includes(env)) return of([]);

		return this.appService.insertPokemons();
	}
}
