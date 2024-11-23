import { AfterViewInit, ChangeDetectionStrategy, Component, computed, effect, inject, untracked, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasePokemon, PokemonService, PokemonStore } from '@pokemon/data';
import { ListComponent, ListItemDirective } from '@pokemon/ui-list';
import { PokemonRecordComponent } from './pokemon-record/pokemon-record.component';

@Component({
    templateUrl: './pokemon-list.component.html',
    styleUrl: './pokemon-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PokemonRecordComponent, RouterModule, ListComponent, ListItemDirective]
})
export class PokemonListComponent implements AfterViewInit {
	private store = inject(PokemonStore);
	private service = inject(PokemonService).getMorePokemons();

	private list = viewChild.required(ListComponent, { read: ListComponent });
	private offset = computed(() => this.list().offset());

	public pokemons = this.store.pokemonEntities;
	public pokemonType = undefined as unknown as BasePokemon;

	#scrolled = effect(() => {
		const offset = this.offset();

		untracked(() => {
			if (offset < 200) {
				this.service.getMorePokemons();
			}
		});
	});

	public ngAfterViewInit(): void {
		const viewport = this.list();
		const offset = this.store.pokemonListOffsetIndex();
		setTimeout(() => viewport.scrollTo({ bottom: offset }), 40);
	}
}
