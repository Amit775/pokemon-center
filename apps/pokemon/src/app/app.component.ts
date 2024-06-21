import { Component, OnInit, inject } from '@angular/core';
import { PokemonStore } from './core/store/pokemon.store';
import { PokemonService } from './pokemon.service';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private store = inject(PokemonStore);
  private service = inject(PokemonService);

  public pokemons = this.store.entities;

  ngOnInit(): void {
    this.service.getMorePokemons();
  }
}
