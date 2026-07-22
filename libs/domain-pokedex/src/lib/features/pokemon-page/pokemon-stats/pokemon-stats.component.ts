import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { PokemonDetailDocument, gqlResource } from '@pokemon-center/data-access-pokedex';
import { StatBarComponent } from '@pokemon-center/ui-pokedex';

const STAT_LABELS: Record<string, string> = {
	hp: 'HP',
	attack: 'Attack',
	defense: 'Defense',
	'special-attack': 'Sp. Atk',
	'special-defense': 'Sp. Def',
	speed: 'Speed',
};

@Component({
	standalone: true,
	templateUrl: './pokemon-stats.component.html',
	styleUrls: ['./pokemon-stats.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [StatBarComponent],
})
export class PokemonStatsComponent {
	public id = input.required<string>();

	private readonly detail = gqlResource(PokemonDetailDocument, () => ({ idOrSlug: this.id() }));
	private readonly pokemon = computed(() => (this.detail.hasValue() ? this.detail.value()?.pokemon : undefined));

	public stats = computed(() => this.pokemon()?.stats ?? []);
	public primaryType = computed(() => [...(this.pokemon()?.types ?? [])].sort((a, b) => a.slot - b.slot)[0]?.type.identifier ?? 'normal');
	public total = computed(() => this.stats().reduce((sum, s) => sum + s.base_stat, 0));

	protected label(identifier: string): string {
		return STAT_LABELS[identifier] ?? identifier;
	}
}
