import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { OpponentIntel, PredictedEntry, STAT_KEYS, StatKey } from '@pokemon-center/champions-engine';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';

/**
 * One opponent's quick-reference card: typing, predicted moves/ability/item, and a Mega
 * preview when the species can transform. Every predicted field says where it came from —
 * usage data or the inferred heuristic — so a guess never reads as a fact.
 */
@Component({
	selector: 'champions-opponent-intel',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TypeChipComponent],
	template: `
		<div class="card">
			<header>
				<h3>{{ intel().build.species.name }}</h3>
				<div class="types">
					@for (type of intel().build.species.types; track type) {
						<pokedex-type-chip [type]="type" />
					}
				</div>
			</header>

			@if (weaknesses().length > 0) {
				<p class="row">
					<strong>Weak to:</strong>
					{{ weaknesses().join(', ') }}
				</p>
			}
			@if (resistances().length > 0) {
				<p class="row">
					<strong>Resists:</strong>
					{{ resistances().join(', ') }}
				</p>
			}
			@if (immunities().length > 0) {
				<p class="row">
					<strong>Immune to:</strong>
					{{ immunities().join(', ') }}
				</p>
			}

			<p class="row">
				<strong>Likely moves</strong>
				<span class="source" [class.usage]="movesSource() === 'usage'">{{ movesSource() === 'usage' ? 'usage data' : 'inferred' }}</span>
			</p>
			<ul class="moves">
				@for (move of intel().predictedMoves; track move.value.slug) {
					<li>{{ move.value.name }}</li>
				}
			</ul>

			@if (intel().predictedAbility; as ability) {
				<p class="row">
					<strong>Likely ability:</strong> {{ ability.value.name }}
					<span class="source" [class.usage]="ability.source === 'usage'">{{ ability.source === 'usage' ? 'usage data' : 'inferred' }}</span>
				</p>
			}

			<p class="row">
				<strong>Likely item:</strong>
				@if (intel().predictedItem; as item) {
					{{ formatItem(item.value) }} <span class="source usage">usage data</span>
				} @else {
					<span class="no-data">no data yet</span>
				}
			</p>

			@if (intel().megaPreview; as mega) {
				<div class="mega">
					<strong>If Mega Stone:</strong>
					@if (mega.typeChanged) {
						<div class="types">
							@for (type of mega.types; track type) {
								<pokedex-type-chip [type]="type" />
							}
						</div>
					} @else {
						<span>same typing</span>
					}
					<span class="stat-deltas">
						@for (delta of megaStatDeltas(); track delta.key) {
							<span class="stat-delta" [class.up]="delta.value > 0" [class.down]="delta.value < 0">{{ delta.label }} {{ delta.value >= 0 ? '+' : '' }}{{ delta.value }}</span>
						}
					</span>
				</div>
			}
		</div>
	`,
	styles: `
		.card {
			display: grid;
			gap: 0.5rem;
			padding: var(--s-3, 0.75rem);
			border: 1.5px solid var(--line);
			border-radius: var(--r-md, 8px);
		}

		header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: var(--s-2, 0.5rem);
		}

		h3 {
			margin: 0;
			font-size: var(--fs-md, 1rem);
		}

		.types {
			display: flex;
			gap: 0.25rem;
		}

		.row {
			margin: 0;
			font-size: var(--fs-sm, 0.875rem);
		}

		.moves {
			margin: 0;
			padding-left: 1.1rem;
			font-size: var(--fs-sm, 0.875rem);
		}

		.source {
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
		}

		.source.usage {
			color: var(--accent, #4f6df5);
		}

		.no-data {
			color: var(--ink-muted);
			font-style: italic;
		}

		.mega {
			display: flex;
			align-items: center;
			gap: var(--s-2, 0.5rem);
			font-size: var(--fs-sm, 0.875rem);
			padding-top: var(--s-2, 0.5rem);
			border-top: 1px dashed var(--line);
		}

		.stat-deltas {
			display: flex;
			flex-wrap: wrap;
			gap: 0.4rem;
		}

		.stat-delta.up {
			color: var(--success, #2e7d32);
		}

		.stat-delta.down {
			color: var(--danger, #c0392b);
		}
	`,
})
export class OpponentIntelCardComponent {
	private static readonly STAT_LABELS: Record<StatKey, string> = {
		hp: 'HP',
		attack: 'Atk',
		defense: 'Def',
		specialAttack: 'SpA',
		specialDefense: 'SpD',
		speed: 'Spe',
	};

	readonly intel = input.required<OpponentIntel>();

	protected readonly weaknesses = computed(() => this.intel().typeProfile.weaknesses.map((weakness) => `${weakness.type} ×${weakness.multiplier}`));
	protected readonly resistances = computed(() => this.intel().typeProfile.resistances.map((resistance) => `${resistance.type} ×${resistance.multiplier}`));
	protected readonly immunities = computed(() => this.intel().typeProfile.immunities);
	protected readonly movesSource = computed<PredictedEntry<unknown>['source']>(() => this.intel().predictedMoves[0]?.source ?? 'inferred');

	protected readonly megaStatDeltas = computed(() => {
		const mega = this.intel().megaPreview;
		if (!mega) return [];
		const base = this.intel().build.species.baseStats;
		return STAT_KEYS.filter((key) => mega.baseStats[key] !== base[key]).map((key) => ({
			key,
			label: OpponentIntelCardComponent.STAT_LABELS[key],
			value: mega.baseStats[key] - base[key],
		}));
	});

	protected formatItem(itemSlug: string): string {
		return itemSlug.replace(/-/g, ' ');
	}
}
