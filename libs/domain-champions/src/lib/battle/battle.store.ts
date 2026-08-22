import { computed, effect, inject } from '@angular/core';
import {
	CLEAR_FIELD,
	ChampionsBuild,
	FieldState,
	StatStage,
	bestMoveAgainst,
	damageRoll,
	formatKoVerdict,
	koVerdict,
	turnOrder,
} from '@pokemon-center/champions-engine';
import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { AdvisorStore } from '../advisor/advisor.store';

/**
 * Live battle state.
 *
 * Every design choice here answers to one constraint: **mid-battle you have about two
 * seconds**. If logging a turn takes a form, you will use this for a week and then stop. So
 * state is a handful of scalars a single tap can change, everything is persisted on every
 * mutation so a locked phone loses nothing, and the advice recomputes locally with no round
 * trip.
 */

export interface SideState {
	/** Index into the team held by the advisor store. */
	activeIndex: number;
	/** Remaining HP as a fraction, 0..1. */
	hpFraction: number;
	speedStage: StatStage;
	attackStage: StatStage;
	defenseStage: StatStage;
	isParalysed: boolean;
	hasMegaEvolved: boolean;
	/** Slugs of moves this side has been seen using. */
	revealedMoves: string[];
	/** Indices of team members that have fainted. */
	fainted: number[];
}

interface BattleState {
	turn: number;
	you: SideState;
	them: SideState;
	field: FieldState;
	/** Human-readable log, newest last. */
	log: string[];
}

const freshSide = (): SideState => ({
	activeIndex: 0,
	hpFraction: 1,
	speedStage: 0,
	attackStage: 0,
	defenseStage: 0,
	isParalysed: false,
	hasMegaEvolved: false,
	revealedMoves: [],
	fainted: [],
});

const initialState: BattleState = { turn: 1, you: freshSide(), them: freshSide(), field: CLEAR_FIELD, log: [] };

const STORAGE_KEY = 'pokemon-center.champions-battle.v1';

function hydrate(): BattleState {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return initialState;
		const parsed = JSON.parse(raw) as Partial<BattleState>;
		return {
			turn: parsed.turn ?? 1,
			you: { ...freshSide(), ...parsed.you },
			them: { ...freshSide(), ...parsed.them },
			field: { ...CLEAR_FIELD, ...parsed.field },
			log: parsed.log ?? [],
		};
	} catch {
		return initialState;
	}
}

const clampStage = (stage: number): StatStage => Math.max(-6, Math.min(6, stage)) as StatStage;

/** Shared with every other surface that shows a verdict; see `formatKoVerdict`. */
const koLabel = formatKoVerdict;

export const BattleStore = signalStore(
	{ providedIn: 'root' },
	withState(initialState),
	withComputed((store) => {
		const advisor = inject(AdvisorStore);

		const yourActive = computed<ChampionsBuild | null>(() => advisor.myBuilds()[store.you().activeIndex] ?? null);
		const theirActive = computed<ChampionsBuild | null>(() => advisor.theirBuilds()[store.them().activeIndex] ?? null);

		/** Turn order for a same-priority turn — the question asked most often. */
		const order = computed(() => {
			const mine = yourActive();
			const theirs = theirActive();
			if (!mine || !theirs) return null;

			return turnOrder(
				{ build: mine, context: { boosts: { speed: store.you().speedStage }, isParalysed: store.you().isParalysed } },
				{ build: theirs, context: { boosts: { speed: store.them().speedStage }, isParalysed: store.them().isParalysed } },
				store.field(),
			);
		});

		/** Damage each of your moves does to their active, worst roll first. */
		const yourOptions = computed(() => {
			const mine = yourActive();
			const theirs = theirActive();
			const chart = advisor.typeChart();
			if (!mine || !theirs || Object.keys(chart).length === 0) return [];

			return mine.moves
				.filter((move) => move.damageClass !== 'STATUS' && (move.power ?? 0) > 0)
				.map((move) => {
					const result = damageRoll(mine, theirs, move, chart, {
						field: store.field(),
						attackerBoosts: { attack: store.you().attackStage, specialAttack: store.you().attackStage },
						defenderBoosts: { defense: store.them().defenseStage, specialDefense: store.them().defenseStage },
					});
					return { move, result, ko: koVerdict(result, store.them().hpFraction) };
				})
				.sort((a, b) => b.result.min - a.result.min);
		});

		/** What their active does to you — the half most advisors leave out. */
		const theirThreat = computed(() => {
			const mine = yourActive();
			const theirs = theirActive();
			const chart = advisor.typeChart();
			if (!mine || !theirs || Object.keys(chart).length === 0) return null;

			const best = bestMoveAgainst(theirs, mine, chart, {
				field: store.field(),
				attackerBoosts: { attack: store.them().attackStage, specialAttack: store.them().attackStage },
				defenderBoosts: { defense: store.you().defenseStage, specialDefense: store.you().defenseStage },
			});

			return best ? { ...best, ko: koVerdict(best.result, store.you().hpFraction) } : null;
		});

		return {
			yourActive,
			theirActive,
			order,
			yourOptions,
			theirThreat,
			isReady: computed(() => yourActive() !== null && theirActive() !== null),

			/** One sentence a trainer can act on without reading the numbers. */
			headline: computed(() => {
				const best = yourOptions()[0];
				const threat = theirThreat();
				const turn = order();
				if (!best || !turn) return null;

				const first = turn.order === 'you-first' ? 'You move first' : turn.order === 'they-first' ? 'They move first' : 'Speed tie';
				const yours = `${best.move.name} is a ${koLabel(best.ko)}`;
				const theirs = threat ? `; ${threat.move.name} is a ${koLabel(threat.ko)} on you` : '';
				return `${first}. ${yours}${theirs}.`;
			}),
		};
	}),
	withMethods((store) => {
		const push = (line: string) => patchState(store, { log: [...store.log(), `T${store.turn()}: ${line}`].slice(-40) });

		return {
			setActive(side: 'you' | 'them', index: number): void {
				patchState(store, {
					[side]: { ...store[side](), activeIndex: index, attackStage: 0, defenseStage: 0, speedStage: 0 },
				} as Partial<BattleState>);
				push(`${side === 'you' ? 'You' : 'They'} switched.`);
			},

			/** Set remaining HP directly — the tracker offers taps, not a slider. */
			setHp(side: 'you' | 'them', fraction: number): void {
				patchState(store, { [side]: { ...store[side](), hpFraction: Math.max(0, Math.min(1, fraction)) } } as Partial<BattleState>);
			},

			/** Subtract a chunk of HP in one tap. */
			chip(side: 'you' | 'them', fraction: number): void {
				const next = Math.max(0, store[side]().hpFraction - fraction);
				patchState(store, { [side]: { ...store[side](), hpFraction: next } } as Partial<BattleState>);
				push(`${side === 'you' ? 'You' : 'They'} dropped to ${Math.round(next * 100)}%.`);
			},

			adjustStage(side: 'you' | 'them', stat: 'attackStage' | 'defenseStage' | 'speedStage', delta: number): void {
				const current = store[side]();
				patchState(store, { [side]: { ...current, [stat]: clampStage(current[stat] + delta) } } as Partial<BattleState>);
			},

			toggleParalysis(side: 'you' | 'them'): void {
				const current = store[side]();
				patchState(store, { [side]: { ...current, isParalysed: !current.isParalysed } } as Partial<BattleState>);
				push(`${side === 'you' ? 'You' : 'They'} ${current.isParalysed ? 'cured' : 'got'} paralysis.`);
			},

			toggleMega(side: 'you' | 'them'): void {
				const current = store[side]();
				patchState(store, { [side]: { ...current, hasMegaEvolved: !current.hasMegaEvolved } } as Partial<BattleState>);
			},

			/**
			 * Record a move the opponent actually used.
			 *
			 * This is the harvesting hook: every revealed move narrows the inference for this
			 * battle and, once the corpus is worth keeping, becomes usage data nobody else has.
			 */
			revealMove(side: 'you' | 'them', slug: string, name: string): void {
				const current = store[side]();
				if (current.revealedMoves.includes(slug)) return;
				patchState(store, { [side]: { ...current, revealedMoves: [...current.revealedMoves, slug] } } as Partial<BattleState>);
				push(`${side === 'you' ? 'You' : 'They'} revealed ${name}.`);
			},

			faint(side: 'you' | 'them'): void {
				const current = store[side]();
				const fainted = [...new Set([...current.fainted, current.activeIndex])];
				patchState(store, { [side]: { ...current, fainted, hpFraction: 0 } } as Partial<BattleState>);
				push(`${side === 'you' ? 'Yours' : 'Theirs'} fainted.`);
			},

			setField(patch: Partial<FieldState>): void {
				patchState(store, { field: { ...store.field(), ...patch } });
			},

			nextTurn(): void {
				patchState(store, { turn: store.turn() + 1 });
			},

			reset(): void {
				patchState(store, { turn: 1, you: freshSide(), them: freshSide(), field: CLEAR_FIELD, log: [] });
			},
		};
	}),
	withHooks({
		onInit(store) {
			patchState(store, hydrate());
			// Persisted on every change: a locked phone or a tab switch must lose nothing.
			effect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(getState(store))));
		},
	}),
);
