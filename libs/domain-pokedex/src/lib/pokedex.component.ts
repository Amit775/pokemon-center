import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PokemonService, PokemonStore } from '@pokemon/data';
import { PokemonListComponent } from './features/pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-pokedex',
  template: '<app-pokemon-list [pokemons]="pokemons()" />',
  standalone: true,
  imports: [PokemonListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexComponent {
  private store = inject(PokemonStore);
  private service = inject(PokemonService);

  public pokemons = this.store.entities;

  ngOnInit(): void {
    this.service.getMorePokemons();
  }
}
