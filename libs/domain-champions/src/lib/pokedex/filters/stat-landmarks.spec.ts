import type { PokedexEntry } from '../pokedex-filter';
import { pickLandmarks } from './stat-landmarks';

function entry(overrides: Partial<PokedexEntry>): PokedexEntry {
	return {
		id: 1,
		slug: 'bulbasaur',
		name: 'Bulbasaur',
		nationalPokedexNumber: 1,
		types: ['grass', 'poison'],
		baseStats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45, total: 318 },
		isMega: false,
		hasMega: false,
		megaOfSlug: null,
		abilitySlugs: ['overgrow'],
		abilityNames: ['Overgrow'],
		...overrides,
	};
}

describe('pickLandmarks', () => {
	it('picks the lowest-dex-number Pokémon at each distinct value', () => {
		const entries = [
			entry({ id: 1, slug: 'bulbasaur', name: 'Bulbasaur', nationalPokedexNumber: 1, baseStats: { ...entry({}).baseStats, speed: 45 } }),
			// Same speed as Bulbasaur, but a much higher dex number — must lose the tie.
			entry({ id: 25, slug: 'pikachu', name: 'Pikachu', nationalPokedexNumber: 25, baseStats: { ...entry({}).baseStats, speed: 45 } }),
			entry({ id: 135, slug: 'jolteon', name: 'Jolteon', nationalPokedexNumber: 135, baseStats: { ...entry({}).baseStats, speed: 130 } }),
		];

		const landmarks = pickLandmarks(entries, (candidate) => candidate.baseStats.speed);

		expect(landmarks).toEqual([
			{ value: 45, id: 1, name: 'Bulbasaur', types: ['grass', 'poison'], pokedexNumber: 1 },
			{ value: 130, id: 135, name: 'Jolteon', types: ['grass', 'poison'], pokedexNumber: 135 },
		]);
	});

	it('sorts the result by value ascending regardless of input order', () => {
		const entries = [
			entry({ id: 135, slug: 'jolteon', nationalPokedexNumber: 135, baseStats: { ...entry({}).baseStats, speed: 130 } }),
			entry({ id: 1, slug: 'bulbasaur', nationalPokedexNumber: 1, baseStats: { ...entry({}).baseStats, speed: 45 } }),
		];

		const landmarks = pickLandmarks(entries, (candidate) => candidate.baseStats.speed);

		expect(landmarks.map((landmark) => landmark.value)).toEqual([45, 130]);
	});

	it('ignores Mega forms — base forms only', () => {
		const entries = [
			entry({ id: 15, slug: 'beedrill', name: 'Beedrill', nationalPokedexNumber: 15, isMega: false, baseStats: { ...entry({}).baseStats, speed: 75 } }),
			// A Mega with a speed value no base form reaches must not surface as a landmark.
			entry({
				id: 9015,
				slug: 'beedrill-mega',
				name: 'Mega Beedrill',
				nationalPokedexNumber: 15,
				isMega: true,
				megaOfSlug: 'beedrill',
				baseStats: { ...entry({}).baseStats, speed: 145 },
			}),
		];

		const landmarks = pickLandmarks(entries, (candidate) => candidate.baseStats.speed);

		expect(landmarks).toEqual([{ value: 75, id: 15, name: 'Beedrill', types: ['grass', 'poison'], pokedexNumber: 15 }]);
	});
});
