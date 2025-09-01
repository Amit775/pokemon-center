import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'arena-root',
	templateUrl: './domain-arena.component.html',
	styleUrl: './domain-arena.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DomainArenaComponent {}
