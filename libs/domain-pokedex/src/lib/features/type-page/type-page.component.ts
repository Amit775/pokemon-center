import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TypeMatchupsDocument, gqlResource } from '@pokemon-center/data-access-pokedex';
import { MatchupCell, MatchupGridComponent, SectionHeadingComponent } from '@pokemon-center/ui-pokedex';

@Component({
	standalone: true,
	selector: 'pokedex-type-page',
	template: `
		@if (type(); as type) {
			<h2>{{ type.identifier }}</h2>
			<pkd-section-heading [label]="type.identifier + ' attacks (offense)'" />
			<pkd-matchup-grid [cells]="offense()" />
			<pkd-section-heading [label]="'attacks ' + type.identifier + ' (defense)'" />
			<pkd-matchup-grid [cells]="defense()" />
		}
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-4);
			height: calc(100vh - 60px);
			overflow-y: auto;
			color: var(--ink);
		}
		h2 {
			text-transform: capitalize;
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatchupGridComponent, SectionHeadingComponent],
})
export class TypePageComponent {
	public id = input.required<string>();

	private readonly detail = gqlResource(TypeMatchupsDocument, () => ({ idOrSlug: this.id() }));

	public type = computed(() => (this.detail.hasValue() ? this.detail.value()?.type : undefined));

	protected readonly offense = computed<MatchupCell[]>(() =>
		[...(this.type()?.efficacy ?? [])]
			.sort((a, b) => a.targetType.id.localeCompare(b.targetType.id))
			.map((e) => ({ type: e.targetType.identifier, factor: e.damage_factor / 100 })),
	);

	protected readonly defense = computed<MatchupCell[]>(() =>
		[...(this.type()?.efficacyTarget ?? [])]
			.sort((a, b) => a.damageType.id.localeCompare(b.damageType.id))
			.map((e) => ({ type: e.damageType.identifier, factor: e.damage_factor / 100 })),
	);
}
