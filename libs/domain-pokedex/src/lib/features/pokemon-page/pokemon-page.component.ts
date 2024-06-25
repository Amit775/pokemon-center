import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { PokemonService } from '@pokemon/data';
import { derivedAsync } from 'ngxtension/derived-async';
import { PokemonAvatarDirective } from '../pokemon-list/pokemon-avater/pokemon-avatar.directive';

@Component({
  standalone: true,
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe, PokemonAvatarDirective, MatTabsModule, RouterModule],
})
export class PokemonPageComponent {
  private api = inject(PokemonService);

  id = input.required({ transform: (value: number | string) => Number(value) });
  
  pokemon = derivedAsync(() => this.api.getPokemon(this.id()));

  tabs = [
    { label: 'About', path: 'about' },
    { label: 'Stats', path: 'stats' },
    { label: 'Moves', path: 'moves' },
  ];
}
