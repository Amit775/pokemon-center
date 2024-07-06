import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  viewChild,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PokemonService, PokemonStore } from '@pokemon/data';
import { filter, map, tap } from 'rxjs';
import { PokemonRecordComponent } from './pokemon-record/pokemon-record.component';

@Component({
  standalone: true,
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PokemonRecordComponent, ScrollingModule, RouterModule],
})
export class PokemonListComponent implements AfterViewInit {
  store = inject(PokemonStore);
  service = inject(PokemonService).getMorePokemons();

  router = inject(Router);

  ngAfterViewInit(): void {
    const viewport = this.viewport();
    const offset = this.store.pokemonListOffsetIndex();
    setTimeout(() => viewport.scrollTo({ bottom: offset }), 40);
  }

  viewport = viewChild.required('viewport', { read: CdkVirtualScrollViewport });

  pokemons = this.store.pokemonEntities;

  scrolled = effect((cleanup) => {
    const viewport = this.viewport();

    const subscription = viewport.scrolledIndexChange
      .pipe(
        map(() => viewport.measureScrollOffset('bottom')),
        tap((offset) => this.store.updatePokemonListOffsetIndex(offset)),
        filter((offset) => offset < 200),
        tap(() => this.service.getMorePokemons()),
      )
      .subscribe();

    cleanup(() => subscription.unsubscribe());
  });
}
