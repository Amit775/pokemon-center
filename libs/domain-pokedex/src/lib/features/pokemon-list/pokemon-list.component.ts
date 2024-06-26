import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  viewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonService, PokemonStore } from '@pokemon/data';
import { filter, tap } from 'rxjs';
import { PokemonRecordComponent } from './pokemon-record/pokemon-record.component';

@Component({
  standalone: true,
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PokemonRecordComponent, ScrollingModule, RouterModule],
})
export class PokemonListComponent {
  store = inject(PokemonStore);
  service = inject(PokemonService).getMorePokemons();

  viewport = viewChild.required('viewport', { read: CdkVirtualScrollViewport });

  pokemons = this.store.entities;

  scrolled = effect((cleanup) => {
    const viewport = this.viewport();
    const subscription = viewport
      .elementScrolled()
      .pipe(
        filter(() => viewport.measureScrollOffset('bottom') < 200),
        tap(() => this.service.getMorePokemons()),
      )
      .subscribe();

    cleanup(() => subscription.unsubscribe());
  });
}
