/**
 * Canonical lookup convention: every entity is addressable by
 *  - canonical id:  "pokemon:25", "move:63"
 *  - plain numeric id: 25
 *  - slug (identifier): "pikachu"
 */
export interface Lookup {
	id?: number;
	identifier?: string;
}

export function parseIdOrSlug(entity: string, idOrSlug: string): Lookup {
	const canonical = idOrSlug.match(new RegExp(`^${entity}:(\\d+)$`));
	if (canonical) return { id: parseInt(canonical[1], 10) };
	if (/^\d+$/.test(idOrSlug)) return { id: parseInt(idOrSlug, 10) };
	return { identifier: idOrSlug };
}

export function whereIdOrSlug(entity: string, idOrSlug: string): { id: number } | { identifier: string } {
	const lookup = parseIdOrSlug(entity, idOrSlug);
	return lookup.id !== undefined ? { id: lookup.id } : { identifier: lookup.identifier as string };
}
