import { assertUnambiguous } from '../ambiguity';
import type { CurriculumModule } from '../curriculum';
import { eliminationHint } from '../hints';
import { requireRef } from '../reference';
import { createRng } from '../rng';
import { sampleDistinctBy } from '../sampling';
import { eraNote, humanize } from '../text';
import type { Candidate, Exercise, ExerciseGenerator, GameContext, Hint, MoveRef, NatureRef, ReferenceData } from '../types';

/**
 * M4 — Stats & Natures.
 *
 * Natures are a clean generated-content case: every non-neutral nature is a unique
 * (raised, lowered) pair, so the question and its answer both fall straight out of the table.
 */

/**
 * The five neutral natures (Hardy, Docile, Serious, Bashful, Quirky) raise and lower the same
 * stat, i.e. do nothing. They are excluded everywhere: "which nature has no effect?" has five
 * equally correct answers, which is precisely the ambiguity the engine refuses to emit.
 */
const isNeutral = (nature: NatureRef): boolean =>
	nature.increased === null || nature.decreased === null || nature.increased === nature.decreased;

const natureEffect = (nature: NatureRef): string => `+${humanize(nature.increased as string)} / −${humanize(nature.decreased as string)}`;

const singleStatChange = (move: MoveRef): boolean => move.statChanges.length === 1;

const changeSignature = (move: MoveRef): string => {
	const [change] = move.statChanges;
	return `${change.stat}:${change.change}`;
};

const changeLabel = (move: MoveRef): string => {
	const [change] = move.statChanges;
	const stages = Math.abs(change.change) === 1 ? 'stage' : 'stages';
	return `${change.change > 0 ? 'Raises' : 'Lowers'} ${humanize(change.stat)} by ${Math.abs(change.change)} ${stages}`;
};

export const natureEffectGenerator: ExerciseGenerator = {
	id: 'stats.nature-effect',
	lessonId: 'stats.nature-effect',
	requires: ['natures'],
	generate(seed: number, ref: ReferenceData, ctx: GameContext): Exercise {
		const rng = createRng(seed);
		const natures = requireRef(ref, 'natures', this.lessonId).filter((nature) => !isNeutral(nature));
		if (natures.length < 4) throw new Error(`[${this.lessonId}] need at least 4 non-neutral natures`);

		const drawn = sampleDistinctBy(rng, natures, 4, natureEffect, this.lessonId);
		const answer = rng.pick(drawn);

		const candidates: Candidate<string>[] = drawn.map((nature) => ({
			id: nature.slug,
			label: natureEffect(nature),
			value: natureEffect(nature),
			correct: nature.slug === answer.slug,
		}));
		assertUnambiguous(this.lessonId, candidates);

		const hints: Hint[] = [
			{ tier: 1, text: 'A nature raises one stat by 10% and lowers another by 10%. It never touches HP.' },
			{ tier: 2, text: eliminationHint(candidates) },
			{ tier: 3, text: `${humanize(answer.slug)} favours a ${answer.increased === 'attack' || answer.increased === 'special-attack' ? 'attacking' : 'defensive or supporting'} role.` },
			{ tier: 4, text: `${humanize(answer.slug)} is ${natureEffect(answer)}.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: `What does the ${humanize(answer.slug)} nature do?`,
			candidates,
			hints,
			explanation: `${humanize(answer.slug)}: ${natureEffect(answer)}${eraNote(ctx.versionGroup)}.`,
		};
	},
};

export const natureByEffectGenerator: ExerciseGenerator = {
	id: 'stats.nature-by-effect',
	lessonId: 'stats.nature-by-effect',
	requires: ['natures'],
	generate(seed: number, ref: ReferenceData, ctx: GameContext): Exercise {
		const rng = createRng(seed);
		const natures = requireRef(ref, 'natures', this.lessonId).filter((nature) => !isNeutral(nature));
		if (natures.length < 4) throw new Error(`[${this.lessonId}] need at least 4 non-neutral natures`);

		// Distinct by effect, so no two options could both satisfy the prompt.
		const drawn = sampleDistinctBy(rng, natures, 4, natureEffect, this.lessonId);
		const answer = rng.pick(drawn);

		const candidates: Candidate<string>[] = drawn.map((nature) => ({
			id: nature.slug,
			label: humanize(nature.slug),
			value: nature.slug,
			correct: nature.slug === answer.slug,
		}));
		assertUnambiguous(this.lessonId, candidates);

		const hints: Hint[] = [
			{ tier: 1, text: 'Twenty of the twenty-five natures do something; each is a unique pair of one raised and one lowered stat.' },
			{ tier: 2, text: eliminationHint(candidates) },
			{ tier: 3, text: `The one you want gives up ${humanize(answer.decreased as string)} to get ${humanize(answer.increased as string)}.` },
			{ tier: 4, text: `${humanize(answer.slug)} is the nature that is ${natureEffect(answer)}.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: `Which nature raises ${humanize(answer.increased as string)} and lowers ${humanize(answer.decreased as string)}?`,
			candidates,
			hints,
			explanation: `${humanize(answer.slug)} is ${natureEffect(answer)}${eraNote(ctx.versionGroup)}.`,
		};
	},
};

export const statChangeGenerator: ExerciseGenerator = {
	id: 'stats.stat-changes',
	lessonId: 'stats.stat-changes',
	requires: ['moves'],
	generate(seed: number, ref: ReferenceData, ctx: GameContext): Exercise {
		const rng = createRng(seed);
		const moves = requireRef(ref, 'moves', this.lessonId);
		const changing = moves.filter(singleStatChange);
		if (changing.length < 4) throw new Error(`[${this.lessonId}] need at least 4 moves with a single stat change`);

		const drawn = sampleDistinctBy(rng, changing, 4, changeSignature, this.lessonId);
		const answer = rng.pick(drawn);

		const candidates: Candidate<string>[] = drawn.map((move) => ({
			id: move.slug,
			label: changeLabel(move),
			value: changeSignature(move),
			correct: move.slug === answer.slug,
		}));
		assertUnambiguous(this.lessonId, candidates);

		const [change] = answer.statChanges;
		const hints: Hint[] = [
			{ tier: 1, text: 'Stat stages run from −6 to +6. A single +2 is already a 2x multiplier at the top end of the useful range.' },
			{ tier: 2, text: eliminationHint(candidates) },
			{
				tier: 3,
				text: `${humanize(answer.slug)} is ${answer.damageClass === 'status' ? 'a status move, so its whole value is the stat change' : `a ${answer.damageClass} attack, so the stat change is a bonus on top of damage`}.`,
			},
			{ tier: 4, text: `${humanize(answer.slug)} ${changeLabel(answer).toLowerCase()}.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: `What does ${humanize(answer.slug)} do to stats?`,
			candidates,
			hints,
			explanation: `${humanize(answer.slug)}: ${change.change > 0 ? '+' : ''}${change.change} ${humanize(change.stat)}${eraNote(ctx.versionGroup)}.`,
		};
	},
};

export const statsGenerators = [natureEffectGenerator, natureByEffectGenerator, statChangeGenerator];

export const statsModule: CurriculumModule = {
	id: 'stats',
	title: 'Stats & Natures',
	summary: 'The permanent 10% nudges and the temporary stage swings that decide who outspeeds and who survives.',
	lessons: [
		{
			id: 'stats.nature-effect',
			moduleId: 'stats',
			title: 'Reading a nature',
			summary: 'Given a nature, name what it raises and what it gives up.',
			prereqs: [],
			generatorId: 'stats.nature-effect',
		},
		{
			id: 'stats.nature-by-effect',
			moduleId: 'stats',
			title: 'Choosing a nature',
			summary: 'The direction that matters at the teambuilder: you know the spread you want, now name it.',
			prereqs: ['stats.nature-effect'],
			generatorId: 'stats.nature-by-effect',
		},
		{
			id: 'stats.stat-changes',
			moduleId: 'stats',
			title: 'Stat stages',
			summary: 'What a boosting or lowering move actually changes, and by how many stages.',
			prereqs: [],
			generatorId: 'stats.stat-changes',
		},
	],
};
