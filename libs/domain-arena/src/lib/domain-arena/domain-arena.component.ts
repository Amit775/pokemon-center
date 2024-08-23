import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'arena-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './domain-arena.component.html',
  styleUrl: './domain-arena.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DomainArenaComponent {}
