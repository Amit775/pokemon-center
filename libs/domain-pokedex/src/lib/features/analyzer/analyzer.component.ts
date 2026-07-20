import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatchupAnalysisDocument, PokedexContextStore, TypesListDocument, gqlResource } from '@pokemon-center/data-access-pokedex';

/** Matchup Analyzer: pick a defender's type(s), get the best obtainable counters in your game. */
@Component({
	standalone: true,
	selector: 'pokedex-analyzer',
	templateUrl: './analyzer.component.html',
	styleUrl: './analyzer.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterModule],
})
export class AnalyzerComponent {
	protected readonly store = inject(PokedexContextStore);

	protected readonly defenderTypes = signal<string[]>([]);

	private readonly typesQuery = gqlResource(TypesListDocument, () => ({}));
	protected readonly allTypes = computed(() => (this.typesQuery.value()?.typeList ?? []).filter((t) => Number(t.id) < 10000));

	private readonly analysis = gqlResource(MatchupAnalysisDocument, () => ({
		defenderTypes: this.defenderTypes(),
		versionGroup: this.store.activeVersionGroup(),
		take: 20,
	}));

	protected readonly counters = computed(() => (this.defenderTypes().length ? (this.analysis.value()?.matchupAnalysis ?? []) : []));
	protected readonly loading = computed(() => this.defenderTypes().length > 0 && this.analysis.isLoading());

	protected toggleType(identifier: string): void {
		const current = this.defenderTypes();
		if (current.includes(identifier)) {
			this.defenderTypes.set(current.filter((t) => t !== identifier));
		} else if (current.length < 2) {
			this.defenderTypes.set([...current, identifier]);
		}
	}
}
