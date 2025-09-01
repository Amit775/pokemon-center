import { Injectable } from '@nestjs/common';
import { Pokemon } from './entities/pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonType } from './entities/pokemon-type.entity';
import { MainClient, NamedAPIResourceList } from 'pokenode-ts';
import { forkJoin, from, map, merge, Observable, switchMap } from 'rxjs';

@Injectable()
export class AppService {
	constructor(
		private readonly client: MainClient,
		@InjectRepository(Pokemon) private readonly pokemonRepo: Repository<Pokemon>,
		@InjectRepository(PokemonType) private readonly pokemonTypesRepo: Repository<PokemonType>,

	) { }

	const numbers = Array.from({ length: 151 }, (_, i) => i + 1);

	public insertPokemons(): Observable<Pokemon[]> {
		forkJoin(this.numbers.reduce((result, index) => ({ ...result, [`${index}`]: from(this.client.pokemon.getPokemonById(index)) }), {} as Record<string, Observable<Pokemon>)).pipe(

		)
	}
}
