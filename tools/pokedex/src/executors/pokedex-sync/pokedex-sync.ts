import { PromiseExecutor, logger } from '@nx/devkit';
import { PokedexSyncExecutorSchema } from './schema';
import { PrismaClient } from '@prisma/client';
import { Client } from '@elastic/elasticsearch';
import { IndicesStatsResponse } from '@elastic/elasticsearch/lib/api/types';

export interface PokemonDocument {
	id: string;
	pokedex_number: number;
	name: string;
	slug: string;
	stats: {
		hp: number;
		attack: number;
		defense: number;
		'special-attack': number;
		'special-defense': number;
		speed: number;
	};
	types: Array<{
		id: string;
		name: string;
		slug: string;
	}>;
	abilities: Array<{
		id: string;
		name: string;
		slug: string;
		is_hidden: boolean;
	}>;
	moves: Array<{
		id: string;
		name: string;
		slug: string;
		power: number | null;
		type: {
			id: string;
			name: string;
		};
		damage_class: {
			id: string;
			name: string;
		};
	}>;
}

const runExecutor: PromiseExecutor<PokedexSyncExecutorSchema> = async (options) => {
	logger.log('Executor ran for PokedexSync', options);

	const synchronizer = new PokedexSynchronizerService(
		new PokemonTransformerService(),
		new PokedexElasticsearchService(new Client({ node: options.elasticsearchUrl })),
	);

	await synchronizer.synchronize();

	return { success: true };
};

export default runExecutor;

class PokedexElasticsearchService {
	private readonly indexName = 'pokedex';

	constructor(private readonly client: Client) {}

	async ensureIndexExists(): Promise<void> {
		try {
			const indexExists = await this.client.indices.exists({ index: this.indexName });

			if (indexExists) {
				logger.log(`Deleting existing index: ${this.indexName}`);
				await this.client.indices.delete({ index: this.indexName });
			}

			logger.log(`Creating index: ${this.indexName}`);
			await this.client.indices.create({
				index: this.indexName,
				mappings: {
					properties: {
						id: { type: 'keyword' },
						pokedex_number: { type: 'integer' },
						name: { type: 'text' },
						slug: { type: 'keyword' },
						stats: {
							properties: {
								hp: { type: 'integer' },
								attack: { type: 'integer' },
								defense: { type: 'integer' },
								'special-attack': { type: 'integer' },
								'special-defense': { type: 'integer' },
								speed: { type: 'integer' },
							},
						},
						types: {
							properties: {
								id: { type: 'keyword' },
								name: { type: 'text' },
								slug: { type: 'keyword' },
							},
						},
						abilities: {
							properties: {
								id: { type: 'keyword' },
								name: { type: 'text' },
								slug: { type: 'keyword' },
								is_hidden: { type: 'boolean' },
							},
						},
						moves: {
							properties: {
								id: { type: 'keyword' },
								name: { type: 'text' },
								slug: { type: 'keyword' },
								power: { type: 'integer' },
								type: {
									properties: {
										id: { type: 'keyword' },
										name: { type: 'text' },
									},
								},
								damage_class: {
									properties: {
										id: { type: 'keyword' },
										name: { type: 'text' },
									},
								},
							},
						},
					},
				},
			});

			logger.log(`Index ${this.indexName} created successfully`);
		} catch (error) {
			logger.error(`Error managing index: ${error.message}`);
			throw error;
		}
	}

	async bulkIndex(documents: PokemonDocument[]): Promise<void> {
		try {
			logger.log(`Starting bulk indexing of ${documents.length} documents`);

			const operations = documents.flatMap((doc) => [{ index: { _index: this.indexName, _id: doc.id } }, doc]);

			const result = await this.client.bulk({
				refresh: true,
				operations,
			});

			if (result.errors) {
				const errors = result.items.filter((item: any) => item.index?.error).map((item: any) => item.index.error);

				logger.error(`Bulk indexing errors: ${JSON.stringify(errors)}`);
				throw new Error(`Bulk indexing failed with ${errors.length} errors`);
			}

			logger.log(`Successfully indexed ${documents.length} documents`);
		} catch (error) {
			logger.error(`Error during bulk indexing: ${error.message}`);
			throw error;
		}
	}

	async getIndexStats(): Promise<IndicesStatsResponse> {
		try {
			return await this.client.indices.stats({ index: this.indexName });
		} catch (error) {
			logger.error(`Error getting index stats: ${error.message}`);
			throw error;
		}
	}
}

class PokedexSynchronizerService {
	private readonly prisma = new PrismaClient();

	constructor(
		private readonly transformer: PokemonTransformerService,
		private readonly elasticsearch: PokedexElasticsearchService,
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
			const documents = pokemonData.map((pokemon) => this.transformer.transformPokemon(pokemon));
			logger.log(`Transformed ${documents.length} documents`);

			// Step 3: Ensure Elasticsearch index exists and is clean
			logger.log('Preparing Elasticsearch index...');
			await this.elasticsearch.ensureIndexExists();

			// Step 4: Bulk index all documents
			logger.log('Indexing documents into Elasticsearch...');
			await this.elasticsearch.bulkIndex(documents);

			// Step 5: Get final stats
			const stats = await this.elasticsearch.getIndexStats();
			logger.log(`Synchronization completed successfully. Index stats:`, stats);
		} catch (error) {
			logger.error(`Synchronization failed: ${error.message}`);
			throw error;
		} finally {
			await this.prisma.$disconnect();
		}
	}

	private async fetchAllPokemon(): Promise<any[]> {
		return await this.prisma.pokemon.findMany({
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
			orderBy: {
				id: 'asc',
			},
		});
	}

	async getSyncStatus(): Promise<{ status: string; message: string }> {
		try {
			const stats = await this.elasticsearch.getIndexStats();
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
	transformPokemon(pokemon: any): PokemonDocument {
		// Transform stats into the expected format
		const stats = {
			hp: 0,
			attack: 0,
			defense: 0,
			'special-attack': 0,
			'special-defense': 0,
			speed: 0,
		};

		pokemon.stats.forEach((statRelation: any) => {
			const statName = statRelation.stat.slug;
			if (statName in stats) {
				stats[statName as keyof typeof stats] = statRelation.baseStat;
			}
		});

		// Transform types
		const types = pokemon.types.map((typeRelation: any) => ({
			id: `type:${typeRelation.type.slug}`,
			name: typeRelation.type.name,
			slug: typeRelation.type.slug,
		}));

		// Transform abilities
		const abilities = pokemon.abilities.map((abilityRelation: any) => ({
			id: `ability:${abilityRelation.ability.id}`,
			name: abilityRelation.ability.name,
			slug: abilityRelation.ability.slug,
			is_hidden: abilityRelation.isHidden,
		}));

		// Transform moves
		const moves = pokemon.moves.map((moveRelation: any) => ({
			id: `move:${moveRelation.move.id}`,
			name: moveRelation.move.name,
			slug: moveRelation.move.slug,
			power: moveRelation.move.power,
			type: {
				id: `type:${moveRelation.move.type.slug}`,
				name: moveRelation.move.type.name,
			},
			damage_class: {
				id: `damage_class:${moveRelation.move.damageClass.slug}`,
				name: moveRelation.move.damageClass.name,
			},
		}));

		return {
			id: `pokemon:${pokemon.id}`,
			pokedex_number: pokemon.id,
			name: pokemon.name,
			slug: pokemon.slug,
			stats,
			types,
			abilities,
			moves,
		};
	}
}
