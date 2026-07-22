import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
	MoveDetailDocument,
	MoveFlavorDocument,
	MoveLearnedByDocument,
	PokedexContextStore,
	gqlResource,
} from '@pokemon-center/data-access-pokedex';
import { SectionHeadingComponent, TypeChipComponent } from '@pokemon-center/ui-pokedex';

@Component({
	standalone: true,
	selector: 'pokedex-move-page',
	templateUrl: './move-page.component.html',
	styleUrls: ['./move-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterModule, TypeChipComponent, SectionHeadingComponent],
})
export class MovePageComponent {
	protected readonly store = inject(PokedexContextStore);

	public id = input.required<string>();

	private readonly detail = gqlResource(MoveDetailDocument, () => ({ idOrSlug: this.id() }));
	private readonly flavorQuery = gqlResource(MoveFlavorDocument, () => ({
		idOrSlug: this.id(),
		versionGroup: this.store.activeVersionGroup(),
	}));
	private readonly learnedByQuery = gqlResource(MoveLearnedByDocument, () => ({
		idOrSlug: this.id(),
		versionGroup: this.store.activeVersionGroup(),
		take: 500,
	}));

	public move = computed(() => (this.detail.hasValue() ? this.detail.value()?.move : undefined));
	public flavor = computed(() => (this.flavorQuery.hasValue() ? (this.flavorQuery.value()?.moveFlavor ?? []) : []));

	/** unique pokemon that learn this move (any method), in dex order */
	public learnedBy = computed(() => {
		const rows = this.learnedByQuery.hasValue() ? (this.learnedByQuery.value()?.moveLearnedBy ?? []) : [];
		const seen = new Map<string, { id: string; identifier: string }>();
		for (const row of rows) {
			if (!seen.has(row.pokemon.id)) seen.set(row.pokemon.id, row.pokemon);
		}
		return [...seen.values()];
	});
}
