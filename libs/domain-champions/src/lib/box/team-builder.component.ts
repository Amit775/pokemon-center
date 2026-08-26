import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { teamWeaknesses } from '@pokemon-center/champions-engine';
import { TypeChartDocument, championsResource, type TeamInput } from '@pokemon-center/data-access-champions';
import { EntityPortraitComponent, SectionHeadingComponent, TypeChipComponent, UiCardComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import { toTypeChart } from '../advisor/build-inference';
import { boxEntryToBuild } from './box-build';
import { BoxStore } from './box.store';

/**
 * Teams, assembled from the Box.
 *
 * The coverage readout updates as you fill slots, so a shared weakness shows up while you can
 * still do something about it rather than after you have lost to it. That is the whole reason
 * to build a team here instead of in your head.
 */
@Component({
	selector: 'champions-team-builder',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [EntityPortraitComponent, SectionHeadingComponent, TypeChipComponent, UiCardComponent],
	template: `
		<pokedex-section-heading label="Teams" />

		@if (store.teams().length > 0) {
			<ul class="teams">
				@for (team of store.teams(); track team.id) {
					<li>
						<button type="button" class="team" [class.active]="editingId() === team.id" (click)="load(team.id)">
							<span class="team-name">{{ team.label }}</span>
							<span class="team-mons">
								@for (member of team.members; track member.slot) {
									<pokedex-entity-portrait
										[type]="member.pokemon.types[0]"
										[src]="sprite(member.pokemon.id).src"
										[fallbackSrc]="sprite(member.pokemon.id).fallbackSrc"
										[alt]="member.pokemon.name"
										[size]="28"
									/>
								}
							</span>
						</button>
						<button type="button" class="remove" (click)="store.removeTeam(team.id)" [attr.aria-label]="'Delete ' + team.label">×</button>
					</li>
				}
			</ul>
		}

		<pokedex-card>
			<div class="panel">
				@if (store.entries().length === 0) {
					<p class="hint">Add Pokémon to your Box first — teams are built from what you own.</p>
				} @else {
					<input
						class="label"
						type="text"
						[value]="label()"
						(input)="label.set($any($event.target).value)"
						placeholder="Team name"
						aria-label="Team name"
					/>

					<div class="slots">
						@for (slot of slots; track slot) {
							<div class="slot">
								@if (chosen()[slot]; as entry) {
									<button type="button" class="filled" (click)="clearSlot(slot)" [attr.aria-label]="'Remove from slot ' + (slot + 1)">
										<pokedex-entity-portrait
											[type]="entry.pokemon.types[0]"
											[src]="sprite(entry.pokemon.id).src"
											[fallbackSrc]="sprite(entry.pokemon.id).fallbackSrc"
											[alt]="entry.nickname || entry.pokemon.name"
											[size]="48"
										/>
										<span class="slot-name">{{ entry.nickname || entry.pokemon.name }}</span>
									</button>
								} @else {
									<div class="empty-slot" [attr.aria-label]="'Slot ' + (slot + 1) + ' empty'">
										<span aria-hidden="true">{{ slot + 1 }}</span>
									</div>
								}
							</div>
						}
					</div>

					<p class="pick-hint">Tap a Pokémon to add it to the next open slot.</p>
					<div class="pool">
						@for (entry of store.entries(); track entry.id) {
							<button
								type="button"
								class="pool-mon"
								[class.used]="isChosen(entry.id)"
								[disabled]="isChosen(entry.id) || firstOpenSlot() === null"
								(click)="add(entry.id)"
							>
								<pokedex-entity-portrait
									[type]="entry.pokemon.types[0]"
									[src]="sprite(entry.pokemon.id).src"
									[fallbackSrc]="sprite(entry.pokemon.id).fallbackSrc"
									[alt]="entry.nickname || entry.pokemon.name"
									[size]="34"
								/>
								<span>{{ entry.nickname || entry.pokemon.name }}</span>
							</button>
						}
					</div>

					<!--
						Shown whenever anything is on the team, including when the answer is "nothing".
						Hiding the block on an empty result made a good outcome look like a missing
						feature — the reassurance is the point.
					-->
					@if (filledCount() >= 2) {
						<div class="coverage">
							<h3>Shared weaknesses</h3>
							@if (pressure().length > 0) {
								<ul>
									@for (entry of pressure(); track entry.type) {
										<li [class.danger]="entry.hits >= 3">
											<pokedex-type-chip [type]="entry.type" size="sm" />
											<span>hits {{ entry.hits }} of {{ filledCount() }}</span>
										</li>
									}
								</ul>
								<p class="hint">
									Three or more is a real hole — one well-chosen attacker can sweep a team that shares a weakness.
								</p>
							} @else {
								<p class="clean">
									No type hits more than one of these {{ filledCount() }}. Nothing on the team shares a weakness.
								</p>
							}
						</div>
					}

					<div class="actions">
						<button type="button" class="primary" [disabled]="filledCount() === 0 || !label().trim()" (click)="save()">
							{{ editingId() ? 'Save team' : 'Create team' }}
						</button>
						@if (editingId()) {
							<button type="button" (click)="reset()">New team</button>
						}
					</div>
				}
			</div>
		</pokedex-card>
	`,
	styles: `
		:host {
			display: block;
		}

		button {
			font: inherit;
			cursor: pointer;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
			min-height: 2.4rem;
		}

		.teams {
			list-style: none;
			margin: 0 0 var(--s-3, 0.75rem);
			padding: 0;
			display: flex;
			flex-wrap: wrap;
			gap: var(--s-2, 0.5rem);
		}

		.teams li {
			position: relative;
		}

		.team {
			display: grid;
			gap: 0.3rem;
			padding: var(--s-2, 0.5rem) var(--s-3, 0.75rem);
			text-align: left;
		}

		.team.active {
			border-color: var(--accent, #4f6df5);
		}

		.team-name {
			font-weight: 600;
			font-size: var(--fs-sm, 0.875rem);
		}

		.team-mons {
			display: flex;
			gap: 0.15rem;
		}

		.remove {
			position: absolute;
			top: -0.4rem;
			right: -0.4rem;
			width: 1.4rem;
			height: 1.4rem;
			min-height: 0;
			padding: 0;
			line-height: 1;
			border-radius: 50%;
			color: var(--ink-muted);
		}

		.remove:hover {
			color: var(--danger, #d1495b);
			border-color: var(--danger, #d1495b);
		}

		.panel {
			padding: var(--s-4, 1rem);
		}

		.label {
			font: inherit;
			font-size: var(--fs-lg, 1.125rem);
			font-weight: 600;
			border: none;
			border-bottom: 1.5px dashed var(--line);
			background: none;
			color: inherit;
			padding: 0.2rem 0;
			margin-bottom: var(--s-3, 0.75rem);
			width: 100%;
			max-width: 18rem;
		}

		.slots {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
			gap: var(--s-2, 0.5rem);
		}

		.filled {
			display: grid;
			justify-items: center;
			gap: 0.2rem;
			width: 100%;
			padding: var(--s-2, 0.5rem) 0.3rem;
		}

		.slot-name {
			font-size: var(--fs-xs, 0.75rem);
			text-align: center;
			line-height: 1.2;
		}

		.empty-slot {
			display: grid;
			place-items: center;
			min-height: 5.2rem;
			border: 1.5px dashed var(--line);
			border-radius: var(--r-md, 8px);
			color: var(--ink-muted);
		}

		.pick-hint,
		.hint {
			margin: var(--s-3, 0.75rem) 0 var(--s-2, 0.5rem);
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			line-height: 1.45;
		}

		.pool {
			display: flex;
			flex-wrap: wrap;
			gap: 0.35rem;
		}

		.pool-mon {
			display: inline-flex;
			align-items: center;
			gap: 0.4rem;
			padding: 0.2rem 0.6rem 0.2rem 0.2rem;
			border-radius: var(--r-pill, 999px);
			font-size: var(--fs-sm, 0.875rem);
		}

		.pool-mon.used {
			opacity: 0.35;
		}

		.pool-mon:disabled {
			cursor: not-allowed;
		}

		.coverage {
			margin-top: var(--s-4, 1rem);
			padding-top: var(--s-3, 0.75rem);
			border-top: 1px solid var(--line);
		}

		.coverage h3 {
			margin: 0 0 var(--s-2, 0.5rem);
			font-size: var(--fs-xs, 0.75rem);
			text-transform: uppercase;
			letter-spacing: 0.1em;
			color: var(--ink-muted);
		}

		.coverage ul {
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			flex-wrap: wrap;
			gap: var(--s-3, 0.75rem);
		}

		.coverage li {
			display: inline-flex;
			align-items: center;
			gap: 0.3rem;
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
		}

		.coverage li.danger {
			color: var(--danger, #d1495b);
			font-weight: 600;
		}

		.clean {
			margin: 0;
			font-size: var(--fs-sm, 0.875rem);
			color: var(--success, #2e7d52);
		}

		.actions {
			display: flex;
			gap: var(--s-2, 0.5rem);
			margin-top: var(--s-4, 1rem);
		}

		.actions button {
			padding: 0.5rem 1rem;
		}

		.primary {
			background: var(--accent, #4f6df5);
			border-color: var(--accent, #4f6df5);
			color: #fff;
			font-weight: 600;
		}

		.primary:disabled {
			opacity: 0.45;
			cursor: not-allowed;
		}
	`,
})
export class TeamBuilderComponent {
	protected readonly store = inject(BoxStore);

	protected readonly slots = [0, 1, 2, 3, 4, 5];
	protected readonly label = signal('');
	protected readonly editingId = signal<number | null>(null);
	/** Box entry ids by slot; sparse. */
	protected readonly slotIds = signal<(number | null)[]>([null, null, null, null, null, null]);

	private readonly chartQuery = championsResource(TypeChartDocument, () => ({}));

	protected readonly chosen = computed(() =>
		this.slotIds().map((id) => (id === null ? null : (this.store.entries().find((entry) => entry.id === id) ?? null))),
	);

	protected readonly filledCount = computed(() => this.chosen().filter((entry) => entry !== null).length);
	protected readonly firstOpenSlot = computed(() => {
		const index = this.slotIds().findIndex((id) => id === null);
		return index === -1 ? null : index;
	});

	/** Types that hit several of the team — the hole you want to see while building. */
	protected readonly pressure = computed(() => {
		const chart = toTypeChart(this.chartQuery.value()?.typeChart ?? []);
		const builds = this.chosen()
			.filter((entry) => entry !== null)
			.map(boxEntryToBuild);

		if (builds.length === 0 || Object.keys(chart).length === 0) return [];
		return teamWeaknesses(builds, chart).pressure.filter((entry) => entry.hits >= 2).slice(0, 6);
	});

	protected sprite(id: number) {
		return spriteSources(id);
	}

	protected isChosen(id: number): boolean {
		return this.slotIds().includes(id);
	}

	protected add(id: number): void {
		const slot = this.firstOpenSlot();
		if (slot === null) return;
		this.slotIds.update((current) => current.map((value, index) => (index === slot ? id : value)));
	}

	protected clearSlot(slot: number): void {
		this.slotIds.update((current) => current.map((value, index) => (index === slot ? null : value)));
	}

	protected load(teamId: number): void {
		const team = this.store.teams().find((candidateTeam) => candidateTeam.id === teamId);
		if (!team) return;

		this.editingId.set(team.id);
		this.label.set(team.label);
		const next: (number | null)[] = [null, null, null, null, null, null];
		for (const member of team.members) {
			if (member.boxPokemon && member.slot >= 1 && member.slot <= 6) next[member.slot - 1] = member.boxPokemon.id;
		}
		this.slotIds.set(next);
	}

	protected reset(): void {
		this.editingId.set(null);
		this.label.set('');
		this.slotIds.set([null, null, null, null, null, null]);
	}

	protected async save(): Promise<void> {
		const members = this.chosen()
			.map((entry, index) => ({ entry, slot: index + 1 }))
			.flatMap(({ entry, slot }) => (entry === null ? [] : [{ slot, pokemonId: entry.pokemon.id, boxPokemonId: entry.id }]));

		const editingId = this.editingId();
		const input: TeamInput = {
			...(editingId === null ? {} : { id: editingId }),
			label: this.label().trim(),
			isMine: true,
			members,
		};

		await this.store.saveTeam(input);
		this.reset();
	}
}
