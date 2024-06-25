import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  output,
  viewChild,
} from '@angular/core';
import { BasePokemon } from '@pokemon/data';
import { filter, tap } from 'rxjs';
import { PokemonRecordComponent } from './pokemon-record/pokemon-record.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PokemonRecordComponent, ScrollingModule, RouterModule],
})
export class PokemonListComponent {
  viewport = viewChild.required('viewport', { read: CdkVirtualScrollViewport });

  pokemons = input<BasePokemon[]>([]);
  loadMore = output<void>();

  scrolled = effect((cleanup) => {
    const viewport = this.viewport();
    const subscription = viewport
      .elementScrolled()
      .pipe(
        filter(() => viewport.measureScrollOffset('bottom') < 200),
        tap(() => this.loadMore.emit()),
      )
      .subscribe();

    cleanup(() => subscription.unsubscribe());
  });
}
