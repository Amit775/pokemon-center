import { NEUTRAL_NATURE, type Nature } from '@pokemon-center/champions-engine';

/**
 * The twenty-five natures, called "Stat Alignment" in Champions.
 *
 * The five neutral ones are collapsed into a single entry: Hardy, Docile, Serious, Bashful
 * and Quirky each raise and lower the same stat, so they are mechanically identical and
 * offering five ways to choose nothing is a menu that wastes the reader's time.
 */
export const NATURES: Nature[] = [
	NEUTRAL_NATURE,

	{ name: 'Lonely', raises: 'attack', lowers: 'defense' },
	{ name: 'Brave', raises: 'attack', lowers: 'speed' },
	{ name: 'Adamant', raises: 'attack', lowers: 'specialAttack' },
	{ name: 'Naughty', raises: 'attack', lowers: 'specialDefense' },

	{ name: 'Bold', raises: 'defense', lowers: 'attack' },
	{ name: 'Relaxed', raises: 'defense', lowers: 'speed' },
	{ name: 'Impish', raises: 'defense', lowers: 'specialAttack' },
	{ name: 'Lax', raises: 'defense', lowers: 'specialDefense' },

	{ name: 'Timid', raises: 'speed', lowers: 'attack' },
	{ name: 'Hasty', raises: 'speed', lowers: 'defense' },
	{ name: 'Jolly', raises: 'speed', lowers: 'specialAttack' },
	{ name: 'Naive', raises: 'speed', lowers: 'specialDefense' },

	{ name: 'Modest', raises: 'specialAttack', lowers: 'attack' },
	{ name: 'Mild', raises: 'specialAttack', lowers: 'defense' },
	{ name: 'Quiet', raises: 'specialAttack', lowers: 'speed' },
	{ name: 'Rash', raises: 'specialAttack', lowers: 'specialDefense' },

	{ name: 'Calm', raises: 'specialDefense', lowers: 'attack' },
	{ name: 'Gentle', raises: 'specialDefense', lowers: 'defense' },
	{ name: 'Sassy', raises: 'specialDefense', lowers: 'speed' },
	{ name: 'Careful', raises: 'specialDefense', lowers: 'specialAttack' },
];

/** Look a nature up by name, falling back to neutral for an unknown or missing one. */
export function natureByName(name: string | null | undefined): Nature {
	return NATURES.find((nature) => nature.name === name) ?? NEUTRAL_NATURE;
}
