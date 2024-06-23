import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let spectator: Spectator<MainComponent>;
  const createComponent = createComponentFactory({
    component: MainComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});
