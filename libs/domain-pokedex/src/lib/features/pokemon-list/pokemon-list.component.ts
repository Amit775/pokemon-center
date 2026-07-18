import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonListDocument, PokemonListItem, gqlResource } from '@pokemon-center/data-access-pokedex';
import { ListComponent, ListItemDirective } from '@pokemon-center/ui-list';
import { PokemonRecordComponent } from './pokemon-record/pokemon-record.component';

@Component({
	templateUrl: './pokemon-list.component.html',
	styleUrl: './pokemon-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [PokemonRecordComponent, RouterModule, ListComponent, ListItemDirective],
})
export class PokemonListComponent {
	public search = signal('');

	private readonly list = gqlResource(PokemonListDocument, () => ({
		take: 500,
		skip: 0,
		search: this.search() || undefined,
	}));

	public pokemons = computed(() => this.list.value()?.pokemonList ?? []);

	pokemonType = undefined as unknown as PokemonListItem;
}
