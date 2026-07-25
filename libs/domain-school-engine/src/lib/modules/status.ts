import { assertUnambiguous } from '../ambiguity';
import type { CurriculumModule } from '../curriculum';
import { eliminationHint } from '../hints';
import { requireRef } from '../reference';
import { createRng } from '../rng';
import { eraNote, humanize } from '../text';
import type { Candidate, Exercise, ExerciseGenerator, GameContext, Hint, MoveRef, ReferenceData } from '../types';

/**
 * M3 — Status & Move Effects.
 *
 * Deliberately built on what `move_meta` actually records — which move inflicts what, at what
 * chance, and which ones cost the user HP. What each ailment *does* (burn halving Attack, say)
 * is not in the dataset, so it is not taught here as if it were: inventing those facts is
 * exactly the hand-authoring the thesis rules out.
 */

/** PokeAPI stores "no ailment" as the identifier `none`, not as null. */
const inflicts = (move: MoveRef): boolean => move.ailment !== null && move.ailment !== 'none';

const moveCandidates = (moves: readonly MoveRef[], answer: MoveRef): Candidate<string>[] =>
	moves.map((move) => ({
		id: move.slug,
		label: humanize(move.slug),
		value: move.slug,
		correct: move.slug === answer.slug,
	}));

export const ailmentSourceGenerator: ExerciseGenerator = {
	id: 'status.source',
	lessonId: 'status.ailment-source',
	requires: ['moves'],
	generate(seed: number, ref: ReferenceData, ctx: GameContext): Exercise {
		const rng = createRng(seed);
		const moves = requireRef(ref, 'moves', this.lessonId);

		const causing = moves.filter(inflicts);
		if (causing.length === 0) throw new Error(`[${this.lessonId}] no move in this set inflicts an ailment`);

		const answer = rng.pick(causing);
		const ailment = answer.ailment as string;
		// Anything that inflicts the *same* ailment would be a second right answer.
		const others = moves.filter((move) => move.ailment !== ailment);
		if (others.length < 3) throw new Error(`[${this.lessonId}] not enough moves without ${ailment}`);

		const drawn = rng.shuffle([answer, ...rng.sample(others, 3)]);
		const candidates = moveCandidates(drawn, answer);
		assertUnambiguous(this.lessonId, candidates);

		const hints: Hint[] = [
			{ tier: 1, text: `Only one of these can leave the target ${humanize(ailment).toLowerCase()}.` },
			{ tier: 2, text: eliminationHint(candidates) },
			{
				tier: 3,
				text:
					answer.ailmentChance > 0
						? `The move you want inflicts it only some of the time — ${answer.ailmentChance}% per hit.`
						: 'The move you want inflicts it every time it connects; that is its whole purpose.',
			},
			{ tier: 4, text: `${humanize(answer.slug)} inflicts ${humanize(ailment).toLowerCase()}.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: `Which of these moves can inflict ${humanize(ailment).toLowerCase()}?`,
			candidates,
			hints,
			explanation: `${humanize(answer.slug)} inflicts ${humanize(ailment).toLowerCase()}${
				answer.ailmentChance > 0 ? ` ${answer.ailmentChance}% of the time` : ' whenever it connects'
			}${eraNote(ctx.versionGroup)}.`,
		};
	},
};

export const ailmentChanceGenerator: ExerciseGenerator = {
	id: 'status.chance',
	lessonId: 'status.ailment-chance',
	requires: ['moves'],
	generate(seed: number, ref: ReferenceData, ctx: GameContext): Exercise {
		const rng = createRng(seed);
		const moves = requireRef(ref, 'moves', this.lessonId);

		// Chance of 0 means "guaranteed" in this dataset, so those moves cannot be asked about here.
		const chancy = moves.filter((move) => inflicts(move) && move.ailmentChance > 0);
		if (chancy.length === 0) throw new Error(`[${this.lessonId}] no move in this set has a chance-based ailment`);

		const answer = rng.pick(chancy);
		const plausible = [10, 20, 30, 50, 100].filter((pct) => pct !== answer.ailmentChance);
		const options = rng.shuffle([answer.ailmentChance, ...rng.sample(plausible, 3)]);

		const candidates: Candidate<number>[] = options.map((pct) => ({
			id: `p${pct}`,
			label: `${pct}%`,
			value: pct,
			correct: pct === answer.ailmentChance,
		}));
		assertUnambiguous(this.lessonId, candidates);

		const hints: Hint[] = [
			{ tier: 1, text: 'Secondary effects cluster on a few round numbers — they are rarely as likely as they feel mid-battle.' },
			{ tier: 2, text: eliminationHint(candidates) },
			{
				tier: 3,
				text: `${humanize(answer.slug)} is ${answer.power === null ? 'a status move' : `a ${answer.power}-power ${answer.damageClass} move`}; the stronger the move, the stingier its side effect tends to be.`,
			},
			{ tier: 4, text: `${humanize(answer.slug)} inflicts ${humanize(answer.ailment as string).toLowerCase()} ${answer.ailmentChance}% of the time.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: `How often does ${humanize(answer.slug)} inflict ${humanize(answer.ailment as string).toLowerCase()}?`,
			candidates,
			hints,
			explanation: `${humanize(answer.slug)}: ${answer.ailmentChance}% chance of ${humanize(answer.ailment as string).toLowerCase()}${eraNote(
				ctx.versionGroup,
			)}.`,
		};
	},
};

export const recoilGenerator: ExerciseGenerator = {
	id: 'status.recoil',
	lessonId: 'status.recoil-and-drain',
	requires: ['moves'],
	generate(seed: number, ref: ReferenceData, ctx: GameContext): Exercise {
		const rng = createRng(seed);
		const moves = requireRef(ref, 'moves', this.lessonId);

		// `drain` is signed: positive heals the user from damage dealt, negative is recoil.
		const recoiling = moves.filter((move) => move.drain < 0);
		const safe = moves.filter((move) => move.drain >= 0);
		if (recoiling.length === 0 || safe.length < 3) {
			throw new Error(`[${this.lessonId}] this move set has too few recoil moves to build a question`);
		}

		const answer = rng.pick(recoiling);
		const drawn = rng.shuffle([answer, ...rng.sample(safe, 3)]);
		const candidates = moveCandidates(drawn, answer);
		assertUnambiguous(this.lessonId, candidates);

		const hints: Hint[] = [
			{ tier: 1, text: 'Recoil is damage the attacker takes as a share of the damage it just dealt — the price of a big number.' },
			{ tier: 2, text: eliminationHint(candidates) },
			{ tier: 3, text: `The move you want costs its user ${Math.abs(answer.drain)}% of the damage it inflicts.` },
			{ tier: 4, text: `${humanize(answer.slug)} deals ${Math.abs(answer.drain)}% recoil to the user.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: 'Which of these moves hurts the Pokémon using it?',
			candidates,
			hints,
			explanation: `${humanize(answer.slug)} costs the user ${Math.abs(answer.drain)}% of the damage dealt as recoil${eraNote(ctx.versionGroup)}.`,
		};
	},
};

export const statusGenerators = [ailmentSourceGenerator, ailmentChanceGenerator, recoilGenerator];

export const statusModule: CurriculumModule = {
	id: 'status',
	title: 'Status & Side Effects',
	summary: 'The half of a move that is not damage: what it inflicts, how often, and what it costs the user.',
	lessons: [
		{
			id: 'status.ailment-source',
			moduleId: 'status',
			title: 'What inflicts what',
			summary: 'Knowing which moves carry paralysis, burn or sleep decides what is safe to switch into.',
			prereqs: [],
			generatorId: 'status.source',
		},
		{
			id: 'status.ailment-chance',
			moduleId: 'status',
			title: 'Secondary effect chances',
			summary: 'A 10% freeze and a 30% paralysis are different risks. Guessing them wrong is how games are lost.',
			prereqs: ['status.ailment-source'],
			generatorId: 'status.chance',
		},
		{
			id: 'status.recoil-and-drain',
			moduleId: 'status',
			title: 'Recoil and drain',
			summary: 'Some of the strongest moves bill the user for the privilege.',
			prereqs: ['status.ailment-source'],
			generatorId: 'status.recoil',
		},
	],
};
