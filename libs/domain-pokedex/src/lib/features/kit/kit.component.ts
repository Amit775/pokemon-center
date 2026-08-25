import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
	ButtonComponent,
	EntityPortraitComponent,
	POKEMON_TYPES,
	PokemonCardComponent,
	SectionHeadingComponent,
	StatBarComponent,
	TypeChipComponent,
	UiCardComponent,
	UiSkeletonComponent,
	UiTabsComponent,
} from '@pokemon-center/ui-pokedex';

/** Living demo of the ui-pokedex kit — eyeball every component in both themes. */
@Component({
	standalone: true,
	selector: 'pokedex-kit',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		TypeChipComponent,
		StatBarComponent,
		PokemonCardComponent,
		EntityPortraitComponent,
		UiCardComponent,
		SectionHeadingComponent,
		UiSkeletonComponent,
		UiTabsComponent,
		ButtonComponent,
	],
	template: `
		<div class="kit">
			<h1>ui-pokedex kit</h1>

			<pokedex-section-heading label="Buttons" />
			<div class="row">
				<button pokedex-button type="button">Default</button>
				<button pokedex-button="primary" type="button">Primary</button>
				<button pokedex-button type="button" disabled>Disabled</button>
				<a pokedex-button href="#buttons">Anchor</a>
			</div>

			<pokedex-section-heading label="Type chips" />
			<div class="row">
				@for (t of types; track t) {
					<pokedex-type-chip [type]="t" />
				}
			</div>

			<pokedex-section-heading label="Pokemon cards" />
			<div class="grid">
				<pokedex-pokemon-card dexNumber="006" name="Charizard" [types]="['fire', 'flying']" [selected]="true" />
				<pokedex-pokemon-card dexNumber="001" name="Bulbasaur" [types]="['grass', 'poison']" />
				<pokedex-pokemon-card dexNumber="025" name="Pikachu" [types]="['electric']" />
				<pokedex-pokemon-card dexNumber="094" name="Gengar" [types]="['ghost', 'poison']" />
			</div>

			<pokedex-section-heading label="Card + portrait + stat bars" />
			<pokedex-card>
				<div class="detail">
					<pokedex-entity-portrait type="fire" [size]="120" />
					<div class="stats">
						<pokedex-tabs [tabs]="tabs" [(value)]="tab" />
						@if (tab() === 'stats') {
							<pokedex-stat-bar label="HP" [value]="78" type="fire" />
							<pokedex-stat-bar label="Attack" [value]="84" type="fire" />
							<pokedex-stat-bar label="Defense" [value]="78" type="fire" />
							<pokedex-stat-bar label="Sp. Atk" [value]="109" type="fire" />
							<pokedex-stat-bar label="Sp. Def" [value]="85" type="fire" />
							<pokedex-stat-bar label="Speed" [value]="100" type="fire" />
						} @else {
							<p>Tab content for “{{ tab() }}”.</p>
						}
					</div>
				</div>
			</pokedex-card>

			<pokedex-section-heading label="Skeletons" />
			<div class="skel">
				<pokedex-skeleton width="120px" height="120px" radius="50%" />
				<div style="flex:1; display:flex; flex-direction:column; gap:.5rem">
					<pokedex-skeleton width="40%" height="1.4rem" />
					<pokedex-skeleton width="70%" />
					<pokedex-skeleton width="60%" />
				</div>
			</div>
		</div>
	`,
	styles: `
		:host {
			display: block;
			height: calc(100vh - 60px);
			overflow-y: auto;
		}
		.kit {
			padding: var(--s-5);
			max-width: 60rem;
		}
		h1 {
			color: var(--ink);
		}
		.row {
			display: flex;
			flex-wrap: wrap;
			gap: var(--s-2);
		}
		.grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
			gap: var(--s-3);
		}
		.detail {
			display: flex;
			gap: var(--s-5);
			align-items: center;
			padding: var(--s-5);
		}
		.stats {
			flex: 1;
		}
		.stats pokedex-tabs {
			margin-bottom: var(--s-3);
		}
		p {
			color: var(--ink-muted);
		}
		.skel {
			display: flex;
			gap: var(--s-4);
			align-items: center;
		}
	`,
})
export class KitComponent {
	protected readonly types = POKEMON_TYPES;
	protected readonly tabs = [
		{ label: 'About', value: 'about' },
		{ label: 'Stats', value: 'stats' },
		{ label: 'Moves', value: 'moves' },
	];
	protected readonly tab = signal('stats');
}
