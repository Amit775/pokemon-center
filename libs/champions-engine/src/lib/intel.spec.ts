import { buildOpponentIntel, UsageStat } from './intel';
import { moves, species, natures, spread } from './testing/fixtures';

const garchompFallback = {
	species: species.garchomp,
	nature: natures.serious,
	statPoints: spread({ attack: 32, speed: 32 }),
	ability: 'rough-skin',
	item: null,
	moves: [moves.earthquake, moves.dragonClaw],
};

const abilityOptions = [{ slug: 'rough-skin', name: 'Rough Skin', effectText: 'Hurts on contact.', isHidden: false }];

describe('buildOpponentIntel', () => {
	it('falls back to the inferred moves and ability when there is no usage data', () => {
		const intel = buildOpponentIntel(garchompFallback, [moves.earthquake, moves.dragonClaw], abilityOptions, null, null, {});

		expect(intel.predictedMoves).toEqual([
			{ value: moves.earthquake, source: 'inferred' },
			{ value: moves.dragonClaw, source: 'inferred' },
		]);
		expect(intel.predictedAbility).toEqual({ value: abilityOptions[0], source: 'inferred' });
		expect(intel.predictedItem).toBeNull();
		expect(intel.megaPreview).toBeNull();
	});

	it('prefers usage-ranked moves and ability over the inferred fallback when they resolve against the learnset', () => {
		const usage: UsageStat = {
			pokemonSlug: 'garchomp',
			moves: [
				{ moveSlug: 'dragon-claw', usagePercent: 80 },
				{ moveSlug: 'earthquake', usagePercent: 95 },
			],
			abilities: [{ abilitySlug: 'rough-skin', usagePercent: 100 }],
			items: [{ itemSlug: 'choice-scarf', usagePercent: 40 }],
			megaRate: null,
			sampleSize: 1000,
			asOfRegulation: 'M-C',
		};

		const intel = buildOpponentIntel(garchompFallback, [moves.earthquake, moves.dragonClaw], abilityOptions, null, usage, {});

		expect(intel.predictedMoves).toEqual([
			{ value: moves.earthquake, source: 'usage', confidence: 95 },
			{ value: moves.dragonClaw, source: 'usage', confidence: 80 },
		]);
		expect(intel.predictedAbility).toEqual({ value: abilityOptions[0], source: 'usage', confidence: 100 });
		expect(intel.predictedItem).toEqual({ value: 'choice-scarf', source: 'usage', confidence: 40 });
		expect(intel.build.item).toBe('choice-scarf');
	});

	it('ignores usage moves that do not resolve against the learnset and falls back instead', () => {
		const usage: UsageStat = {
			pokemonSlug: 'garchomp',
			moves: [{ moveSlug: 'stone-edge', usagePercent: 90 }],
			abilities: [],
			items: [],
			megaRate: null,
			sampleSize: 1000,
			asOfRegulation: 'M-C',
		};

		const intel = buildOpponentIntel(garchompFallback, [moves.earthquake, moves.dragonClaw], abilityOptions, null, usage, {});

		expect(intel.predictedMoves).toEqual([
			{ value: moves.earthquake, source: 'inferred' },
			{ value: moves.dragonClaw, source: 'inferred' },
		]);
	});

	it('reports a Mega preview with typeChanged set when the Mega form differs in typing', () => {
		const megaForm = {
			types: ['dragon', 'fire'],
			baseStats: { hp: 108, attack: 170, defense: 115, specialAttack: 120, specialDefense: 95, speed: 92 },
			ability: { slug: 'sand-force', name: 'Sand Force', effectText: null },
		};

		const intel = buildOpponentIntel(garchompFallback, [moves.earthquake], abilityOptions, megaForm, null, {});

		expect(intel.megaPreview).toEqual({ ...megaForm, typeChanged: true });
	});

	it('reports typeChanged false when the Mega form keeps the same typing', () => {
		const megaForm = {
			types: ['dragon', 'ground'],
			baseStats: { hp: 108, attack: 170, defense: 120, specialAttack: 90, specialDefense: 95, speed: 95 },
			ability: { slug: 'sand-force', name: 'Sand Force', effectText: null },
		};

		const intel = buildOpponentIntel(garchompFallback, [moves.earthquake], abilityOptions, megaForm, null, {});

		expect(intel.megaPreview?.typeChanged).toBe(false);
	});
});
