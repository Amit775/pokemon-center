import type { EvolutionRef, GrowthRateRef, MachineRef, MoveRef, NatureRef, ReferenceData } from '../types';

/**
 * Shared test data. Excluded from the library build via tsconfig.lib.json — it exists to
 * exercise generators, not to ship.
 *
 * Values are real, so a failing assertion means the generator is wrong rather than the
 * fixture being make-believe.
 */

type MoveSeed = Partial<MoveRef> & Pick<MoveRef, 'slug' | 'type' | 'damageClass'>;

const move = (seed: MoveSeed): MoveRef => ({
	power: null,
	accuracy: null,
	pp: null,
	priority: 0,
	ailment: null,
	ailmentChance: 0,
	critRate: 0,
	flinchChance: 0,
	drain: 0,
	healing: 0,
	minHits: null,
	maxHits: null,
	statChance: 0,
	statChanges: [],
	...seed,
});

export const MOVES: readonly MoveRef[] = [
	// Spread of power/accuracy so expected-damage questions have room to differentiate.
	move({ slug: 'close-combat', type: 'fighting', damageClass: 'physical', power: 120, accuracy: 100 }),
	move({ slug: 'draco-meteor', type: 'dragon', damageClass: 'special', power: 130, accuracy: 90 }),
	move({ slug: 'megahorn', type: 'bug', damageClass: 'physical', power: 120, accuracy: 85 }),
	move({ slug: 'earthquake', type: 'ground', damageClass: 'physical', power: 100, accuracy: 100 }),
	move({ slug: 'fire-blast', type: 'fire', damageClass: 'special', power: 110, accuracy: 85, ailment: 'burn', ailmentChance: 10 }),
	move({ slug: 'hydro-pump', type: 'water', damageClass: 'special', power: 110, accuracy: 80 }),
	move({ slug: 'stone-edge', type: 'rock', damageClass: 'physical', power: 100, accuracy: 80, critRate: 1 }),
	move({ slug: 'thunder', type: 'electric', damageClass: 'special', power: 110, accuracy: 70, ailment: 'paralysis', ailmentChance: 30 }),
	move({ slug: 'blizzard', type: 'ice', damageClass: 'special', power: 110, accuracy: 70, ailment: 'freeze', ailmentChance: 10 }),
	move({ slug: 'surf', type: 'water', damageClass: 'special', power: 90, accuracy: 100 }),
	move({ slug: 'thunderbolt', type: 'electric', damageClass: 'special', power: 90, accuracy: 100, ailment: 'paralysis', ailmentChance: 10 }),
	move({ slug: 'flamethrower', type: 'fire', damageClass: 'special', power: 90, accuracy: 100, ailment: 'burn', ailmentChance: 10 }),
	move({ slug: 'ice-beam', type: 'ice', damageClass: 'special', power: 90, accuracy: 100, ailment: 'freeze', ailmentChance: 10 }),
	move({ slug: 'sludge-bomb', type: 'poison', damageClass: 'special', power: 90, accuracy: 100, ailment: 'poison', ailmentChance: 30 }),
	move({ slug: 'body-slam', type: 'normal', damageClass: 'physical', power: 85, accuracy: 100, ailment: 'paralysis', ailmentChance: 30 }),
	move({ slug: 'shadow-ball', type: 'ghost', damageClass: 'special', power: 80, accuracy: 100 }),
	move({ slug: 'giga-drain', type: 'grass', damageClass: 'special', power: 75, accuracy: 100, drain: 50 }),

	// Recoil.
	move({ slug: 'double-edge', type: 'normal', damageClass: 'physical', power: 120, accuracy: 100, drain: -33 }),
	move({ slug: 'brave-bird', type: 'flying', damageClass: 'physical', power: 120, accuracy: 100, drain: -33 }),
	move({ slug: 'flare-blitz', type: 'fire', damageClass: 'physical', power: 120, accuracy: 100, drain: -33, ailment: 'burn', ailmentChance: 10 }),

	// Priority.
	move({ slug: 'extreme-speed', type: 'normal', damageClass: 'physical', power: 80, accuracy: 100, priority: 2 }),
	move({ slug: 'quick-attack', type: 'normal', damageClass: 'physical', power: 40, accuracy: 100, priority: 1 }),
	move({ slug: 'aqua-jet', type: 'water', damageClass: 'physical', power: 40, accuracy: 100, priority: 1 }),
	move({ slug: 'mach-punch', type: 'fighting', damageClass: 'physical', power: 40, accuracy: 100, priority: 1 }),

	// Guaranteed-ailment status moves: chance 0 means "always", not "never".
	move({ slug: 'thunder-wave', type: 'electric', damageClass: 'status', accuracy: 90, ailment: 'paralysis' }),
	move({ slug: 'toxic', type: 'poison', damageClass: 'status', accuracy: 90, ailment: 'poison' }),
	move({ slug: 'sleep-powder', type: 'grass', damageClass: 'status', accuracy: 75, ailment: 'sleep' }),
	move({ slug: 'will-o-wisp', type: 'fire', damageClass: 'status', accuracy: 85, ailment: 'burn' }),

	// Single stat changes, all distinct signatures.
	move({ slug: 'swords-dance', type: 'normal', damageClass: 'status', statChanges: [{ stat: 'attack', change: 2 }] }),
	move({ slug: 'nasty-plot', type: 'dark', damageClass: 'status', statChanges: [{ stat: 'special-attack', change: 2 }] }),
	move({ slug: 'agility', type: 'psychic', damageClass: 'status', statChanges: [{ stat: 'speed', change: 2 }] }),
	move({ slug: 'harden', type: 'normal', damageClass: 'status', statChanges: [{ stat: 'defense', change: 1 }] }),
	move({ slug: 'growl', type: 'normal', damageClass: 'status', statChanges: [{ stat: 'attack', change: -1 }] }),
	move({ slug: 'leer', type: 'normal', damageClass: 'status', statChanges: [{ stat: 'defense', change: -1 }] }),
	move({ slug: 'string-shot', type: 'bug', damageClass: 'status', statChanges: [{ stat: 'speed', change: -2 }] }),
];

/** The real 25: twenty with an effect, five neutral. */
export const NATURES: readonly NatureRef[] = [
	{ slug: 'adamant', increased: 'attack', decreased: 'special-attack' },
	{ slug: 'lonely', increased: 'attack', decreased: 'defense' },
	{ slug: 'brave', increased: 'attack', decreased: 'speed' },
	{ slug: 'naughty', increased: 'attack', decreased: 'special-defense' },
	{ slug: 'bold', increased: 'defense', decreased: 'attack' },
	{ slug: 'impish', increased: 'defense', decreased: 'special-attack' },
	{ slug: 'relaxed', increased: 'defense', decreased: 'speed' },
	{ slug: 'lax', increased: 'defense', decreased: 'special-defense' },
	{ slug: 'modest', increased: 'special-attack', decreased: 'attack' },
	{ slug: 'mild', increased: 'special-attack', decreased: 'defense' },
	{ slug: 'quiet', increased: 'special-attack', decreased: 'speed' },
	{ slug: 'rash', increased: 'special-attack', decreased: 'special-defense' },
	{ slug: 'calm', increased: 'special-defense', decreased: 'attack' },
	{ slug: 'gentle', increased: 'special-defense', decreased: 'defense' },
	{ slug: 'sassy', increased: 'special-defense', decreased: 'speed' },
	{ slug: 'careful', increased: 'special-defense', decreased: 'special-attack' },
	{ slug: 'timid', increased: 'speed', decreased: 'attack' },
	{ slug: 'hasty', increased: 'speed', decreased: 'defense' },
	{ slug: 'jolly', increased: 'speed', decreased: 'special-attack' },
	{ slug: 'naive', increased: 'speed', decreased: 'special-defense' },
	// Neutral — raise and lower the same stat, i.e. do nothing.
	{ slug: 'hardy', increased: 'attack', decreased: 'attack' },
	{ slug: 'docile', increased: 'defense', decreased: 'defense' },
	{ slug: 'serious', increased: 'speed', decreased: 'speed' },
	{ slug: 'bashful', increased: 'special-attack', decreased: 'special-attack' },
	{ slug: 'quirky', increased: 'special-defense', decreased: 'special-defense' },
];

/** Real evolution data, chosen to cover every condition shape the describer handles. */
export const EVOLUTIONS: readonly EvolutionRef[] = [
	{ from: 'charmeleon', to: 'charizard', trigger: 'level-up', minLevel: 36, minHappiness: null, timeOfDay: null, triggerItem: null, heldItem: null, knownMove: null, tradeSpecies: null, location: null },
	{ from: 'eevee', to: 'vaporeon', trigger: 'use-item', minLevel: null, minHappiness: null, timeOfDay: null, triggerItem: 'water-stone', heldItem: null, knownMove: null, tradeSpecies: null, location: null },
	{ from: 'eevee', to: 'espeon', trigger: 'level-up', minLevel: null, minHappiness: 160, timeOfDay: 'day', triggerItem: null, heldItem: null, knownMove: null, tradeSpecies: null, location: null },
	{ from: 'machoke', to: 'machamp', trigger: 'trade', minLevel: null, minHappiness: null, timeOfDay: null, triggerItem: null, heldItem: null, knownMove: null, tradeSpecies: null, location: null },
	{ from: 'onix', to: 'steelix', trigger: 'trade', minLevel: null, minHappiness: null, timeOfDay: null, triggerItem: null, heldItem: 'metal-coat', knownMove: null, tradeSpecies: null, location: null },
	{ from: 'golbat', to: 'crobat', trigger: 'level-up', minLevel: null, minHappiness: 160, timeOfDay: null, triggerItem: null, heldItem: null, knownMove: null, tradeSpecies: null, location: null },
	{ from: 'nincada', to: 'shedinja', trigger: 'shed', minLevel: 20, minHappiness: null, timeOfDay: null, triggerItem: null, heldItem: null, knownMove: null, tradeSpecies: null, location: null },
	{ from: 'sylveon', to: 'sylveon', trigger: 'level-up', minLevel: null, minHappiness: null, timeOfDay: null, triggerItem: null, heldItem: null, knownMove: 'baby-doll-eyes', tradeSpecies: null, location: null },
	{ from: 'magneton', to: 'magnezone', trigger: 'level-up', minLevel: null, minHappiness: null, timeOfDay: null, triggerItem: null, heldItem: null, knownMove: null, tradeSpecies: null, location: 'mt-coronet' },
	{ from: 'karrablast', to: 'escavalier', trigger: 'trade', minLevel: null, minHappiness: null, timeOfDay: null, triggerItem: null, heldItem: null, knownMove: null, tradeSpecies: 'shelmet', location: null },
];

export const MACHINES: readonly MachineRef[] = [
	{ number: 1, move: 'focus-punch', versionGroup: 'firered-leafgreen' },
	{ number: 24, move: 'thunderbolt', versionGroup: 'firered-leafgreen' },
	{ number: 26, move: 'earthquake', versionGroup: 'firered-leafgreen' },
	{ number: 35, move: 'flamethrower', versionGroup: 'firered-leafgreen' },
	{ number: 13, move: 'ice-beam', versionGroup: 'firered-leafgreen' },
	{ number: 6, move: 'toxic', versionGroup: 'firered-leafgreen' },
	{ number: 45, move: 'attract', versionGroup: 'firered-leafgreen' },
	{ number: 3, move: 'water-pulse', versionGroup: 'firered-leafgreen' },
];

/** The six curves and their real level-100 costs. */
export const GROWTH_RATES: readonly GrowthRateRef[] = [
	{ slug: 'slow-then-very-fast', experienceToLevel100: 600_000 },
	{ slug: 'fast', experienceToLevel100: 800_000 },
	{ slug: 'medium', experienceToLevel100: 1_000_000 },
	{ slug: 'medium-slow', experienceToLevel100: 1_059_860 },
	{ slug: 'slow', experienceToLevel100: 1_250_000 },
	{ slug: 'fast-then-very-slow', experienceToLevel100: 1_640_000 },
];

export const moveReference: ReferenceData = { moves: MOVES };
export const progressionReference: ReferenceData = { evolutions: EVOLUTIONS, machines: MACHINES, growthRates: GROWTH_RATES };
export const natureReference: ReferenceData = { natures: NATURES };
export const fullReference: ReferenceData = {
	moves: MOVES,
	natures: NATURES,
	evolutions: EVOLUTIONS,
	machines: MACHINES,
	growthRates: GROWTH_RATES,
};
