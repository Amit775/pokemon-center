import { Client } from '@elastic/elasticsearch';
import { BulkResponse, IndicesCreateResponse, IndicesStatsResponse } from '@elastic/elasticsearch/lib/api/types';
import { PokemonDocument } from './pokemon.document';

export class PokedexIndex {
	private readonly indexName = 'pokedex';

	constructor(private readonly client: Client) {}

	async ensureIndexExists(): Promise<IndicesCreateResponse> {
		const indexExists = await this.client.indices.exists({ index: this.indexName });
		if (indexExists) {
			await this.client.indices.delete({ index: this.indexName });
		}

		return await this.client.indices.create({
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
	}

	async bulkIndex(documents: PokemonDocument[]): Promise<BulkResponse> {
		return await this.client.bulk({
			refresh: true,
			operations: documents.flatMap((doc) => [{ index: { _index: this.indexName, _id: doc.id } }, doc]),
		});
	}

	async getIndexStats(): Promise<IndicesStatsResponse> {
		return await this.client.indices.stats({ index: this.indexName });
	}
}
