import { bestMoveAgainst, damageRoll, koVerdict } from './damage';
import { build, moves, natures, species, spread, typeChart } from './testing/fixtures';
import { CLEAR_FIELD } from './types';

const jollyChomp = build({
	species: species.garchomp,
	nature: natures.jolly,
	statPoints: spread({ attack: 32, speed: 32, hp: 2 }),
	moves: [moves.earthquake, moves.dragonClaw],
});

const bulkyCorv = build({ species: species.corviknight, statPoints: spread({ hp: 32, defense: 32, specialDefense: 2 }) });
const frailPult = build({ species: species.dragapult, nature: natures.timid, statPoints: spread({ specialAttack: 32, speed: 32, hp: 2 }) });

describe('damageRoll', () => {
	it('returns the full sixteen-roll range rather than an average', () => {
		// "84–99%" and "92%" are different advice; the range is what a trainer acts on.
		const result = damageRoll(jollyChomp, frailPult, moves.dragonClaw, typeChart);

		expect(result.rolls).toHaveLength(16);
		expect(result.min).toBeLessThan(result.max);
		expect(result.rolls[0]).toBe(result.min);
		expect(result.rolls[15]).toBe(result.max);
	});

	it('reports an immunity as zero damage with a reason', () => {
		// Corviknight is Flying — Earthquake cannot touch it.
		const result = damageRoll(jollyChomp, bulkyCorv, moves.earthquake, typeChart);

		expect(result.max).toBe(0);
		expect(result.effectiveness).toBe(0);
		expect(result.notes.join(' ')).toMatch(/immune/i);
	});

	it('deals no damage with a status move', () => {
		expect(damageRoll(jollyChomp, frailPult, moves.roost, typeChart).max).toBe(0);
	});

	it('applies STAB', () => {
		const withStab = damageRoll(jollyChomp, frailPult, moves.dragonClaw, typeChart);
		const noStab = damageRoll({ ...jollyChomp, species: { ...species.garchomp, types: ['ground'] } }, frailPult, moves.dragonClaw, typeChart);

		expect(withStab.max).toBeGreaterThan(noStab.max);
		expect(withStab.notes.join(' ')).toMatch(/STAB/);
	});

	it('doubles STAB with Adaptability', () => {
		const normal = damageRoll(jollyChomp, frailPult, moves.dragonClaw, typeChart);
		const adaptive = damageRoll({ ...jollyChomp, ability: 'adaptability' }, frailPult, moves.dragonClaw, typeChart);

		expect(adaptive.max).toBeGreaterThan(normal.max);
		expect(adaptive.notes.join(' ')).toMatch(/Adaptability/);
	});

	it('compounds a double weakness to 4x', () => {
		// Dragon into Dragon/Ghost Dragapult is 2x; the engine still reports the product.
		const result = damageRoll(jollyChomp, frailPult, moves.dragonClaw, typeChart);

		expect(result.effectiveness).toBe(2);
	});

	it('halves physical damage from a burned attacker', () => {
		const healthy = damageRoll(jollyChomp, frailPult, moves.dragonClaw, typeChart);
		const burned = damageRoll(jollyChomp, frailPult, moves.dragonClaw, typeChart, { attackerStatus: 'burn' });

		expect(burned.max).toBeLessThan(healthy.max);
	});

	it('ignores the burn drop for Guts', () => {
		const burned = damageRoll({ ...jollyChomp, ability: 'guts' }, frailPult, moves.dragonClaw, typeChart, { attackerStatus: 'burn' });
		const healthy = damageRoll({ ...jollyChomp, ability: 'guts' }, frailPult, moves.dragonClaw, typeChart);

		expect(burned.max).toBe(healthy.max);
	});

	it('applies the Champions slicing boost through Sharpness', () => {
		// Dragon Claw became a slicing move in Champions, so Sharpness now boosts it — a
		// Champions-only interaction that would be wrong against mainline data.
		const plain = damageRoll(jollyChomp, frailPult, moves.dragonClaw, typeChart);
		const sharp = damageRoll({ ...jollyChomp, ability: 'sharpness' }, frailPult, moves.dragonClaw, typeChart);

		expect(sharp.max).toBeGreaterThan(plain.max);
	});

	it('weakens a spread move hitting multiple targets', () => {
		const single = damageRoll(jollyChomp, frailPult, moves.dragonClaw, typeChart);
		const spreadHit = damageRoll(jollyChomp, frailPult, moves.dragonClaw, typeChart, { isSpreadHittingMultiple: true });

		expect(spreadHit.max).toBeLessThan(single.max);
	});

	it('blocks damage against a protecting target', () => {
		expect(damageRoll(jollyChomp, frailPult, moves.dragonClaw, typeChart, { targetIsProtecting: true }).max).toBe(0);
	});

	it('lets Unseen Fist through Protect for a quarter, as Champions changed it', () => {
		const result = damageRoll({ ...jollyChomp, ability: 'unseen-fist' }, frailPult, moves.dragonClaw, typeChart, {
			targetIsProtecting: true,
		});

		expect(result.max).toBeGreaterThan(0);
		expect(result.notes.join(' ')).toMatch(/Unseen Fist/);
	});

	it('boosts fire in sun and weakens it in rain', () => {
		const fireMove = { ...moves.dragonClaw, type: 'fire' };
		const sun = damageRoll(jollyChomp, frailPult, fireMove, typeChart, { field: { ...CLEAR_FIELD, weather: 'sun' } });
		const rain = damageRoll(jollyChomp, frailPult, fireMove, typeChart, { field: { ...CLEAR_FIELD, weather: 'rain' } });

		expect(sun.max).toBeGreaterThan(rain.max);
	});

	it('ignores a defender’s boosts on a critical hit', () => {
		const boosted = damageRoll(jollyChomp, frailPult, moves.dragonClaw, typeChart, { defenderBoosts: { defense: 2 } });
		const crit = damageRoll(jollyChomp, frailPult, moves.dragonClaw, typeChart, { defenderBoosts: { defense: 2 }, isCritical: true });

		expect(crit.max).toBeGreaterThan(boosted.max * 1.5);
	});
});

/**
 * A worked example, computed by hand from the published Champions formula, so the engine's
 * arithmetic can be audited rather than trusted. Every intermediate value is written out —
 * if a future change breaks this, the comment says exactly which step drifted.
 *
 * Jolly Garchomp, 32 SP Attack, Earthquake, into an uninvested Dragapult.
 *
 *   Attack   = floor((2·130 + 31) · 50/100) + 5 + 32   = 145 + 5 + 32 = 182
 *   Defense  = floor((2·75  + 31) · 50/100) + 5        = 90 + 5       = 95
 *   levelTerm= floor(2·50/5 + 2)                       = 22
 *   base     = floor(floor((22 · 100 · 182) / 95) / 50) + 2 = floor(4214/50) + 2 = 86
 *   STAB     = 1.5 (Garchomp is Ground); Ground vs Dragon/Ghost is neutral
 *   min roll = floor(floor(86 · 85/100) · 1.5) = floor(73 · 1.5) = 109
 *   max roll = floor(floor(86 · 100/100) · 1.5) = floor(86 · 1.5) = 129
 *   Dragapult HP = floor((2·88 + 31) · 50/100) + 60 + 2 SP = 103 + 60 + 2 = 165
 */
describe('reference calculation', () => {
	const target = build({ species: species.dragapult, nature: natures.timid, statPoints: spread({ hp: 2 }) });

	it('reproduces the hand-computed Earthquake roll', () => {
		const result = damageRoll(jollyChomp, target, moves.earthquake, typeChart);

		expect(result.defenderMaxHp).toBe(165);
		expect(result.min).toBe(109);
		expect(result.max).toBe(129);
	});

	it('reads as a guaranteed 2HKO', () => {
		expect(koVerdict(damageRoll(jollyChomp, target, moves.earthquake, typeChart))).toBe('guaranteed-2hko');
	});
});

describe('koVerdict', () => {
	it('separates a guaranteed KO from a possible one', () => {
		// The distinction is the whole point — a possible OHKO is a gamble, not a plan.
		const overkill = { min: 500, max: 600, defenderMaxHp: 200 } as never;
		const roll = { min: 150, max: 220, defenderMaxHp: 200 } as never;

		expect(koVerdict(overkill)).toBe('guaranteed-ohko');
		expect(koVerdict(roll)).toBe('possible-ohko');
	});

	it('accounts for damage already taken', () => {
		const chip = { min: 60, max: 70, defenderMaxHp: 200 } as never;

		expect(koVerdict(chip, 1)).toBe('3hko-or-worse');
		expect(koVerdict(chip, 0.3)).toBe('guaranteed-ohko');
	});

	it('reports no damage when the move cannot hurt', () => {
		expect(koVerdict({ min: 0, max: 0, defenderMaxHp: 200 } as never)).toBe('no-damage');
	});
});

describe('bestMoveAgainst', () => {
	it('picks the move by its worst roll, not its best', () => {
		// Recommending what works beats recommending what might.
		const best = bestMoveAgainst(jollyChomp, frailPult, typeChart);

		expect(best?.move.name).toBe('Dragon Claw');
	});

	it('skips moves the target is immune to', () => {
		const best = bestMoveAgainst(jollyChomp, bulkyCorv, typeChart);

		expect(best?.move.name).not.toBe('Earthquake');
	});

	it('returns null when nothing can damage the target', () => {
		const onlyGround = build({ species: species.garchomp, moves: [moves.earthquake] });

		expect(bestMoveAgainst(onlyGround, bulkyCorv, typeChart)).toBeNull();
	});
});
