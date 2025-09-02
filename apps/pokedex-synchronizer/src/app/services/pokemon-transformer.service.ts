import { Injectable } from '@nestjs/common';
import { PokemonDocument } from '../interfaces/pokemon-document.interface';

@Injectable()
export class PokemonTransformerService {
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
