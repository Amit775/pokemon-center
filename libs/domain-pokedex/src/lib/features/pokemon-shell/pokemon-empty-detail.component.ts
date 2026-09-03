import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Right-pane placeholder shown when no Pokémon is selected — the default child route of the shell. */
@Component({
	selector: 'pokedex-pokemon-empty-detail',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<p>Select a Pokémon to see its details.</p>`,
	styles: `
		:host {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			color: var(--ink-muted);
		}
	`,
})
export class PokemonEmptyDetailComponent {}
