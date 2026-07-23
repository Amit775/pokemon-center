import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
	EvolutionChainDocument,
	EvolutionChainQuery,
	PokedexContextStore,
	PokemonDetailDocument,
	PokemonFlavorDocument,
	gqlResource,
} from '@pokemon-center/data-access-pokedex';
import { SectionHeadingComponent, TypeChipComponent } from '@pokemon-center/ui-pokedex';
import { PokemonAvatarDirective } from '../../pokemon-list/pokemon-avater/pokemon-avatar.directive';

type ChainSpecies = EvolutionChainQuery['evolutionChain'][number];
type EvolutionRow = ChainSpecies['evolution'][number];

@Component({
	standalone: true,
	templateUrl: './pokemon-about.component.html',
	styleUrls: ['./pokemon-about.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [PokemonAvatarDirective, RouterModule, TypeChipComponent, SectionHeadingComponent],
})
export class PokemonAboutComponent {
	protected readonly store = inject(PokedexContextStore);

	public id = input.required<string>();

	private readonly detail = gqlResource(PokemonDetailDocument, () => ({ idOrSlug: this.id() }));
	private readonly flavorQuery = gqlResource(PokemonFlavorDocument, () => ({
		idOrSlug: this.id(),
		versionGroup: this.store.activeVersionGroup(),
		language: this.store.language(),
	}));
	private readonly chainQuery = gqlResource(EvolutionChainDocument, () => ({ idOrSlug: this.id() }));

	public pokemon = computed(() => this.detail.value()?.pokemon);
	public flavor = computed(() => this.flavorQuery.value()?.pokemonFlavor ?? []);
	public chain = computed(() => this.chainQuery.value()?.evolutionChain ?? []);

	/** female eighths → readable ratio; -1 = genderless */
	protected genderText(rate: number): string {
		if (rate === -1) return 'genderless';
		return `${((8 - rate) / 8) * 100}% ♂ / ${(rate / 8) * 100}% ♀`;
	}

	protected conditionText(species: ChainSpecies): string {
		const conditions = species.evolution.map((evo: EvolutionRow) => {
			const parts: string[] = [evo.evolutionTrigger.identifier.replace(/-/g, ' ')];
			if (evo.minimum_level) parts.push(`lv ${evo.minimum_level}`);
			if (evo.triggerItem) parts.push(`use ${evo.triggerItem.identifier}`);
			if (evo.heldItem) parts.push(`holding ${evo.heldItem.identifier}`);
			if (evo.knownMove) parts.push(`knows ${evo.knownMove.identifier}`);
			if (evo.minimum_happiness) parts.push(`happiness ≥ ${evo.minimum_happiness}`);
			if (evo.time_of_day) parts.push(evo.time_of_day);
			if (evo.location) parts.push(`at ${evo.location.identifier}`);
			return parts.join(', ');
		});
		return conditions.join(' or ');
	}
}
