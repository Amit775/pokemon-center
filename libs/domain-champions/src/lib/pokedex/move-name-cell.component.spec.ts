import { TestBed } from '@angular/core/testing';
import type { ICellRendererParams } from 'ag-grid-community';
import { MoveNameCellComponent } from './move-name-cell.component';
import type { DetailMove } from './move.model';

const baseMove: DetailMove = {
	id: 1,
	name: 'Aqua Jet',
	type: 'water',
	power: 40,
	accuracy: 100,
	pp: 20,
	priority: 1,
	flags: ['contact', 'protect', 'mirror'],
	effectText: null,
	effectChance: null,
	isOverridden: false,
};

function paramsFor(data: DetailMove | undefined): ICellRendererParams<DetailMove> {
	return { data } as ICellRendererParams<DetailMove>;
}

describe('MoveNameCellComponent', () => {
	it('renders the move name', () => {
		const fixture = TestBed.createComponent(MoveNameCellComponent);
		fixture.componentInstance.agInit(paramsFor(baseMove));
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent).toContain('Aqua Jet');
	});

	it('renders the effect text and chance when present', () => {
		const move: DetailMove = { ...baseMove, effectText: 'May burn the target.', effectChance: 10 };
		const fixture = TestBed.createComponent(MoveNameCellComponent);
		fixture.componentInstance.agInit(paramsFor(move));
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent).toContain('May burn the target.');
		expect(fixture.nativeElement.textContent).toContain('10% chance');
	});

	it('does not print a chance when the effect always happens', () => {
		const move: DetailMove = { ...baseMove, effectText: 'Raises the user’s Speed by one stage.', effectChance: 100 };
		const fixture = TestBed.createComponent(MoveNameCellComponent);
		fixture.componentInstance.agInit(paramsFor(move));
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent).not.toContain('% chance');
	});

	it('renders tags for the flags an ability hooks into, priority first', () => {
		const fixture = TestBed.createComponent(MoveNameCellComponent);
		fixture.componentInstance.agInit(paramsFor(baseMove));
		fixture.detectChanges();

		const tags = Array.from<HTMLElement>(fixture.nativeElement.querySelectorAll('.tag')).map((el) => el.textContent?.trim());
		// baseMove has priority 1 and the 'contact' flag; 'protect'/'mirror' are deliberately ignored.
		expect(tags).toEqual(['Priority +1', 'Contact']);
	});

	it('renders nothing for the null params.data guard path', () => {
		const fixture = TestBed.createComponent(MoveNameCellComponent);
		fixture.componentInstance.agInit(paramsFor(undefined));
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent.trim()).toBe('');
	});

	it('updates on refresh with a new row', () => {
		const fixture = TestBed.createComponent(MoveNameCellComponent);
		fixture.componentInstance.agInit(paramsFor(baseMove));
		fixture.detectChanges();

		const changed = fixture.componentInstance.refresh(paramsFor({ ...baseMove, name: 'Flamethrower' }));
		fixture.detectChanges();

		expect(changed).toBe(true);
		expect(fixture.nativeElement.textContent).toContain('Flamethrower');
	});
});
