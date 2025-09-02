import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PokemonDocument } from '../interfaces/pokemon-document.interface';
import { PokemonTransformerService } from './pokemon-transformer.service';
import { PokedexElasticsearchService } from './elasticsearch.service';

@Injectable()
export class PokedexSynchronizerService {
	private readonly logger = new Logger(PokedexSynchronizerService.name);
	private readonly prisma = new PrismaClient();

	constructor(
		private readonly transformer: PokemonTransformerService,
		private readonly elasticsearch: PokedexElasticsearchService,
	) {}

	async synchronize(): Promise<void> {
		try {
			this.logger.log('Starting Pokedex synchronization process...');

			// Step 1: Fetch all Pokemon data with relations
			this.logger.log('Fetching Pokemon data from database...');
			const pokemonData = await this.fetchAllPokemon();
			this.logger.log(`Fetched ${pokemonData.length} Pokemon records`);

			// Step 2: Transform data to Elasticsearch format
			this.logger.log('Transforming data to Elasticsearch format...');
			const documents = pokemonData.map((pokemon) => this.transformer.transformPokemon(pokemon));
			this.logger.log(`Transformed ${documents.length} documents`);

			// Step 3: Ensure Elasticsearch index exists and is clean
			this.logger.log('Preparing Elasticsearch index...');
			await this.elasticsearch.ensureIndexExists();

			// Step 4: Bulk index all documents
			this.logger.log('Indexing documents into Elasticsearch...');
			await this.elasticsearch.bulkIndex(documents);

			// Step 5: Get final stats
			const stats = await this.elasticsearch.getIndexStats();
			this.logger.log(`Synchronization completed successfully. Index stats:`, stats);
		} catch (error) {
			this.logger.error(`Synchronization failed: ${error.message}`);
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
