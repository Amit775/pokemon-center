import { PromiseExecutor } from '@nx/devkit';
import { PrismaClient } from '@prisma/client';
import { Client } from '@elastic/elasticsearch';
import { PokedexSynchronizerExecutorSchema } from './schema';

// PokemonDocument interface
interface PokemonDocument {
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

const runExecutor: PromiseExecutor<PokedexSynchronizerExecutorSchema> = async (options) => {
	const elasticsearchUrl = options.elasticsearchUrl || 'http://localhost:9200';
	const indexName = 'pokedex';

	const prisma = new PrismaClient();
	const elasticsearch = new Client({
		node: elasticsearchUrl,
	});

	try {
		console.log('Starting Pokedex synchronization process...');

		// Step 1: Fetch all Pokemon data with relations
		console.log('Fetching Pokemon data from database...');
		const pokemonData = await fetchAllPokemon(prisma);
		console.log(`Fetched ${pokemonData.length} Pokemon records`);

		// Step 2: Transform data to Elasticsearch format
		console.log('Transforming data to Elasticsearch format...');
		const documents = pokemonData.map((pokemon) => transformPokemon(pokemon));
		console.log(`Transformed ${documents.length} documents`);

		// Step 3: Ensure Elasticsearch index exists and is clean
		console.log('Preparing Elasticsearch index...');
		await ensureIndexExists(elasticsearch, indexName);

		// Step 4: Bulk index all documents
		console.log('Indexing documents into Elasticsearch...');
		await bulkIndex(elasticsearch, indexName, documents);

		// Step 5: Get final stats
		const stats = await getIndexStats(elasticsearch, indexName);
		console.log(`Synchronization completed successfully. Index stats:`, stats);

		return {
			success: true,
		};
	} catch (error) {
		console.error(`Synchronization failed: ${error.message}`);
		return {
			success: false,
			error: error.message,
		};
	} finally {
		await prisma.$disconnect();
	}
};

async function fetchAllPokemon(prisma: PrismaClient): Promise<any[]> {
	return await prisma.pokemon.findMany({
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

function transformPokemon(pokemon: any): PokemonDocument {
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

async function ensureIndexExists(client: Client, indexName: string): Promise<void> {
	try {
		const indexExists = await client.indices.exists({
			index: indexName,
		});

		if (indexExists) {
			console.log(`Deleting existing index: ${indexName}`);
			await client.indices.delete({
				index: indexName,
			});
		}

		console.log(`Creating index: ${indexName}`);
		await client.indices.create({
			index: indexName,
			body: {
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
			},
		});

		console.log(`Index ${indexName} created successfully`);
	} catch (error) {
		console.error(`Error managing index: ${error.message}`);
		throw error;
	}
}

async function bulkIndex(client: Client, indexName: string, documents: PokemonDocument[]): Promise<void> {
	try {
		console.log(`Starting bulk indexing of ${documents.length} documents`);

		const operations = documents.flatMap((doc) => [{ index: { _index: indexName, _id: doc.id } }, doc]);

		const result = await client.bulk({
			refresh: true,
			operations,
		});

		if (result.errors) {
			const errors = result.items.filter((item: any) => item.index?.error).map((item: any) => item.index.error);

			console.error(`Bulk indexing errors: ${JSON.stringify(errors)}`);
			throw new Error(`Bulk indexing failed with ${errors.length} errors`);
		}

		console.log(`Successfully indexed ${documents.length} documents`);
	} catch (error) {
		console.error(`Error during bulk indexing: ${error.message}`);
		throw error;
	}
}

async function getIndexStats(client: Client, indexName: string): Promise<any> {
	try {
		const stats = await client.indices.stats({
			index: indexName,
		});
		return stats;
	} catch (error) {
		console.error(`Error getting index stats: ${error.message}`);
		throw error;
	}
}

export default runExecutor;
