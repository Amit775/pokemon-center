import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
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
	imports: [TypeChipComponent, StatBarComponent, PokemonCardComponent, EntityPortraitComponent, UiCardComponent, SectionHeadingComponent, UiSkeletonComponent, UiTabsComponent],
	template: `
		<div class="kit">
			<h1>ui-pokedex kit</h1>

			<pkd-section-heading label="Type chips" />
			<div class="row">
				@for (t of types; track t) {
					<pkd-type-chip [type]="t" />
				}
			</div>

			<pkd-section-heading label="Pokemon cards" />
			<div class="grid">
				<pkd-pokemon-card dexNumber="006" name="Charizard" [types]="['fire', 'flying']" [selected]="true" />
				<pkd-pokemon-card dexNumber="001" name="Bulbasaur" [types]="['grass', 'poison']" />
				<pkd-pokemon-card dexNumber="025" name="Pikachu" [types]="['electric']" />
				<pkd-pokemon-card dexNumber="094" name="Gengar" [types]="['ghost', 'poison']" />
			</div>

			<pkd-section-heading label="Card + portrait + stat bars" />
			<pkd-card>
				<div class="detail">
					<pkd-entity-portrait type="fire" [size]="120" />
					<div class="stats">
						<pkd-tabs [tabs]="tabs" [(value)]="tab" />
						@if (tab() === 'stats') {
							<pkd-stat-bar label="HP" [value]="78" type="fire" />
							<pkd-stat-bar label="Attack" [value]="84" type="fire" />
							<pkd-stat-bar label="Defense" [value]="78" type="fire" />
							<pkd-stat-bar label="Sp. Atk" [value]="109" type="fire" />
							<pkd-stat-bar label="Sp. Def" [value]="85" type="fire" />
							<pkd-stat-bar label="Speed" [value]="100" type="fire" />
						} @else {
							<p>Tab content for “{{ tab() }}”.</p>
						}
					</div>
				</div>
			</pkd-card>

			<pkd-section-heading label="Skeletons" />
			<div class="skel">
				<pkd-skeleton width="120px" height="120px" radius="50%" />
				<div style="flex:1; display:flex; flex-direction:column; gap:.5rem">
					<pkd-skeleton width="40%" height="1.4rem" />
					<pkd-skeleton width="70%" />
					<pkd-skeleton width="60%" />
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
		.stats pkd-tabs {
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
