import { Client } from '@elastic/elasticsearch';
import { BulkResponse, IndicesCreateResponse, IndicesStatsResponse } from '@elastic/elasticsearch/lib/api/types';
import { mappings, PokemonDocument } from './pokemon.document';

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
			mappings: mappings,
		});
	}

	async bulkIndex(documents: PokemonDocument[]): Promise<BulkResponse> {
		const timestamp = Date.now();
		return await this.client.bulk({
			refresh: true,
			operations: documents.flatMap((doc) => [{ index: { _index: this.indexName, _id: doc.id } }, doc]),
		});
	}

	async getIndexStats(): Promise<IndicesStatsResponse> {
		return await this.client.indices.stats({ index: this.indexName });
	}
}
