import { Injectable } from '@nestjs/common';
import { Pokemon } from '../entities/pokemon.entity';
import { PrismaService } from './prisma.service';

@Injectable()
export class PokemonService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<Pokemon[]> {
		const pokemon = await this.prisma.pokemon.findMany({
			include: {
				types: {
					include: {
						type: true,
					},
				},
			},
		});

		return pokemon.map((p) => ({
			...p,
			types: p.types.map((t) => t.type),
		}));
	}

	async findOne(id: number): Promise<Pokemon | null> {
		const pokemon = await this.prisma.pokemon.findUnique({
			where: { id },
			include: {
				types: {
					include: {
						type: true,
					},
				},
			},
		});

		if (!pokemon) {
			return null;
		}

		return {
			...pokemon,
			types: pokemon.types.map((t) => t.type),
		};
	}
}
