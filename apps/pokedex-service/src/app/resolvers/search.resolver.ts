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
	sim: number;
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
				SELECT id, identifier, matched, sim FROM (
					SELECT p.id, p.identifier, p.identifier AS matched, similarity(p.identifier, ${term}) AS sim
					FROM pokemon p WHERE p.identifier % ${term}
					UNION ALL
					SELECT p.id, p.identifier, n.name AS matched, similarity(n.name, ${term}) AS sim
					FROM pokemon_species_names n
					JOIN pokemon p ON p.species_id = n.pokemon_species_id AND p.is_default = 1
					WHERE n.name % ${term}
				) x ORDER BY sim DESC LIMIT ${takePerKind * 4}`,
			this.prisma.$queryRaw<RawHit[]>`
				SELECT id, identifier, matched, sim FROM (
					SELECT m.id, m.identifier, m.identifier AS matched, similarity(m.identifier, ${term}) AS sim
					FROM moves m WHERE m.identifier % ${term}
					UNION ALL
					SELECT m.id, m.identifier, n.name AS matched, similarity(n.name, ${term}) AS sim
					FROM move_names n JOIN moves m ON m.id = n.move_id WHERE n.name % ${term}
				) x ORDER BY sim DESC LIMIT ${takePerKind * 4}`,
			this.prisma.$queryRaw<RawHit[]>`
				SELECT id, identifier, matched, sim FROM (
					SELECT a.id, a.identifier, a.identifier AS matched, similarity(a.identifier, ${term}) AS sim
					FROM abilities a WHERE a.identifier % ${term}
					UNION ALL
					SELECT a.id, a.identifier, n.name AS matched, similarity(n.name, ${term}) AS sim
					FROM ability_names n JOIN abilities a ON a.id = n.ability_id WHERE n.name % ${term}
				) x ORDER BY sim DESC LIMIT ${takePerKind * 4}`,
			this.prisma.$queryRaw<RawHit[]>`
				SELECT id, identifier, matched, sim FROM (
					SELECT i.id, i.identifier, i.identifier AS matched, similarity(i.identifier, ${term}) AS sim
					FROM items i WHERE i.identifier % ${term}
					UNION ALL
					SELECT i.id, i.identifier, n.name AS matched, similarity(n.name, ${term}) AS sim
					FROM item_names n JOIN items i ON i.id = n.item_id WHERE n.name % ${term}
				) x ORDER BY sim DESC LIMIT ${takePerKind * 4}`,
			this.prisma.$queryRaw<RawHit[]>`
				SELECT id, identifier, matched, sim FROM (
					SELECT t.id, t.identifier, t.identifier AS matched, similarity(t.identifier, ${term}) AS sim
					FROM types t WHERE t.identifier % ${term}
					UNION ALL
					SELECT t.id, t.identifier, n.name AS matched, similarity(n.name, ${term}) AS sim
					FROM type_names n JOIN types t ON t.id = n.type_id WHERE n.name % ${term}
				) x ORDER BY sim DESC LIMIT ${takePerKind * 4}`,
		]);

		const toHits = (kind: SearchHit['kind'], rows: RawHit[]): SearchHit[] => {
			const best = new Map<number, RawHit>();
			for (const row of rows) {
				const existing = best.get(row.id);
				if (!existing || row.sim > existing.sim) best.set(row.id, row);
			}
			return [...best.values()]
				.sort((a, b) => b.sim - a.sim)
				.slice(0, takePerKind)
				.map((row) => ({
					kind,
					id: row.id,
					canonicalId: `${kind}:${row.id}`,
					slug: row.identifier,
					matchedName: row.matched,
					similarity: row.sim,
				}));
		};

		return [
			...toHits('pokemon', pokemon),
			...toHits('move', moves),
			...toHits('ability', abilities),
			...toHits('item', items),
			...toHits('type', types),
		].sort((a, b) => b.similarity - a.similarity);
	}
}
