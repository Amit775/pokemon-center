import { MappingTypeMapping } from '@elastic/elasticsearch/lib/api/types';

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
	}>;
	abilities: Array<{
		id: string;
		name: string;
		is_hidden: boolean;
	}>;
	moves: Array<{
		id: string;
		name: string;
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

export const mappings: MappingTypeMapping = {
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
};
