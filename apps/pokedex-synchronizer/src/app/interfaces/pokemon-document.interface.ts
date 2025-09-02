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
