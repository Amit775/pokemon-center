import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { PokedexContextStore, PokemonEncountersDocument, PokemonEncountersQuery, gqlResource } from '@pokemon-center/data-access-pokedex';

type EncounterRow = PokemonEncountersQuery['pokemonEncounters'][number];

interface LocationGroup {
	version: string;
	location: string;
	area: string;
	methods: string;
	levels: string;
	chance: number;
}

/** "Where to catch it" — encounters grouped per version + location, scoped to the active game. */
@Component({
	standalone: true,
	templateUrl: './pokemon-locations.component.html',
	styleUrls: ['./pokemon-locations.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonLocationsComponent {
	protected readonly store = inject(PokedexContextStore);

	public id = input.required<string>();

	private readonly query = gqlResource(PokemonEncountersDocument, () => ({
		idOrSlug: this.id(),
		versionGroup: this.store.activeVersionGroup(),
		take: 500,
	}));

	public loading = computed(() => this.query.isLoading());

	public groups = computed<LocationGroup[]>(() => {
		const rows = this.query.value()?.pokemonEncounters ?? [];
		const byKey = new Map<string, { rows: EncounterRow[] }>();
		for (const row of rows) {
			const key = `${row.version.identifier}|${row.locationArea.location.identifier}|${row.locationArea.identifier || ''}`;
			if (!byKey.has(key)) byKey.set(key, { rows: [] });
			byKey.get(key)?.rows.push(row);
		}
		return [...byKey.entries()].map(([key, { rows: groupRows }]) => {
			const [version, location, area] = key.split('|');
			const minLevel = Math.min(...groupRows.map((groupRow) => groupRow.min_level));
			const maxLevel = Math.max(...groupRows.map((groupRow) => groupRow.max_level));
			return {
				version,
				location,
				area: area && area !== location ? area : '',
				methods: [...new Set(groupRows.map((groupRow) => groupRow.encounterSlot.encounterMethod.identifier))].join(', '),
				levels: minLevel === maxLevel ? `${minLevel}` : `${minLevel}–${maxLevel}`,
				chance: Math.min(
					100,
					groupRows.reduce((sum, groupRow) => sum + groupRow.encounterSlot.rarity, 0),
				),
			};
		});
	});
}
