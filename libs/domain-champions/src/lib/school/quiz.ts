import { StatKey, TypeChart, statAt50, typeEffectiveness } from '@pokemon-center/champions-engine';
import { natureByName } from '../box/natures';
import type { PokedexEntry } from '../pokedex/pokedex-filter';

/**
 * Champions drills.
 *
 * Deliberately not a port of the Nuzlocke School. That engine's reference vocabulary is
 * mainline-shaped — evolutions, TM numbers, growth curves — and none of those exist in
 * Champions. What does decide Champions games is narrower and sharper: whether a hit is
 * super effective on the Champions chart, who moves first, and whether something dies this
 * turn. Those are the three drills.
 *
 * Questions are generated from the live roster and type chart, so a drill can never disagree
 * with the Pokédex, and a regulation change re-points the whole thing for free.
 *
 * Everything here is pure and seeded: the same seed always produces the same question, which
 * is what makes the tests meaningful and lets a drill be replayed.
 */

export type DrillKind = 'type-matchup' | 'speed-tier' | 'ohko';

export interface Choice {
	label: string;
	correct: boolean;
}

export interface Question {
	kind: DrillKind;
	prompt: string;
	choices: Choice[];
	/** Shown after answering — the reason, not just the answer. */
	explanation: string;
}

/** Deterministic PRNG so a seed reproduces a question exactly. */
export function createRng(seed: number): () => number {
	let state = seed >>> 0 || 1;
	return () => {
		// xorshift32 — small, fast, and good enough for picking quiz options.
		state ^= state << 13;
		state ^= state >>> 17;
		state ^= state << 5;
		return ((state >>> 0) % 100000) / 100000;
	};
}

function pick<T>(items: readonly T[], rng: () => number): T {
	return items[Math.floor(rng() * items.length) % items.length];
}

function shuffle<T>(items: T[], rng: () => number): T[] {
	const copy = [...items];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(rng() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}

const capitalise = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/** "an Ice move", "a Fire move" — Electric and Ice are the two that trip it. */
const article = (word: string) => (/^[aeiou]/i.test(word) ? 'an' : 'a');

/** How a multiplier is written in Champions, which names 4× and ¼× rather than lumping them in. */
export function effectivenessLabel(multiplier: number): string {
	if (multiplier === 0) return 'No effect';
	if (multiplier === 4) return 'Extremely effective (4×)';
	if (multiplier === 2) return 'Super effective (2×)';
	if (multiplier === 1) return 'Neutral (1×)';
	if (multiplier === 0.5) return 'Not very effective (½×)';
	return 'Mostly ineffective (¼×)';
}

/**
 * "How effective is Fairy against Dragon/Steel?"
 *
 * Uses the Champions chart rather than a remembered one, and the options use Champions'
 * own wording — a player who learns "extremely effective" here reads the game's UI faster.
 */
export function typeMatchupQuestion(entries: readonly PokedexEntry[], chart: TypeChart, seed: number): Question | null {
	const rng = createRng(seed);
	const attackingTypes = Object.keys(chart);
	if (attackingTypes.length === 0 || entries.length === 0) return null;

	const defender = pick(entries, rng);
	const attacking = pick(attackingTypes, rng);
	const multiplier = typeEffectiveness(attacking, defender.types, chart);

	const allLabels = [0, 0.25, 0.5, 1, 2, 4].map(effectivenessLabel);
	const correct = effectivenessLabel(multiplier);
	const distractors = shuffle(
		allLabels.filter((label) => label !== correct),
		rng,
	).slice(0, 3);

	return {
		kind: 'type-matchup',
		prompt: `How effective is ${article(attacking)} ${capitalise(attacking)} move against ${defender.name} (${defender.types.map(capitalise).join('/')})?`,
		choices: shuffle([{ label: correct, correct: true }, ...distractors.map((label) => ({ label, correct: false }))], rng),
		explanation: `${capitalise(attacking)} into ${defender.types.map(capitalise).join('/')} is ${multiplier}×.`,
	};
}

/**
 * "Who moves first?"
 *
 * Both sides are shown at full investment with a neutral nature, so the question is about
 * base Speed rather than about a spread the player cannot see. Ties are filtered out — a
 * question with two correct answers teaches nothing.
 */
export function speedTierQuestion(entries: readonly PokedexEntry[], seed: number): Question | null {
	const rng = createRng(seed);
	if (entries.length < 2) return null;

	const speedOf = (entry: PokedexEntry) => statAt50(entry.baseStats.speed, 'speed' as StatKey, 32, natureByName(null));

	for (let attempt = 0; attempt < 12; attempt++) {
		const a = pick(entries, rng);
		const b = pick(entries, rng);
		if (a.slug === b.slug) continue;

		const speedA = speedOf(a);
		const speedB = speedOf(b);
		if (speedA === speedB) continue;

		const faster = speedA > speedB ? a : b;
		const slower = speedA > speedB ? b : a;

		return {
			kind: 'speed-tier',
			prompt: `Both fully invested in Speed with a neutral nature — who moves first, ${a.name} or ${b.name}?`,
			choices: shuffle(
				[
					{ label: a.name, correct: a.slug === faster.slug },
					{ label: b.name, correct: b.slug === faster.slug },
				],
				rng,
			),
			explanation: `${faster.name} reaches ${Math.max(speedA, speedB)} Speed, ${slower.name} only ${Math.min(speedA, speedB)}.`,
		};
	}

	return null;
}

/**
 * "Does it survive?"
 *
 * Phrased around a percentage rather than raw damage, because that is how a battle actually
 * reads: you see a health bar, not a number.
 */
export function ohkoQuestion(entries: readonly PokedexEntry[], chart: TypeChart, seed: number): Question | null {
	const rng = createRng(seed);
	if (entries.length < 2) return null;

	const attacker = pick(entries, rng);
	const defender = pick(entries, rng);
	if (attacker.slug === defender.slug) return null;

	const attackingType = pick(attacker.types, rng);
	const multiplier = typeEffectiveness(attackingType, defender.types, chart);

	// A rough but honest yardstick: a 100 BP STAB hit from a fully invested attacker into a
	// fully invested defender, expressed as the question a player asks themselves.
	const isPhysical = attacker.baseStats.attack >= attacker.baseStats.specialAttack;
	const attack = statAt50(isPhysical ? attacker.baseStats.attack : attacker.baseStats.specialAttack, 'attack', 32);
	const defence = statAt50(isPhysical ? defender.baseStats.defense : defender.baseStats.specialDefense, 'defense', 0);
	const hp = statAt50(defender.baseStats.hp, 'hp', 0);

	const base = Math.floor(Math.floor((22 * 100 * attack) / defence) / 50) + 2;
	const maxRoll = Math.floor(base * 1.5 * multiplier);
	const survives = maxRoll < hp;

	return {
		kind: 'ohko',
		prompt:
			`${attacker.name} lands a 100 BP ${capitalise(attackingType)} STAB move on an uninvested ${defender.name}. ` +
			`Does ${defender.name} survive?`,
		choices: shuffle(
			[
				{ label: 'It survives', correct: survives },
				{ label: 'It faints', correct: !survives },
			],
			rng,
		),
		explanation: survives
			? `Up to ${maxRoll} damage against ${hp} HP — it lives${maxRoll > hp * 0.5 ? ', but only just' : ''}.`
			: `Up to ${maxRoll} damage against ${hp} HP, so the highest rolls take it out.`,
	};
}

/** Build one question of the requested kind, or null when the data cannot support it. */
export function generateQuestion(kind: DrillKind, entries: readonly PokedexEntry[], chart: TypeChart, seed: number): Question | null {
	switch (kind) {
		case 'type-matchup':
			return typeMatchupQuestion(entries, chart, seed);
		case 'speed-tier':
			return speedTierQuestion(entries, seed);
		case 'ohko':
			return ohkoQuestion(entries, chart, seed);
		default:
			return null;
	}
}

export const DRILLS: { kind: DrillKind; label: string; blurb: string }[] = [
	{
		kind: 'type-matchup',
		label: 'Type matchups',
		blurb: "Champions' own chart, in Champions' own words — including extremely effective and mostly ineffective.",
	},
	{ kind: 'speed-tier', label: 'Speed tiers', blurb: 'Who moves first, at level 50 with full investment.' },
	{ kind: 'ohko', label: 'Survival', blurb: 'Does it live through the hit, or does it not?' },
];
