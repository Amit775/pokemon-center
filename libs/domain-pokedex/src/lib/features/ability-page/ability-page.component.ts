import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AbilityDetailDocument, PokedexContextStore, gqlResource } from '@pokemon-center/data-access-pokedex';

@Component({
	standalone: true,
	selector: 'pokedex-ability-page',
	template: `
		@if (ability(); as ability) {
			<h2>{{ ability.identifier }}</h2>
			@for (prose of ability.abilityProses; track prose.short_effect) {
				<p class="short">{{ prose.short_effect }}</p>
				<p>{{ prose.effect }}</p>
			}
			<h3>Pokemon with this ability ({{ ability.pokemonAbilities.length }})</h3>
			<div class="grid">
				@for (holder of ability.pokemonAbilities; track holder.pokemon.id) {
					<a [routerLink]="['/', 'pokedex', 'pokemon', holder.pokemon.id]">
						{{ holder.pokemon.identifier }}{{ holder.is_hidden ? ' (hidden)' : '' }}
					</a>
				}
			</div>
		}
	`,
	styles: `
		:host {
			display: block;
			padding: 1rem;
		}
		h2,
		h3 {
			text-transform: capitalize;
		}
		.short {
			font-weight: 600;
		}
		p {
			max-width: 40rem;
			white-space: pre-line;
		}
		.grid {
			display: flex;
			flex-wrap: wrap;
			gap: 0.4rem 1rem;
		}
		.grid a {
			color: inherit;
			text-transform: capitalize;
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterModule],
})
export class AbilityPageComponent {
	private readonly store = inject(PokedexContextStore);
	public id = input.required<string>();

	private readonly detail = gqlResource(AbilityDetailDocument, () => ({ idOrSlug: this.id(), language: this.store.language() }));

	public ability = computed(() => (this.detail.hasValue() ? this.detail.value()?.ability : undefined));
}
