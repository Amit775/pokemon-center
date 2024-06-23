import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { PokedexComponent } from '@pokemon/domain-pokedex';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    mocks: [PokedexComponent],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});
