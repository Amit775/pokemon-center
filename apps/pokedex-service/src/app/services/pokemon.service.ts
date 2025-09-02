import { Injectable } from '@nestjs/common';
import { Pokemon } from '@pokemon-center/shared-entities';
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
				moves: {
					include: {
						move: {
							include: {
								type: true,
								damageClass: true,
							},
						},
					},
				},
				abilities: {
					include: {
						ability: true,
					},
				},
				stats: {
					include: {
						stat: true,
					},
				},
			},
		});

		return pokemon.map((p) => ({
			...p,
			types: p.types.map((t) => t.type),
			moves: p.moves.map((m) => m.move),
			abilities: p.abilities.map((a) => a.ability),
			stats: p.stats.map((s) => ({
				...s.stat,
				baseStat: s.baseStat,
			})),
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
				moves: {
					include: {
						move: {
							include: {
								type: true,
								damageClass: true,
							},
						},
					},
				},
				abilities: {
					include: {
						ability: true,
					},
				},
				stats: {
					include: {
						stat: true,
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
			moves: pokemon.moves.map((m) => m.move),
			abilities: pokemon.abilities.map((a) => a.ability),
			stats: pokemon.stats.map((s) => ({
				...s.stat,
				baseStat: s.baseStat,
			})),
		};
	}
}
