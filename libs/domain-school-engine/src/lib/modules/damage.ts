import { assertUnambiguous } from '../ambiguity';
import type { CurriculumModule } from '../curriculum';
import { eliminationHint } from '../hints';
import { requireRef } from '../reference';
import { createRng } from '../rng';
import { drawWithUniqueBest, worstOf } from '../sampling';
import { article, eraNote, humanize, title } from '../text';
import type { Candidate, Exercise, ExerciseGenerator, GameContext, Hint, MoveRef, ReferenceData } from '../types';

/**
 * M2 — Damage Math.
 *
 * The arithmetic that decides whether a move is actually good, as opposed to whether its
 * power number looks big.
 */

/** Damage per use averaged over misses — the number that actually matters when choosing a move. */
export const expectedDamage = (move: MoveRef): number => (move.power ?? 0) * ((move.accuracy ?? 100) / 100);

const isAttacking = (move: MoveRef): boolean => move.damageClass !== 'status' && move.power !== null && move.power > 0;

const accuracyLabel = (move: MoveRef): string => (move.accuracy === null ? 'never misses' : `${move.accuracy}% accuracy`);

const moveCandidates = (moves: readonly MoveRef[], answer: MoveRef, label: (move: MoveRef) => string): Candidate<string>[] =>
	moves.map((move) => ({
		id: move.slug,
		label: label(move),
		value: move.slug,
		correct: move.slug === answer.slug,
	}));

export const expectedDamageGenerator: ExerciseGenerator = {
	id: 'damage.expected',
	lessonId: 'damage.expected-damage',
	requires: ['moves'],
	generate(seed: number, ref: ReferenceData, ctx: GameContext): Exercise {
		const rng = createRng(seed);
		const moves = requireRef(ref, 'moves', this.lessonId);
		const pool = moves.filter((move) => isAttacking(move) && move.accuracy !== null);

		const { drawn, best: answer } = drawWithUniqueBest(rng, pool, 4, expectedDamage, this.lessonId);
		const weakest = worstOf(drawn, expectedDamage);

		const candidates = moveCandidates(drawn, answer, (move) => `${humanize(move.slug)} — ${move.power} power, ${accuracyLabel(move)}`);
		assertUnambiguous(this.lessonId, candidates);

		const hints: Hint[] = [
			{ tier: 1, text: 'Accuracy is part of the damage: a move that misses deals nothing at all. Power alone does not decide this.' },
			{ tier: 2, text: eliminationHint(candidates) },
			{
				tier: 3,
				// Demonstrates the method on the *weakest* option, so the technique is shown without the answer.
				text: `Multiply power by accuracy. ${humanize(weakest.slug)}, for instance, averages ${expectedDamage(weakest).toFixed(1)} per use.`,
			},
			{ tier: 4, text: `${humanize(answer.slug)} averages ${expectedDamage(answer).toFixed(1)} — the highest here.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: 'Ignoring type matchups, which of these moves deals the most damage per use on average?',
			candidates,
			hints,
			explanation: `${drawn
				.map((move) => `${humanize(move.slug)} ${move.power}x${(move.accuracy ?? 100) / 100} = ${expectedDamage(move).toFixed(1)}`)
				.join('; ')}${eraNote(ctx.versionGroup)}.`,
		};
	},
};

export const priorityGenerator: ExerciseGenerator = {
	id: 'damage.priority',
	lessonId: 'damage.priority',
	requires: ['moves'],
	generate(seed: number, ref: ReferenceData, ctx: GameContext): Exercise {
		const rng = createRng(seed);
		const moves = requireRef(ref, 'moves', this.lessonId);

		const fast = moves.filter((move) => move.priority > 0);
		const ordinary = moves.filter((move) => move.priority <= 0);
		if (fast.length === 0 || ordinary.length < 3) {
			throw new Error(`[${this.lessonId}] the move set has too few priority moves to build a question`);
		}

		// Exactly one positive-priority move against three at 0 or below: the maximum cannot tie.
		const answer = rng.pick(fast);
		const drawn = rng.shuffle([answer, ...rng.sample(ordinary, 3)]);

		const candidates = moveCandidates(drawn, answer, (move) => humanize(move.slug));
		assertUnambiguous(this.lessonId, candidates);

		const hints: Hint[] = [
			{ tier: 1, text: 'Speed decides the order only among moves of equal priority. One of these does not wait its turn.' },
			{ tier: 2, text: eliminationHint(candidates) },
			{ tier: 3, text: `Three of these sit at priority 0. One is above it — usually a short, cheap attack meant to finish something off.` },
			{ tier: 4, text: `${humanize(answer.slug)} has priority ${answer.priority > 0 ? '+' : ''}${answer.priority}, so it moves first.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: 'Two Pokémon have identical Speed. Which of these moves is used first?',
			candidates,
			hints,
			explanation: `${humanize(answer.slug)} has priority ${answer.priority > 0 ? '+' : ''}${answer.priority}; the others are at ${drawn
				.filter((move) => move.slug !== answer.slug)
				.map((move) => move.priority)
				.join(', ')}${eraNote(ctx.versionGroup)}.`,
		};
	},
};

export const stabGenerator: ExerciseGenerator = {
	id: 'damage.stab',
	lessonId: 'damage.stab',
	requires: ['moves'],
	generate(seed: number, ref: ReferenceData, ctx: GameContext): Exercise {
		const rng = createRng(seed);
		const moves = requireRef(ref, 'moves', this.lessonId);
		const pool = moves.filter(isAttacking);

		const answer = rng.pick(pool);
		const others = pool.filter((move) => move.type !== answer.type);
		if (others.length < 3) throw new Error(`[${this.lessonId}] not enough off-type moves to build a question`);

		const drawn = rng.shuffle([answer, ...rng.sample(others, 3)]);
		// Labels are bare move names on purpose: recalling a move's type *is* the skill here.
		const candidates = moveCandidates(drawn, answer, (move) => humanize(move.slug));
		assertUnambiguous(this.lessonId, candidates);

		const decoy = drawn.find((move) => move.slug !== answer.slug) as MoveRef;

		const hints: Hint[] = [
			{ tier: 1, text: 'Same-type attack bonus applies when a move shares a type with the Pokémon using it — it multiplies damage by 1.5.' },
			{ tier: 2, text: eliminationHint(candidates) },
			{ tier: 3, text: `${humanize(decoy.slug)} is ${article(decoy.type)} ${title(decoy.type)}-type move, so it earns no bonus here.` },
			{ tier: 4, text: `${humanize(answer.slug)} is ${article(answer.type)} ${title(answer.type)}-type move, matching the user.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: `Which of these moves gets STAB for ${article(answer.type)} ${title(answer.type)}-type Pokémon?`,
			candidates,
			hints,
			explanation: `${humanize(answer.slug)} is ${title(answer.type)}-type, so ${article(answer.type)} ${title(
				answer.type,
			)}-type user deals 1.5x with it${eraNote(ctx.versionGroup)}.`,
		};
	},
};

export const damageGenerators = [expectedDamageGenerator, priorityGenerator, stabGenerator];

export const damageModule: CurriculumModule = {
	id: 'damage',
	title: 'Damage Math',
	summary: 'What a move is really worth once accuracy, priority and STAB are folded in.',
	lessons: [
		{
			id: 'damage.expected-damage',
			moduleId: 'damage',
			title: 'Expected damage',
			summary: 'A 120-power move at 70% accuracy is weaker than a 90-power move that always lands. Power is only half the number.',
			prereqs: [],
			generatorId: 'damage.expected',
		},
		{
			id: 'damage.stab',
			moduleId: 'damage',
			title: 'Same-type attack bonus',
			summary: 'Matching a move to the user’s own type multiplies its damage by 1.5 — the cheapest damage increase in the game.',
			prereqs: ['damage.expected-damage'],
			generatorId: 'damage.stab',
		},
		{
			id: 'damage.priority',
			moduleId: 'damage',
			title: 'Priority',
			summary: 'Some moves ignore Speed entirely. Knowing which ones decides who wins at low HP.',
			prereqs: ['damage.expected-damage'],
			generatorId: 'damage.priority',
		},
	],
};
