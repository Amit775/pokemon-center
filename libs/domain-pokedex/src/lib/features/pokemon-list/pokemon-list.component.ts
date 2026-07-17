import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pokemon } from '@pokemon-center/infra-pokedex-data';
import { ListComponent, ListItemDirective } from '@pokemon-center/ui-list';
import { PokemonRecordComponent } from './pokemon-record/pokemon-record.component';

@Component({
	templateUrl: './pokemon-list.component.html',
	styleUrl: './pokemon-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [PokemonRecordComponent, RouterModule, ListComponent, ListItemDirective],
})
export class PokemonListComponent {
	public pokemons = signal<Pokemon[]>([]);

	pokemonType = undefined as unknown as Pokemon;
}
