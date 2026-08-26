import { Args, Field, Int, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../prisma.service';

@ObjectType()
export class SearchHit {
	@Field(() => String)
	kind!: 'pokemon' | 'move' | 'ability' | 'item' | 'type';

	@Field(() => Int)
	id!: number;

	@Field(() => String)
	canonicalId!: string;

	@Field(() => String)
	slug!: string;

	/** The name that matched — localized when the hit came from a translation table */
	@Field(() => String)
	matchedName!: string;

	@Field(() => Number)
	similarity!: number;
}

interface RawHit {
	id: number;
	identifier: string;
	matched: string;
	similarity_score: number;
}

/**
 * Unified fuzzy search across all entity kinds, matching both slugs and
 * localized names (every language in the dataset), powered by pg_trgm.
 */
@Resolver()
export class SearchResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query(() => [SearchHit], { description: 'Fuzzy, multilingual search across pokemon, moves, abilities, items and types' })
	async search(
		@Args('term') term: string,
		@Args('takePerKind', { type: () => Int, defaultValue: 5 }) takePerKind: number,
	): Promise<SearchHit[]> {
		const [pokemon, moves, abilities, items, types] = await Promise.all([
			this.prisma.$queryRaw<RawHit[]>`
				SELECT id, identifier, matched, similarity_score FROM (
					SELECT pokemon.id, pokemon.identifier, pokemon.identifier AS matched, similarity(pokemon.identifier, ${term}) AS similarity_score
					FROM pokemon WHERE pokemon.identifier % ${term}
					UNION ALL
					SELECT pokemon.id, pokemon.identifier, pokemon_species_names.name AS matched, similarity(pokemon_species_names.name, ${term}) AS similarity_score
					FROM pokemon_species_names
					JOIN pokemon ON pokemon.species_id = pokemon_species_names.pokemon_species_id AND pokemon.is_default = 1
					WHERE pokemon_species_names.name % ${term}
				) matches ORDER BY similarity_score DESC LIMIT ${takePerKind * 4}`,
			this.prisma.$queryRaw<RawHit[]>`
				SELECT id, identifier, matched, similarity_score FROM (
					SELECT moves.id, moves.identifier, moves.identifier AS matched, similarity(moves.identifier, ${term}) AS similarity_score
					FROM moves WHERE moves.identifier % ${term}
					UNION ALL
					SELECT moves.id, moves.identifier, move_names.name AS matched, similarity(move_names.name, ${term}) AS similarity_score
					FROM move_names JOIN moves ON moves.id = move_names.move_id WHERE move_names.name % ${term}
				) matches ORDER BY similarity_score DESC LIMIT ${takePerKind * 4}`,
			this.prisma.$queryRaw<RawHit[]>`
				SELECT id, identifier, matched, similarity_score FROM (
					SELECT abilities.id, abilities.identifier, abilities.identifier AS matched, similarity(abilities.identifier, ${term}) AS similarity_score
					FROM abilities WHERE abilities.identifier % ${term}
					UNION ALL
					SELECT abilities.id, abilities.identifier, ability_names.name AS matched, similarity(ability_names.name, ${term}) AS similarity_score
					FROM ability_names JOIN abilities ON abilities.id = ability_names.ability_id WHERE ability_names.name % ${term}
				) matches ORDER BY similarity_score DESC LIMIT ${takePerKind * 4}`,
			this.prisma.$queryRaw<RawHit[]>`
				SELECT id, identifier, matched, similarity_score FROM (
					SELECT items.id, items.identifier, items.identifier AS matched, similarity(items.identifier, ${term}) AS similarity_score
					FROM items WHERE items.identifier % ${term}
					UNION ALL
					SELECT items.id, items.identifier, item_names.name AS matched, similarity(item_names.name, ${term}) AS similarity_score
					FROM item_names JOIN items ON items.id = item_names.item_id WHERE item_names.name % ${term}
				) matches ORDER BY similarity_score DESC LIMIT ${takePerKind * 4}`,
			this.prisma.$queryRaw<RawHit[]>`
				SELECT id, identifier, matched, similarity_score FROM (
					SELECT types.id, types.identifier, types.identifier AS matched, similarity(types.identifier, ${term}) AS similarity_score
					FROM types WHERE types.identifier % ${term}
					UNION ALL
					SELECT types.id, types.identifier, type_names.name AS matched, similarity(type_names.name, ${term}) AS similarity_score
					FROM type_names JOIN types ON types.id = type_names.type_id WHERE type_names.name % ${term}
				) matches ORDER BY similarity_score DESC LIMIT ${takePerKind * 4}`,
		]);

		const toHits = (kind: SearchHit['kind'], rows: RawHit[]): SearchHit[] => {
			const best = new Map<number, RawHit>();
			for (const row of rows) {
				const existing = best.get(row.id);
				if (!existing || row.similarity_score > existing.similarity_score) best.set(row.id, row);
			}
			return [...best.values()]
				.sort((first, second) => second.similarity_score - first.similarity_score)
				.slice(0, takePerKind)
				.map((row) => ({
					kind,
					id: row.id,
					canonicalId: `${kind}:${row.id}`,
					slug: row.identifier,
					matchedName: row.matched,
					similarity: row.similarity_score,
				}));
		};

		return [
			...toHits('pokemon', pokemon),
			...toHits('move', moves),
			...toHits('ability', abilities),
			...toHits('item', items),
			...toHits('type', types),
		].sort((first, second) => second.similarity - first.similarity);
	}
}
