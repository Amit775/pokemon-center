import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatKey } from '@pokemon-center/champions-engine';
import { EntityPortraitComponent, TypeChipComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import { PokedexStore } from './pokedex.store';

const STATS: { key: StatKey; label: string }[] = [
	{ key: 'hp', label: 'HP' },
	{ key: 'attack', label: 'Attack' },
	{ key: 'defense', label: 'Defense' },
	{ key: 'specialAttack', label: 'Sp. Atk' },
	{ key: 'specialDefense', label: 'Sp. Def' },
	{ key: 'speed', label: 'Speed' },
];

/**
 * The comparison tray.
 *
 * Docked rather than a route, because comparing is something you do *while* filtering: sending
 * the reader to another page would throw away the list they built to find these candidates, and
 * they would have to rebuild it to swap one out.
 *
 * The winning value in each row is marked. That is the entire job — two stat columns side by
 * side still leave you doing the subtraction, and the answer to "which is bulkier" should not
 * require arithmetic.
 */
@Component({
	selector: 'champions-compare-tray',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [EntityPortraitComponent, RouterLink, TypeChipComponent],
	template: `
		@if (entries().length > 0) {
			<div class="tray" role="region" aria-label="Comparison">
				<div class="bar">
					<button type="button" class="toggle" (click)="open.set(!open())" [attr.aria-expanded]="open()">
						{{ open() ? 'Hide' : 'Compare' }} {{ entries().length }}
					</button>

					<ul class="picked">
						@for (entry of entries(); track entry.slug) {
							<li>
								<pokedex-entity-portrait
									[type]="entry.types[0]"
									[src]="sprite(entry.id).src"
									[fallbackSrc]="sprite(entry.id).fallbackSrc"
									[alt]="entry.name"
									[size]="28"
								/>
								<span>{{ entry.name }}</span>
								<button type="button" (click)="store.toggleCompare(entry.slug)" [attr.aria-label]="'Remove ' + entry.name">×</button>
							</li>
						}
					</ul>

					<button type="button" class="clear" (click)="store.clearCompare()">Clear</button>
				</div>

				@if (open()) {
					<div class="panel">
						<table>
							<caption class="sr-only">Base stats compared</caption>
							<thead>
								<tr>
									<th scope="col"><span class="sr-only">Stat</span></th>
									@for (entry of entries(); track entry.slug) {
										<th scope="col">
											<a [routerLink]="['/champions/pokedex', entry.slug]">{{ entry.name }}</a>
											<span class="chips">
												@for (type of entry.types; track type) {
													<pokedex-type-chip [type]="type" size="sm" />
												}
											</span>
										</th>
									}
								</tr>
							</thead>
							<tbody>
								@for (row of rows(); track row.key) {
									<tr>
										<th scope="row">{{ row.label }}</th>
										@for (cell of row.cells; track cell.slug) {
											<td [class.best]="cell.isBest">{{ cell.value }}</td>
										}
									</tr>
								}
							</tbody>
						</table>

						<p class="note">Base stats. The Simulator is where a spread and an item change the answer.</p>
					</div>
				}
			</div>
		}
	`,
	styles: `
		.tray {
			position: sticky;
			bottom: 0;
			z-index: 20;
			margin-top: var(--s-4, 1rem);
			border: 1.5px solid var(--accent, #4f6df5);
			border-radius: var(--r-lg, 12px);
			background: var(--surface);
			box-shadow: var(--shadow-md, 0 6px 18px rgba(0, 0, 0, 0.25));
			overflow: hidden;
		}

		.bar {
			display: flex;
			align-items: center;
			gap: var(--s-3, 0.75rem);
			padding: var(--s-2, 0.5rem) var(--s-3, 0.75rem);
			flex-wrap: wrap;
		}

		.picked {
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			flex-wrap: wrap;
			gap: 0.35rem;
			flex: 1;
		}

		.picked li {
			display: flex;
			align-items: center;
			gap: 0.3rem;
			padding: 0.1rem 0.2rem 0.1rem 0.1rem;
			border: 1.5px solid var(--line);
			border-radius: var(--r-pill, 999px);
			font-size: var(--fs-xs, 0.75rem);
		}

		button {
			font: inherit;
			cursor: pointer;
			border: none;
			background: none;
			color: var(--ink-muted);
		}

		.picked li button {
			font-size: 0.95rem;
			line-height: 1;
			padding: 0 0.2rem;
		}

		.picked li button:hover {
			color: var(--danger, #d1495b);
		}

		.toggle,
		.clear {
			font-size: var(--fs-sm, 0.875rem);
			font-weight: 600;
			padding: 0.35rem 0.7rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			min-height: 2.25rem;
			white-space: nowrap;
		}

		.toggle {
			background: var(--accent, #4f6df5);
			border-color: var(--accent, #4f6df5);
			color: #fff;
		}

		.clear:hover {
			border-color: var(--danger, #d1495b);
			color: var(--danger, #d1495b);
		}

		.panel {
			padding: var(--s-3, 0.75rem);
			border-top: 1px solid var(--line);
			max-height: 60vh;
			overflow: auto;
		}

		table {
			border-collapse: collapse;
			width: 100%;
			font-size: var(--fs-sm, 0.875rem);
		}

		th,
		td {
			padding: 0.3rem 0.6rem;
			border-bottom: 1px solid var(--line);
			text-align: right;
			font-variant-numeric: tabular-nums;
		}

		thead th {
			text-align: center;
		}

		thead a {
			color: inherit;
			text-decoration: none;
			font-weight: 700;
		}

		thead a:hover {
			color: var(--accent, #4f6df5);
		}

		.chips {
			display: flex;
			justify-content: center;
			gap: 0.2rem;
			margin-top: 0.2rem;
		}

		tbody th {
			text-align: left;
			font-weight: 500;
			color: var(--ink-muted);
		}

		/* The whole point: no subtraction required. */
		td.best {
			color: var(--success, #2e7d52);
			font-weight: 700;
		}

		.note {
			margin: var(--s-2, 0.5rem) 0 0;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
		}

		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip-path: inset(50%);
			white-space: nowrap;
		}
	`,
})
export class CompareTrayComponent {
	protected readonly store = inject(PokedexStore);
	protected readonly open = signal(false);

	protected readonly entries = computed(() => this.store.compareEntries());

	/** One row per stat plus the total, with the leader marked. */
	protected readonly rows = computed(() => {
		const entries = this.entries();

		return [...STATS, { key: 'total' as const, label: 'Total' }].map((stat) => {
			const values = entries.map((entry) =>
				stat.key === 'total' ? entry.baseStats.total : entry.baseStats[stat.key as StatKey],
			);
			const highest = Math.max(...values);

			return {
				key: stat.key,
				label: stat.label,
				cells: entries.map((entry, index) => ({
					slug: entry.slug,
					value: values[index],
					// Only when it is genuinely ahead — marking every column on a tie says nothing.
					isBest: values[index] === highest && values.some((value) => value !== highest),
				})),
			};
		});
	});

	protected sprite(id: number) {
		return spriteSources(id);
	}
}
