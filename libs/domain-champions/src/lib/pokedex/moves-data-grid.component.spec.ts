import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { registerDataGridModules } from '@pokemon-center/ui-pokedex';
import { MovesDataGridComponent } from './moves-data-grid.component';
import type { DetailMove } from './move.model';

const moves: DetailMove[] = [
	{
		id: 52,
		name: 'Ember',
		type: 'fire',
		power: 40,
		accuracy: 100,
		pp: 25,
		priority: 0,
		flags: ['protect', 'mirror'],
		effectText: 'May burn the target.',
		effectChance: 10,
		isOverridden: false,
	},
	{
		id: 53,
		name: 'Flamethrower',
		type: 'fire',
		power: 90,
		accuracy: 100,
		pp: 15,
		priority: 0,
		flags: ['protect', 'mirror'],
		effectText: 'May burn the target.',
		effectChance: 10,
		isOverridden: true,
	},
];

@Component({
	selector: 'champions-moves-grid-test-host',
	imports: [MovesDataGridComponent],
	template: `<champions-moves-data-grid [moves]="moves()" />`,
})
class MovesGridTestHostComponent {
	readonly moves = signal(moves);
}

describe('MovesDataGridComponent', () => {
	beforeEach(() => registerDataGridModules());

	it('renders a grid', () => {
		const fixture = TestBed.createComponent(MovesGridTestHostComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('ag-grid-angular')).not.toBeNull();
	});

	it('counts the moves that differ from the main series', () => {
		const fixture = TestBed.createComponent(MovesGridTestHostComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('1');
	});
});
