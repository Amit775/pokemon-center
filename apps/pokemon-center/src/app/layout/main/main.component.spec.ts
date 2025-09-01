import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MainComponent } from './main.component';
import { provideRouter } from '@angular/router';

describe('MainComponent', () => {
  let spectator: Spectator<MainComponent>;
  const createComponent = createComponentFactory({
    component: MainComponent,
    providers: [provideRouter([])],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});
