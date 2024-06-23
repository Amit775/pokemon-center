import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokedexComponent } from '@pokemon/domain-pokedex';

@Component({
  standalone: true,
  imports: [PokedexComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
