import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainComponent } from './layout/main/main.component';

@Component({
  standalone: true,
  imports: [MainComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
