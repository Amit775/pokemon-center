import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import type { FilterDisplayParams } from 'ag-grid-community';
import { STAT_BOUNDS, TOTAL_BOUNDS, type PokedexEntry, type Range } from '../pokedex-filter';
import { PokedexStore } from '../pokedex.store';
import { StatRangeComponent, type RangeLandmark } from '../stat-range.component';
import { StatRangeColumnFilterComponent, type StatRangeColumnFilterParams } from './stat-range-column-filter.component';

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

const ENTRIES: PokedexEntry[] = [
	entry({ id: 1, slug: 'bulbasaur', name: 'Bulbasaur', nationalPokedexNumber: 1, baseStats: { ...entry({}).baseStats, speed: 45 } }),
	entry({ id: 135, slug: 'jolteon', name: 'Jolteon', nationalPokedexNumber: 135, baseStats: { ...entry({}).baseStats, speed: 130 } }),
	// A Mega must never surface as a landmark — see `stat-landmarks.spec.ts` for the direct test.
	entry({
		id: 9015,
		slug: 'beedrill-mega',
		name: 'Mega Beedrill',
		nationalPokedexNumber: 15,
		isMega: true,
		megaOfSlug: 'beedrill',
		baseStats: { ...entry({}).baseStats, speed: 999 },
	}),
];

function render(config: StatRangeColumnFilterParams, model: Range | null = null) {
	TestBed.configureTestingModule({
		providers: [{ provide: PokedexStore, useValue: { entries: () => ENTRIES } }],
	});

	const onModelChange = jest.fn();
	const fixture = TestBed.createComponent(StatRangeColumnFilterComponent);
	fixture.componentInstance.agInit({
		model,
		colDef: { filterParams: config },
		onModelChange,
	} as unknown as FilterDisplayParams<PokedexEntry, unknown, Range>);
	fixture.detectChanges();

	return { fixture, onModelChange, statRange: statRangeInstance(fixture) };
}

function statRangeInstance(fixture: { debugElement: import('@angular/core').DebugElement }): StatRangeComponent {
	const debugElement = fixture.debugElement.query(By.directive(StatRangeComponent));
	if (!debugElement) throw new Error('champions-stat-range not rendered');
	return debugElement.componentInstance as StatRangeComponent;
}

describe('StatRangeColumnFilterComponent', () => {
	it('wraps champions-stat-range rather than reimplementing the slider', () => {
		const { fixture } = render({ statKey: 'speed', label: 'Speed', bounds: STAT_BOUNDS });
		expect(fixture.nativeElement.querySelector('champions-stat-range')).not.toBeNull();
	});

	it('seeds the slider bounds from the six-stat STAT_BOUNDS', () => {
		const { statRange } = render({ statKey: 'speed', label: 'Speed', bounds: STAT_BOUNDS });
		expect(statRange.bounds()).toEqual(STAT_BOUNDS);
	});

	it('seeds the slider bounds from TOTAL_BOUNDS for the total column', () => {
		const { statRange } = render({ statKey: 'total', label: 'Total', bounds: TOTAL_BOUNDS });
		expect(statRange.bounds()).toEqual(TOTAL_BOUNDS);
	});

	it('defaults the value to the full bounds when no model is applied yet', () => {
		const { statRange } = render({ statKey: 'speed', label: 'Speed', bounds: STAT_BOUNDS });
		expect(statRange.value()).toEqual(STAT_BOUNDS);
	});

	it('seeds the value from an existing applied model', () => {
		const { statRange } = render({ statKey: 'speed', label: 'Speed', bounds: STAT_BOUNDS }, [80, 130]);
		expect(statRange.value()).toEqual([80, 130]);
	});

	it('a narrowed range emits [min, max]', () => {
		const { fixture, onModelChange } = render({ statKey: 'speed', label: 'Speed', bounds: STAT_BOUNDS });

		fixture.debugElement.query(By.directive(StatRangeComponent)).triggerEventHandler('changed', [80, 130]);

		expect(onModelChange).toHaveBeenCalledWith([80, 130]);
	});

	it('a range widened back out to the full bounds reports the filter inactive (null)', () => {
		const { fixture, onModelChange } = render({ statKey: 'speed', label: 'Speed', bounds: STAT_BOUNDS }, [80, 130]);

		fixture.debugElement.query(By.directive(StatRangeComponent)).triggerEventHandler('changed', STAT_BOUNDS);

		expect(onModelChange).toHaveBeenCalledWith(null);
	});

	it('computes landmarks for the configured stat, excluding Mega forms', () => {
		const { statRange } = render({ statKey: 'speed', label: 'Speed', bounds: STAT_BOUNDS });
		const landmarks = statRange.landmarks() as readonly RangeLandmark[];

		expect(landmarks).toEqual([
			{ value: 45, id: 1, name: 'Bulbasaur', types: ['grass', 'poison'], pokedexNumber: 1 },
			{ value: 130, id: 135, name: 'Jolteon', types: ['grass', 'poison'], pokedexNumber: 135 },
		]);
	});
});
