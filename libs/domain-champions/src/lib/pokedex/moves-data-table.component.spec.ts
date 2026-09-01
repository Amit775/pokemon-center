import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovesDataTableComponent } from './moves-data-table.component';
import type { DetailMove } from './move.model';

function move(overrides: Partial<DetailMove> & Pick<DetailMove, 'id' | 'name'>): DetailMove {
	return {
		type: 'normal',
		power: null,
		accuracy: null,
		pp: null,
		priority: 0,
		flags: [],
		effectText: null,
		effectChance: null,
		isOverridden: false,
		overrideNote: null,
		...overrides,
	};
}

/**
 * Deliberately not in alphabetical or numeric order, so source order is distinguishable from
 * either sorted order — and two of the five have a null power, which is the case the whole
 * `sortUndefined` story exists for.
 */
const learnset: DetailMove[] = [
	move({ id: 1, name: 'Ember', type: 'fire', power: 40, accuracy: 100, pp: 25, effectText: 'May burn the target.', effectChance: 10 }),
	move({ id: 2, name: 'Growl', type: 'normal', accuracy: 100, pp: 40, effectText: 'Lowers the target Attack.' }),
	move({
		id: 3,
		name: 'Flamethrower',
		type: 'fire',
		power: 90,
		accuracy: 100,
		pp: 15,
		isOverridden: true,
		overrideNote: 'Champions raised its power from 90 to 95.',
		flags: ['contact', 'punch'],
	}),
	move({ id: 4, name: 'Quick Attack', type: 'normal', power: 40, accuracy: 100, pp: 30, priority: 1 }),
	move({ id: 5, name: 'Agility', type: 'psychic', pp: 30 }),
];

@Component({
	selector: 'champions-moves-data-table-host',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MovesDataTableComponent],
	template: `<champions-moves-data-table [moves]="moves()" [isApproximate]="approximate()" />`,
})
class MovesDataTableHostComponent {
	readonly moves = signal<readonly DetailMove[]>(learnset);
	readonly approximate = signal(false);
}

/**
 * `src/test-setup.ts` calls `setupZonelessTestEnv()`, so these run in the application's change
 * detection model: no Zone.js, and `detectChanges()` repaints only what a signal invalidated. Every
 * assertion is therefore on rendered text rather than on state — state alone would prove nothing
 * about the repaint, which is the whole question.
 */
describe('MovesDataTableComponent', () => {
	let fixture: ComponentFixture<MovesDataTableHostComponent>;
	let host: MovesDataTableHostComponent;

	function element(): HTMLElement {
		return fixture.nativeElement as HTMLElement;
	}

	function bodyRows(): HTMLElement[] {
		return Array.from(element().querySelectorAll<HTMLElement>('[role="row"]:not(.header-row)'));
	}

	function cellsOf(row: HTMLElement): string[] {
		return Array.from(row.querySelectorAll<HTMLElement>('.cell')).map((cell) => (cell.textContent ?? '').trim());
	}

	function column(index: number): string[] {
		return bodyRows().map((row) => cellsOf(row)[index]);
	}

	/**
	 * The Move column renders a whole component, so its `textContent` is the name run together with
	 * the badge, the effect, the tags and the note. The name is the cell's only bare text child —
	 * everything else is wrapped in an element — so that is what this reads.
	 */
	function moveNames(): string[] {
		return bodyRows().map((row) => {
			const cell = row.querySelector('champions-move-name-cell');
			return Array.from(cell?.childNodes ?? [])
				.filter((node) => node.nodeType === Node.TEXT_NODE)
				.map((node) => (node.textContent ?? '').trim())
				.find(Boolean) as string;
		});
	}

	function headerButton(label: string): HTMLButtonElement {
		const found = Array.from(element().querySelectorAll<HTMLButtonElement>('.header-cell button')).find((button) =>
			(button.textContent ?? '').includes(label),
		);
		if (!found) throw new Error(`no sortable header called ${label}`);
		return found;
	}

	/** A real click, then a repaint — the event has to travel through Angular's listener on its own. */
	function clickHeader(label: string): void {
		headerButton(label).click();
		fixture.detectChanges();
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [MovesDataTableHostComponent] }).compileComponents();
		fixture = TestBed.createComponent(MovesDataTableHostComponent);
		host = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('renders every move in source order before anything is sorted', () => {
		expect(moveNames()).toEqual(['Ember', 'Growl', 'Flamethrower', 'Quick Attack', 'Agility']);
	});

	/**
	 * The regression test for the defect this component was rewritten around, and it has to assert
	 * **both** directions.
	 *
	 * `sortUndefined: 1` — the numeric form, and what the default falls back to — resolves to
	 * "undefined last ascending, undefined **first** descending", because the comparator's
	 * `sortInt` is inverted by `if (isDesc) sortInt *= -1`. Numeric columns sort descending first,
	 * so the numeric form puts every status move at the top of the very first click. The string
	 * form returns early and bypasses the flip, which is why the column declares `'last'`.
	 */
	it('keeps powerless moves last in both directions of a Power sort', () => {
		clickHeader('Power');
		expect(moveNames()).toEqual(['Flamethrower', 'Ember', 'Quick Attack', 'Growl', 'Agility']);

		clickHeader('Power');
		expect(moveNames()).toEqual(['Ember', 'Quick Attack', 'Flamethrower', 'Growl', 'Agility']);
	});

	it('prints an em-dash for a missing number rather than an empty cell', () => {
		// The accessor maps null to undefined so the comparator can see it, and at that point
		// `mapToFlexRenderTypedContent` classifies the value as `kind: 'null'` and the renderer
		// emits nothing at all. The explicit `cell` on the column is what puts the dash back.
		expect(column(2)).toEqual(['40', '—', '90', '40', '—']);
		expect(column(3)).toEqual(['100', '100', '100', '100', '—']);
		expect(column(4)).toEqual(['25', '40', '15', '30', '30']);
	});

	it('sorts the Move column alphabetically', () => {
		clickHeader('Move');
		expect(moveNames()).toEqual(['Agility', 'Ember', 'Flamethrower', 'Growl', 'Quick Attack']);
	});

	it('renders the whole rich cell, not just the move name', () => {
		const flamethrower = bodyRows()[2];
		const cell = flamethrower.querySelector('champions-move-name-cell');

		expect(cell?.querySelector('.note')?.textContent?.trim()).toBe('Champions raised its power from 90 to 95.');
		expect(Array.from(cell?.querySelectorAll('.tag') ?? []).map((tag) => tag.textContent?.trim())).toEqual([
			'Contact',
			'Punch',
		]);

		const ember = bodyRows()[0].querySelector('champions-move-name-cell');
		expect(ember?.querySelector('.effect')?.textContent).toContain('May burn the target.');
		expect(ember?.querySelector('.chance')?.textContent?.trim()).toBe('10% chance');

		// Priority rides as a tag rather than a column, because turn order is read first.
		expect(bodyRows()[3].querySelector('.tag.priority')?.textContent?.trim()).toBe('Priority +1');
	});

	it('marks the rows Champions changed, and only those', () => {
		// jsdom strips component styles, so this proves the hook fires and nothing about the tint.
		// Only the browser pass can say the row looks different.
		expect(bodyRows().map((row) => row.classList.contains('marked'))).toEqual([false, false, true, false, false]);
	});

	it('renders the type chip rather than the raw type name', () => {
		expect(bodyRows()[0].querySelector('pokedex-type-chip')?.textContent?.trim()).toBe('fire');
	});

	it('counts the changed moves in the lead paragraph, and says nothing when there are none', () => {
		expect(element().querySelector('.lead')?.textContent).toContain('1');

		host.moves.set(learnset.filter((entry) => !entry.isOverridden));
		fixture.detectChanges();

		expect(element().querySelector('.lead')).toBeNull();
	});

	it('shows the caveat only for an approximated learnset', () => {
		expect(element().querySelector('.caveat')).toBeNull();

		host.approximate.set(true);
		fixture.detectChanges();

		expect(element().querySelector('.caveat')?.textContent).toContain('supplemented from recent main-series games');
	});
});
