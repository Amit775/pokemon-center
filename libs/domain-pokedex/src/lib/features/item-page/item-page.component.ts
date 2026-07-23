import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { ItemDetailDocument, PokedexContextStore, gqlResource } from '@pokemon-center/data-access-pokedex';

@Component({
	standalone: true,
	selector: 'pokedex-item-page',
	template: `
		@if (item(); as item) {
			<h2>{{ item.identifier }}</h2>
			<section class="facts">
				<div><span>category</span><span>{{ item.category.identifier }}</span></div>
				<div><span>cost</span><span>{{ item.cost }}</span></div>
				@if (item.fling_power) {
					<div><span>fling power</span><span>{{ item.fling_power }}</span></div>
				}
			</section>
			@for (prose of item.itemProses; track prose.short_effect) {
				<p class="short">{{ prose.short_effect }}</p>
				<p>{{ prose.effect }}</p>
			}
			@for (flavor of item.itemFlavorTexts; track flavor.versionGroup.identifier) {
				<blockquote>
					<cite>{{ flavor.versionGroup.identifier }}</cite>
					{{ flavor.flavor_text }}
				</blockquote>
			}
		}
	`,
	styles: `
		:host {
			display: block;
			padding: 1rem;
		}
		h2 {
			text-transform: capitalize;
		}
		.facts {
			display: grid;
			gap: 0.35rem;
			max-width: 28rem;
		}
		.facts > div {
			display: grid;
			grid-template-columns: 10rem 1fr;
		}
		.facts span:first-child {
			opacity: 0.65;
		}
		.short {
			font-weight: 600;
		}
		p,
		blockquote {
			max-width: 40rem;
			white-space: pre-line;
		}
		blockquote {
			margin: 0.5rem 0;
			padding-left: 0.75rem;
			border-left: 3px solid currentColor;
		}
		cite {
			display: block;
			opacity: 0.6;
			text-transform: capitalize;
			font-size: 0.8rem;
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemPageComponent {
	private readonly store = inject(PokedexContextStore);
	public id = input.required<string>();

	private readonly detail = gqlResource(ItemDetailDocument, () => ({ idOrSlug: this.id(), language: this.store.language() }));

	public item = computed(() => (this.detail.hasValue() ? this.detail.value()?.item : undefined));
}
