import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { StatKey } from '@pokemon-center/champions-engine';
import { EntityPortraitComponent, TypeChipComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import { BaseStatSpread, StatPanelComponent } from './stat-panel.component';

const SHORT: { key: StatKey; label: string }[] = [
	{ key: 'hp', label: 'HP' },
	{ key: 'attack', label: 'Atk' },
	{ key: 'defense', label: 'Def' },
	{ key: 'specialAttack', label: 'SpA' },
	{ key: 'specialDefense', label: 'SpD' },
	{ key: 'speed', label: 'Spe' },
];

/**
 * A Mega Evolution, shown on its base form's page.
 *
 * It is not a separate dex entry anywhere in this app — it is a state Garchomp can enter — so
 * this is the one place its artwork, typing and stats exist. Which means it has to carry all of
 * them, not a name and a base stat total you are expected to go and look up.
 *
 * The deltas are the point. Two stat spreads printed side by side is arithmetic homework; what
 * anyone actually wants to know is what the stone buys, and whether it costs Speed.
 */
@Component({
	selector: 'champions-mega-panel',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [EntityPortraitComponent, StatPanelComponent, TypeChipComponent],
	template: `
		<header>
			<pokedex-entity-portrait
				[type]="mega().types[0]"
				[src]="sprite().src"
				[fallbackSrc]="sprite().fallbackSrc"
				[alt]="mega().name"
				[size]="72"
			/>
			<div class="identity">
				<h3>{{ mega().name }}</h3>
				<div class="chips">
					@for (type of mega().types; track type) {
						<pokedex-type-chip [type]="type" size="sm" />
					}
					@if (typeChanged()) {
						<span class="tag">new typing</span>
					}
				</div>
				<p class="deltas">
					@for (change of changes(); track change.label) {
						<span [class.up]="change.amount > 0" [class.down]="change.amount < 0">
							{{ change.amount > 0 ? '+' : '' }}{{ change.amount }} {{ change.label }}
						</span>
					} @empty {
						<span>Same stats as the base form.</span>
					}
				</p>
			</div>
		</header>

		<champions-stat-panel [base]="mega().baseStats" [type]="mega().types[0]" />
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-4, 1rem);
		}

		header {
			display: flex;
			align-items: center;
			gap: var(--s-3, 0.75rem);
			flex-wrap: wrap;
			margin-bottom: var(--s-3, 0.75rem);
		}

		.identity {
			flex: 1 1 12rem;
			min-width: 0;
		}

		h3 {
			margin: 0;
			font-size: var(--fs-lg, 1.125rem);
		}

		.chips {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 0.3rem;
			margin-top: var(--s-1, 0.25rem);
		}

		.tag {
			font-size: var(--fs-xs, 0.75rem);
			text-transform: uppercase;
			letter-spacing: 0.08em;
			color: var(--accent, #4f6df5);
		}

		.deltas {
			display: flex;
			flex-wrap: wrap;
			gap: 0.15rem 0.6rem;
			margin: var(--s-2, 0.5rem) 0 0;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			font-variant-numeric: tabular-nums;
		}

		.deltas .up {
			color: var(--success, #2e7d52);
			font-weight: 600;
		}

		/* A Mega that loses Speed is a real trade-off, so it is not allowed to look like a win. */
		.deltas .down {
			color: var(--danger, #d1495b);
			font-weight: 600;
		}
	`,
})
export class MegaPanelComponent {
	readonly mega = input.required<{ id: number; name: string; types: string[]; baseStats: BaseStatSpread }>();
	/** The base form, for the deltas. */
	readonly baseStats = input.required<BaseStatSpread>();
	readonly baseTypes = input.required<string[]>();

	protected readonly sprite = computed(() => spriteSources(this.mega().id));

	protected readonly typeChanged = computed(() => this.mega().types.join('/') !== this.baseTypes().join('/'));

	/** Only the stats that moved, plus the total — an unchanged stat is not news. */
	protected readonly changes = computed(() => {
		const mega = this.mega().baseStats;
		const base = this.baseStats();

		const moved = SHORT.map((row) => ({ label: row.label, amount: mega[row.key] - base[row.key] })).filter(
			(change) => change.amount !== 0,
		);

		return moved.length > 0 ? [...moved, { label: 'BST', amount: mega.total - base.total }] : [];
	});
}
