import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { typeColorVar } from '../type-colors';
import { EntityPortraitComponent } from '../entity-portrait/entity-portrait.component';
import { TypeChipComponent } from '../type-chip/type-chip.component';

/** The Pokédex grid tile — type-gradient header, floating portrait, name, type chips. */
@Component({
	selector: 'pkd-pokemon-card',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [EntityPortraitComponent, TypeChipComponent],
	template: `
		<div class="hd">
			<span class="no">#{{ dexNumber() }}</span>
			<pkd-entity-portrait [type]="primaryType()" [src]="src()" [alt]="name()" [size]="72" />
		</div>
		<div class="bd">
			<h3>{{ name() }}</h3>
			<div class="chips">
				@for (type of types(); track type) {
					<pkd-type-chip [type]="type" size="sm" />
				}
			</div>
		</div>
	`,
	host: {
		'[style.--pt]': 'colorVar()',
		'[class.pkd-pokemon-card--selected]': 'selected()',
	},
	styles: `
		:host {
			display: block;
			border-radius: var(--r-lg);
			overflow: hidden;
			background: var(--surface);
			border: 1.5px solid var(--line);
			box-shadow: var(--shadow-sm);
			cursor: pointer;
			transition:
				transform var(--dur) var(--ease),
				box-shadow var(--dur) var(--ease),
				border-color var(--dur) var(--ease);
		}
		:host(:hover) {
			transform: translateY(-3px);
			box-shadow: var(--shadow-md);
		}
		:host(.pkd-pokemon-card--selected) {
			border-color: var(--accent);
			box-shadow:
				0 0 0 2px var(--accent),
				var(--shadow-md);
		}
		.hd {
			padding: var(--s-3) var(--s-3) var(--s-2);
			background: linear-gradient(150deg, color-mix(in srgb, var(--pt) 80%, var(--surface)), color-mix(in srgb, var(--pt) 45%, var(--surface)));
			text-align: center;
		}
		.no {
			display: block;
			text-align: left;
			font-weight: 800;
			font-size: var(--fs-sm);
			color: color-mix(in srgb, var(--ink) 45%, transparent);
		}
		pkd-entity-portrait {
			margin: 0.1rem auto -1.3rem;
			border: 3.5px solid var(--surface);
			border-radius: 50%;
			position: relative;
			z-index: 1;
		}
		.bd {
			padding: 1.6rem var(--s-3) var(--s-3);
			text-align: center;
		}
		h3 {
			margin: 0 0 var(--s-2);
			font-size: var(--fs-lg);
			font-weight: 800;
			text-transform: capitalize;
			letter-spacing: -0.01em;
			color: var(--ink);
		}
		.chips {
			display: flex;
			gap: var(--s-1);
			justify-content: center;
			flex-wrap: wrap;
		}
		@media (prefers-reduced-motion: reduce) {
			:host {
				transition: none;
			}
		}
	`,
})
export class PokemonCardComponent {
	readonly dexNumber = input.required<string | number>();
	readonly name = input.required<string>();
	readonly types = input.required<readonly string[]>();
	readonly src = input<string | null>(null);
	readonly selected = input<boolean>(false);

	protected readonly primaryType = computed(() => this.types()[0] ?? 'normal');
	protected readonly colorVar = computed(() => typeColorVar(this.primaryType()));
}
