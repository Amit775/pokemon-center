import { Client } from '@elastic/elasticsearch';
import { PromiseExecutor, logger } from '@nx/devkit';
import { PokedexIndex, PokemonDocument } from '@pokemon-center/infra-pokedex-index';
import { Prisma, PrismaClient } from '@prisma/client';
import { PokedexSyncExecutorSchema } from './schema';

type PokemonWithRelations = Prisma.PokemonGetPayload<{
	include: {
		stats: {
			include: {
				stat: true;
			};
		};
		types: {
			include: {
				type: true;
			};
		};
		abilities: {
			include: {
				ability: true;
			};
		};
		moves: {
			include: {
				move: {
					include: {
						type: true;
						damageClass: true;
					};
				};
			};
		};
	};
}>;

const runExecutor: PromiseExecutor<PokedexSyncExecutorSchema> = async (options) => {
	logger.log('Executor ran for PokedexSync', options);

	const synchronizer = new PokedexSynchronizerService(
		PokemonTransformerService.transformPokemon,
		new PokedexIndex(new Client({ node: options.elasticsearchUrl })),
	);

	await synchronizer.synchronize();

	return { success: true };
};

export default runExecutor;

class PokedexSynchronizerService {
	private readonly prisma = new PrismaClient();

	constructor(
		private readonly transform: (pokemon: PokemonWithRelations) => PokemonDocument,
		private readonly index: PokedexIndex,
	) {}

	async synchronize(): Promise<void> {
		try {
			logger.log('Starting Pokedex synchronization process...');

			// Step 1: Fetch all Pokemon data with relations
			logger.log('Fetching Pokemon data from database...');
			const pokemonData = await this.fetchAllPokemon();
			logger.log(`Fetched ${pokemonData.length} Pokemon records`);

			// Step 2: Transform data to Elasticsearch format
			logger.log('Transforming data to Elasticsearch format...');
			const documents = pokemonData.map(this.transform);
			logger.log(`Transformed ${documents.length} documents`);

			// Step 3: Ensure Elasticsearch index exists and is clean
			logger.log('Preparing Elasticsearch index...');
			await this.index.ensureIndexExists();

			// Step 4: Bulk index all documents
			logger.log('Indexing documents into Elasticsearch...');
			await this.index.bulkIndex(documents);

			// Step 5: Get final stats
			const stats = await this.index.getIndexStats();
			logger.log(`Synchronization completed successfully. Index stats:`, stats);
		} catch (error) {
			logger.error(`Synchronization failed: ${error.message}`);
			throw error;
		} finally {
			await this.prisma.$disconnect();
		}
	}

	private async fetchAllPokemon(): Promise<PokemonWithRelations[]> {
		return await this.prisma.pokemon.findMany({
			orderBy: { id: 'asc' },
			include: {
				stats: {
					include: {
						stat: true,
					},
				},
				types: {
					include: {
						type: true,
					},
				},
				abilities: {
					include: {
						ability: true,
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
			},
		});
	}

	async getSyncStatus(): Promise<{ status: string; message: string }> {
		try {
			const stats = await this.index.getIndexStats();
			const documentCount = stats.indices?.pokedex?.total?.docs?.count || 0;

			return {
				status: 'healthy',
				message: `Index contains ${documentCount} Pokemon documents`,
			};
		} catch (error) {
			return {
				status: 'error',
				message: `Failed to get sync status: ${error.message}`,
			};
		}
	}
}

class PokemonTransformerService {
	static transformPokemon(pokemon: PokemonWithRelations): PokemonDocument {
		return {
			id: `pokemon:${pokemon.id}`,
			pokedex_number: pokemon.id,
			name: `${pokemon.identifier}`,
			slug: `${pokemon.identifier}`,
			stats: pokemon.stats.reduce(
				(stats, pokemonToStat) => ({
					...stats,
					[pokemonToStat.stat.identifier]: pokemonToStat.base_stat,
				}),
				{} as Record<keyof PokemonDocument['stats'], number>,
			),
			types: pokemon.types.map((pokemonToType) => ({
				id: `type:${pokemonToType.type.id}`,
				name: pokemonToType.type.identifier,
			})),
			abilities: pokemon.abilities.map((pokemonToAbility) => ({
				id: `ability:${pokemonToAbility.ability.id}`,
				name: pokemonToAbility.ability.identifier,
				is_hidden: pokemonToAbility.is_hidden === 1,
			})),
			moves: pokemon.moves.map((pokemonToMove) => ({
				id: `move:${pokemonToMove.move.id}`,
				name: pokemonToMove.move.identifier,
				power: pokemonToMove.move.power,
				type: {
					id: `type:${pokemonToMove.move.type.id}`,
					name: pokemonToMove.move.type.identifier,
				},
				damage_class: {
					id: `damage_class:${pokemonToMove.move.damageClass.id}`,
					name: pokemonToMove.move.damageClass.identifier,
				},
			})),
		};
	}
}
