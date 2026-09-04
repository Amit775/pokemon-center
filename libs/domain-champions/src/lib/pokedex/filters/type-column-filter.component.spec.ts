import { TestBed } from '@angular/core/testing';
import type { FilterDisplayParams } from 'ag-grid-community';
import { PokedexStore } from '../pokedex.store';
import type { PokedexEntry } from '../pokedex-filter';
import { TypeColumnFilterComponent, type TypeColumnFilterModel } from './type-column-filter.component';

const TYPES = [
	{ slug: 'fire', name: 'Fire' },
	{ slug: 'water', name: 'Water' },
	{ slug: 'flying', name: 'Flying' },
	{ slug: 'grass', name: 'Grass' },
];

function render(initialModel: TypeColumnFilterModel | null = null) {
	TestBed.configureTestingModule({
		providers: [{ provide: PokedexStore, useValue: { types: () => TYPES } }],
	});

	const onModelChange = jest.fn();
	const fixture = TestBed.createComponent(TypeColumnFilterComponent);
	fixture.componentInstance.agInit({
		model: initialModel,
		onModelChange,
	} as unknown as FilterDisplayParams<PokedexEntry, unknown, TypeColumnFilterModel>);
	fixture.detectChanges();

	return { fixture, onModelChange };
}

/** The picker renders one button per type, its text content the type slug (the chip's label). */
function buttonFor(fixture: { nativeElement: HTMLElement }, slug: string): HTMLButtonElement {
	const button = [...fixture.nativeElement.querySelectorAll<HTMLButtonElement>('button')].find(
		(candidate) => candidate.textContent?.trim() === slug,
	);
	if (!button) throw new Error(`No button found for type "${slug}"`);
	return button;
}

/**
 * `TypePickerComponent` debounces a single click behind a real (non-zone) `setTimeout` so it can
 * tell it apart from the first half of a double click — this app is zoneless, so `fakeAsync`/`tick`
 * don't intercept it. Jest's fake timers do.
 */
function click(button: HTMLButtonElement): void {
	button.click();
	jest.advanceTimersByTime(250);
}

function doubleClick(button: HTMLButtonElement): void {
	button.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));
}

describe('TypeColumnFilterComponent', () => {
	beforeEach(() => jest.useFakeTimers());
	afterEach(() => jest.useRealTimers());

	it('wraps champions-type-picker rather than reimplementing the chip row', () => {
		const { fixture } = render();
		expect(fixture.nativeElement.querySelector('champions-type-picker')).not.toBeNull();
	});

	it('single click selects a type in exact mode', () => {
		const { fixture, onModelChange } = render();

		click(buttonFor(fixture, 'fire'));

		expect(onModelChange).toHaveBeenCalledWith({ types: ['fire'], mode: 'exact' });
	});

	it('caps the exact-mode selection at two, dropping the oldest', () => {
		const { fixture, onModelChange } = render();

		click(buttonFor(fixture, 'fire'));
		fixture.detectChanges();

		click(buttonFor(fixture, 'water'));
		fixture.detectChanges();

		click(buttonFor(fixture, 'flying'));

		// fire was the oldest of the three single clicks — it is the one dropped, not flying
		// (a dead control that stopped accepting the third click would be worse).
		expect(onModelChange).toHaveBeenLastCalledWith({ types: ['water', 'flying'], mode: 'exact' });
	});

	it('double click switches to any mode with no cap, keeping the existing selection', () => {
		// Arrives already holding a two-chip exact selection — the state a real user would be in
		// after two single clicks — then double-clicks a third type.
		const { fixture, onModelChange } = render({ types: ['fire', 'water'], mode: 'exact' });

		doubleClick(buttonFor(fixture, 'flying'));

		expect(onModelChange).toHaveBeenCalledWith({ types: ['fire', 'water', 'flying'], mode: 'any' });
	});

	it('a single click arriving from any mode starts the selection over', () => {
		// any mode with an unrelated selection already active.
		const { fixture, onModelChange } = render({ types: ['fire', 'water', 'flying'], mode: 'any' });

		click(buttonFor(fixture, 'grass'));

		expect(onModelChange).toHaveBeenCalledWith({ types: ['grass'], mode: 'exact' });
	});

	it('clears the model (passes null) when the last chip is removed', () => {
		const { fixture, onModelChange } = render({ types: ['fire'], mode: 'exact' });

		// Double-clicking the only selected chip toggles it off, emptying the selection.
		doubleClick(buttonFor(fixture, 'fire'));

		expect(onModelChange).toHaveBeenCalledWith(null);
	});
});
