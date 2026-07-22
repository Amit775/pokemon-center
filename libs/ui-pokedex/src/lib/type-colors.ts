/** The 18 canonical Pokémon type slugs, in national-dex order. */
export const POKEMON_TYPES = [
	'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground',
	'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
] as const;

export type PokemonType = (typeof POKEMON_TYPES)[number];

/**
 * The CSS custom property carrying a type's brand color, e.g. `var(--t-fire)`.
 * The value itself lives once in the token layer (styles/tokens.scss) — this only
 * names the variable, never a hex, so theming stays single-source.
 */
export function typeColorVar(type: string): string {
	return `var(--t-${type})`;
}
