import { TestBed } from '@angular/core/testing';
import { PokedexTypeListCellComponent } from './pokedex-type-list-cell.component';

describe('PokedexTypeListCellComponent', () => {
	function render(types: string[]) {
		const fixture = TestBed.createComponent(PokedexTypeListCellComponent);
		fixture.componentRef.setInput('types', types);
		fixture.detectChanges();
		return fixture;
	}

	it('renders one chip per type', () => {
		const fixture = render(['grass', 'poison']);
		expect(fixture.nativeElement.querySelectorAll('pokedex-type-chip')).toHaveLength(2);
	});

	it('renders a single chip for a mono-type entry', () => {
		const fixture = render(['fire']);
		expect(fixture.nativeElement.querySelectorAll('pokedex-type-chip')).toHaveLength(1);
	});
});
