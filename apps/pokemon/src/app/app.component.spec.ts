import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';
import { PokemonStore } from './core/store/pokemon.store';
import { PokemonService } from './pokemon.service';
import {
  provideExperimentalZonelessChangeDetection,
  signal,
} from '@angular/core';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    mocks: [PokemonService],
    providers: [
		{ provide: PokemonStore, useValue: { entities: signal([]) } },
	],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});
