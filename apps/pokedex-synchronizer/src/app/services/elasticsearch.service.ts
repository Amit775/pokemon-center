import { Injectable, Logger } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { PokemonDocument } from '../interfaces/pokemon-document.interface';

@Injectable()
export class PokedexElasticsearchService {
	private readonly logger = new Logger(PokedexElasticsearchService.name);
	private readonly indexName = 'pokedex';

	constructor(private readonly elasticsearchService: ElasticsearchService) {}

	async ensureIndexExists(): Promise<void> {
		try {
			const indexExists = await this.elasticsearchService.indices.exists({
				index: this.indexName,
			});

			if (indexExists) {
				this.logger.log(`Deleting existing index: ${this.indexName}`);
				await this.elasticsearchService.indices.delete({
					index: this.indexName,
				});
			}

			this.logger.log(`Creating index: ${this.indexName}`);
			await this.elasticsearchService.indices.create({
				index: this.indexName,
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
			} as any);

			this.logger.log(`Index ${this.indexName} created successfully`);
		} catch (error) {
			this.logger.error(`Error managing index: ${error.message}`);
			throw error;
		}
	}

	async bulkIndex(documents: PokemonDocument[]): Promise<void> {
		try {
			this.logger.log(`Starting bulk indexing of ${documents.length} documents`);

			const operations = documents.flatMap((doc) => [{ index: { _index: this.indexName, _id: doc.id } }, doc]);

			const result = await this.elasticsearchService.bulk({
				refresh: true,
				operations,
			});

			if (result.errors) {
				const errors = result.items.filter((item: any) => item.index?.error).map((item: any) => item.index.error);

				this.logger.error(`Bulk indexing errors: ${JSON.stringify(errors)}`);
				throw new Error(`Bulk indexing failed with ${errors.length} errors`);
			}

			this.logger.log(`Successfully indexed ${documents.length} documents`);
		} catch (error) {
			this.logger.error(`Error during bulk indexing: ${error.message}`);
			throw error;
		}
	}

	async getIndexStats(): Promise<any> {
		try {
			const stats = await this.elasticsearchService.indices.stats({
				index: this.indexName,
			});
			return stats;
		} catch (error) {
			this.logger.error(`Error getting index stats: ${error.message}`);
			throw error;
		}
	}
}
