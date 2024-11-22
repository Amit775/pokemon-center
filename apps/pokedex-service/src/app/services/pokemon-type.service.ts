import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonType } from '../entities/pokemon-type.entity';

@Injectable()
export class PokemonTypeService {
	constructor(
		@InjectRepository(PokemonType)
		private readonly pokemonTypeRepository: Repository<PokemonType>,
	) {}

	findAll(): Promise<PokemonType[]> {
		return this.pokemonTypeRepository.find();
	}

	findOne(id: number): Promise<PokemonType> {
		return this.pokemonTypeRepository.findOne({ where: { id } });
	}
}
