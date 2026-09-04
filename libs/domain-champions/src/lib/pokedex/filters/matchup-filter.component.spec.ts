import { TestBed } from '@angular/core/testing';
import type { PokedexEntry } from '../pokedex-filter';
import { PokedexStore } from '../pokedex.store';
import { EMPTY_MATCHUP, ExternalFiltersStore } from './external-filters.store';
import { MatchupFilterComponent } from './matchup-filter.component';

const TYPES = [
	{ slug: 'dragon', name: 'Dragon' },
	{ slug: 'ground', name: 'Ground' },
	{ slug: 'fairy', name: 'Fairy' },
	{ slug: 'steel', name: 'Steel' },
];

function entry(overrides: Partial<PokedexEntry> & Pick<PokedexEntry, 'id' | 'slug' | 'name' | 'types'>): PokedexEntry {
	return {
		nationalPokedexNumber: overrides.id,
		baseStats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80, total: 480 },
		isMega: false,
		hasMega: false,
		megaOfSlug: null,
		abilitySlugs: [],
		abilityNames: [],
		...overrides,
	};
}

const garchomp = entry({ id: 1, slug: 'garchomp', name: 'Garchomp', types: ['dragon', 'ground'] });
const garchompMega = entry({ id: 2, slug: 'garchomp-mega', name: 'Mega Garchomp', types: ['dragon', 'ground'], isMega: true, megaOfSlug: 'garchomp' });
const gardevoir = entry({ id: 3, slug: 'gardevoir', name: 'Gardevoir', types: ['psychic', 'fairy'] });

const roster: PokedexEntry[] = [garchomp, garchompMega, gardevoir];

function render() {
	TestBed.configureTestingModule({
		providers: [{ provide: PokedexStore, useValue: { types: () => TYPES, entries: () => roster } }],
	});

	const fixture = TestBed.createComponent(MatchupFilterComponent);
	fixture.detectChanges();

	return { fixture, filters: TestBed.inject(ExternalFiltersStore) };
}

/** The picker renders one button per type, its text content the type slug (the chip's label). */
function typeButton(fixture: { nativeElement: HTMLElement }, slug: string): HTMLButtonElement {
	const button = [...fixture.nativeElement.querySelectorAll<HTMLButtonElement>('champions-type-picker button')].find(
		(candidate) => candidate.textContent?.trim() === slug,
	);
	if (!button) throw new Error(`No type button found for "${slug}"`);
	return button;
}

function directionButton(fixture: { nativeElement: HTMLElement }, label: 'Effective' | 'Resists'): HTMLButtonElement {
	const button = [...fixture.nativeElement.querySelectorAll<HTMLButtonElement>('.seg button')].find((candidate) => candidate.textContent?.trim() === label);
	if (!button) throw new Error(`No direction button found for "${label}"`);
	return button;
}

function mustFind<T extends Element>(root: { nativeElement: HTMLElement }, selector: string): T {
	const found = root.nativeElement.querySelector<T>(selector);
	if (!found) throw new Error(`No element found for "${selector}"`);
	return found;
}

function typeIntoAutocomplete(fixture: { nativeElement: HTMLElement; detectChanges(): void }, term: string): void {
	const input = mustFind<HTMLInputElement>(fixture, '.autocomplete input');
	input.value = term;
	input.dispatchEvent(new Event('input'));
	fixture.detectChanges();
}

/**
 * `TypePickerComponent` debounces a single click behind a real (non-zone) `setTimeout` so it can
 * tell it apart from the first half of a double click — this app is zoneless, so `fakeAsync`/`tick`
 * don't intercept it. Jest's fake timers do (same helper `type-column-filter.component.spec.ts` uses).
 */
function click(button: HTMLButtonElement): void {
	button.click();
	jest.advanceTimersByTime(250);
}

function doubleClick(button: HTMLButtonElement): void {
	button.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));
}

describe('MatchupFilterComponent', () => {
	beforeEach(() => jest.useFakeTimers());
	afterEach(() => jest.useRealTimers());

	it('wraps champions-type-picker rather than reimplementing the chip row', () => {
		const { fixture } = render();
		expect(fixture.nativeElement.querySelector('champions-type-picker')).not.toBeNull();
	});

	it('starts idle, mirroring ExternalFiltersStore', () => {
		const { filters } = render();
		expect(filters.matchup()).toEqual(EMPTY_MATCHUP);
	});

	it('single click selects a type in exact mode, through ExternalFiltersStore.setMatchup', () => {
		const { fixture, filters } = render();

		click(typeButton(fixture, 'dragon'));

		expect(filters.matchup()).toEqual({ types: ['dragon'], mode: 'exact', direction: 'resists' });
	});

	it('caps the exact-mode selection at two, dropping the oldest', () => {
		const { fixture, filters } = render();

		click(typeButton(fixture, 'dragon'));
		fixture.detectChanges();
		click(typeButton(fixture, 'ground'));
		fixture.detectChanges();
		click(typeButton(fixture, 'fairy'));

		// dragon was the oldest of the three single clicks — it is the one dropped.
		expect(filters.matchup().types).toEqual(['ground', 'fairy']);
	});

	it('double click switches to any mode with no cap, keeping the existing selection', () => {
		const { fixture, filters } = render();

		click(typeButton(fixture, 'dragon'));
		fixture.detectChanges();
		doubleClick(typeButton(fixture, 'ground'));

		expect(filters.matchup()).toEqual({ types: ['dragon', 'ground'], mode: 'any', direction: 'resists' });
	});

	it('the direction toggle switches Effective/Resists without touching the chips', () => {
		const { fixture, filters } = render();

		click(typeButton(fixture, 'dragon'));
		fixture.detectChanges();

		directionButton(fixture, 'Effective').click();
		fixture.detectChanges();

		expect(filters.matchup()).toEqual({ types: ['dragon'], mode: 'exact', direction: 'weak-to' });
		expect(directionButton(fixture, 'Effective').classList.contains('on')).toBe(true);
		expect(directionButton(fixture, 'Resists').classList.contains('on')).toBe(false);

		directionButton(fixture, 'Resists').click();
		fixture.detectChanges();

		expect(filters.matchup().direction).toBe('resists');
	});

	it('picking a Pokémon from the autocomplete fills the chips from its typing and shows the picked chip', () => {
		const { fixture, filters } = render();

		typeIntoAutocomplete(fixture, 'gard');

		const result = [...fixture.nativeElement.querySelectorAll<HTMLButtonElement>('.autocomplete li button')].find((button) =>
			button.textContent?.includes('Gardevoir'),
		);
		if (!result) throw new Error('No autocomplete result found for "Gardevoir"');
		result.click();
		fixture.detectChanges();

		expect(filters.matchup()).toEqual({ types: ['psychic', 'fairy'], mode: 'exact', direction: 'resists' });
		expect(fixture.nativeElement.querySelector('.picked')?.textContent).toContain('Gardevoir');
		expect(fixture.nativeElement.querySelector('.autocomplete')).toBeNull();
	});

	it('clearing the picked Pokémon empties the chips and brings back the autocomplete', () => {
		const { fixture, filters } = render();

		typeIntoAutocomplete(fixture, 'gard');
		mustFind<HTMLButtonElement>(fixture, '.autocomplete li button').click();
		fixture.detectChanges();

		mustFind<HTMLButtonElement>(fixture, '.picked button').click();
		fixture.detectChanges();

		expect(filters.matchup().types).toEqual([]);
		expect(fixture.nativeElement.querySelector('.picked')).toBeNull();
		expect(fixture.nativeElement.querySelector('.autocomplete')).not.toBeNull();
	});

	it('excludes Mega forms from the autocomplete results', () => {
		const { fixture } = render();

		typeIntoAutocomplete(fixture, 'gar');

		const names = [...fixture.nativeElement.querySelectorAll<HTMLButtonElement>('.autocomplete li button')].map((button) => button.textContent?.trim());
		expect(names).toContain('Garchomp');
		expect(names).not.toContain('Mega Garchomp');
	});
});
