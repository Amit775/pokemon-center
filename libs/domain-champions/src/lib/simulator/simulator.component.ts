import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import {
	CLEAR_FIELD,
	ChampionsBuild,
	FieldState,
	StatStage,
	damageRoll,
	effectiveSpeed,
	formatKoVerdict,
	koVerdict,
	turnOrder,
} from '@pokemon-center/champions-engine';
import { ChampionsTeamDocument, TypeChartDocument, championsResource } from '@pokemon-center/data-access-champions';
import { EntityPortraitComponent, SectionHeadingComponent, TypeChipComponent, UiCardComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import { toTypeChart, inferBuild } from '../advisor/build-inference';
import { boxEntryToBuild } from '../box/box-build';
import { BoxStore } from '../box/box.store';
import { BOX_PREFIX, CombatantPickerComponent, POKEDEX_PREFIX } from './combatant-picker.component';

/**
 * The Simulator — a what-if lab for two Pokémon.
 *
 * The Companion answers "what do I do about the team in front of me, right now". This answers
 * "what would happen if", with every input unlocked: boosts, items, weather, Tailwind, Trick
 * Room. It is for building teams and settling arguments, not for playing a match.
 *
 * Both sides can be a real build from your Box or any Pokémon on the roster, so you can test
 * your actual Garchomp against a threat you have never faced.
 */
@Component({
	selector: 'champions-simulator',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		CombatantPickerComponent,
		EntityPortraitComponent,
		RouterLink,
		SectionHeadingComponent,
		TypeChipComponent,
		UiCardComponent,
	],
	template: `
		<header class="masthead">
			<div>
				<h1>Simulator</h1>
				<p class="tagline">Two Pokémon, every condition adjustable, both directions at once.</p>
			</div>
		</header>

		<div class="sides">
			<champions-combatant-picker label="Left" [selected]="leftKey()" (picked)="leftKey.set($event)" />
			<champions-combatant-picker label="Right" [selected]="rightKey()" (picked)="rightKey.set($event)" />
		</div>

		@if (!left() || !right()) {
			<pokedex-card>
				<div class="panel">
					<h2>Pick two Pokémon</h2>
					<p>
						Choose from your <a routerLink="/champions/box">Box</a> to test your real builds, or any Pokémon
						on the roster to try something you do not own.
					</p>
				</div>
			</pokedex-card>
		} @else {
			<pokedex-section-heading label="Conditions" />
			<pokedex-card>
				<div class="panel conditions">
					<div class="field-row">
						<button type="button" [class.on]="field().tailwind" (click)="toggleField('tailwind')">Tailwind</button>
						<button type="button" [class.on]="field().trickRoom" (click)="toggleField('trickRoom')">Trick Room</button>
						@for (weather of weathers; track weather) {
							<button type="button" [class.on]="field().weather === weather" (click)="setWeather(weather)">
								{{ weather === 'none' ? 'Clear' : weather }}
							</button>
						}
					</div>

					<div class="boost-row">
						@for (side of sides; track side.key) {
							<div class="boosts">
								<span class="who">{{ name(side.key) }}</span>
								@for (stat of boostStats; track stat.key) {
									<!--
										A span, not a label: this names a pair of buttons rather than a form
										control, so the accessible name belongs on the buttons themselves.
									-->
									<span class="boost">
										<span class="boost-label" aria-hidden="true">{{ stat.label }}</span>
										<button
											type="button"
											[attr.aria-label]="'Lower ' + name(side.key) + ' ' + stat.label"
											(click)="adjustBoost(side.key, stat.key, -1)"
										>
											−
										</button>
										<span class="stage">{{ signed(boosts()[side.key][stat.key]) }}</span>
										<button
											type="button"
											[attr.aria-label]="'Raise ' + name(side.key) + ' ' + stat.label"
											(click)="adjustBoost(side.key, stat.key, 1)"
										>
											+
										</button>
									</span>
								}
							</div>
						}
					</div>
				</div>
			</pokedex-card>

			<pokedex-section-heading label="Speed" />
			<pokedex-card>
				<div class="panel">
					<p class="verdict">{{ speedVerdict() }}</p>
				</div>
			</pokedex-card>

			@for (direction of directions(); track direction.label) {
				<pokedex-section-heading [label]="direction.label" />
				<pokedex-card>
					<div class="panel">
						<div class="who-row">
							<pokedex-entity-portrait
								[type]="direction.attacker.species.types[0]"
								[src]="sprite(direction.attacker).src"
								[fallbackSrc]="sprite(direction.attacker).fallbackSrc"
								[alt]="direction.attacker.species.name"
								[size]="40"
							/>
							<span class="who-name">{{ direction.attacker.species.name }}</span>
							@for (type of direction.attacker.species.types; track type) {
								<pokedex-type-chip [type]="type" size="sm" />
							}
						</div>

						<ul class="moves">
							@for (option of direction.options; track option.move.id) {
								<li>
									<span class="move-name">{{ option.move.name }}</span>
									<pokedex-type-chip [type]="option.move.type" size="sm" />
									<span class="damage">{{ percent(option.result.minFraction) }}–{{ percent(option.result.maxFraction) }}%</span>
									<span class="ko" [class.kill]="option.ko.startsWith('guaranteed')">{{ koLabel(option.ko) }}</span>
								</li>
							} @empty {
								<li class="none">No damaging move in this set touches {{ direction.defender.species.name }}.</li>
							}
						</ul>
					</div>
				</pokedex-card>
			}

			<p class="disclosure">
				Box builds use your real spread, nature, item and moves. Anything picked from the roster is
				inferred — maximum investment and a computed moveset — and marked as such in the picker.
			</p>
		}
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5, 1.5rem);
			max-width: 62rem;
			margin-inline: auto;
		}

		h1 {
			margin: 0;
			font-size: var(--fs-2xl, 2rem);
			letter-spacing: -0.02em;
		}

		.tagline {
			margin: var(--s-1, 0.25rem) 0 var(--s-4, 1rem);
			color: var(--ink-muted);
		}

		.sides {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
			gap: var(--s-3, 0.75rem);
			margin-bottom: var(--s-4, 1rem);
		}

		.panel {
			padding: var(--s-4, 1rem);
		}

		.panel h2 {
			margin: 0 0 var(--s-2, 0.5rem);
			font-size: var(--fs-lg, 1.125rem);
		}

		.panel p {
			margin: 0;
			color: var(--ink-muted);
			line-height: 1.55;
		}

		button {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			cursor: pointer;
			padding: 0.3rem 0.65rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
			min-height: 2.2rem;
		}

		button.on {
			background: var(--accent, #4f6df5);
			border-color: var(--accent, #4f6df5);
			color: #fff;
		}

		.field-row {
			display: flex;
			flex-wrap: wrap;
			gap: 0.35rem;
			text-transform: capitalize;
		}

		.boost-row {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
			gap: var(--s-3, 0.75rem);
			margin-top: var(--s-3, 0.75rem);
			padding-top: var(--s-3, 0.75rem);
			border-top: 1px solid var(--line);
		}

		.boosts {
			display: grid;
			gap: 0.3rem;
		}

		.who {
			font-weight: 600;
			font-size: var(--fs-sm, 0.875rem);
		}

		.boost {
			display: inline-flex;
			align-items: center;
			gap: 0.3rem;
			font-size: var(--fs-sm, 0.875rem);
		}

		.boost-label {
			min-width: 2.6rem;
			color: var(--ink-muted);
			font-size: var(--fs-xs, 0.75rem);
		}

		.boost button {
			min-width: 2rem;
			min-height: 2rem;
			padding: 0;
		}

		.stage {
			min-width: 1.6rem;
			text-align: center;
			font-variant-numeric: tabular-nums;
		}

		.verdict {
			font-size: var(--fs-lg, 1.125rem);
			color: var(--ink) !important;
			line-height: 1.45;
		}

		.who-row {
			display: flex;
			align-items: center;
			gap: var(--s-2, 0.5rem);
			margin-bottom: var(--s-3, 0.75rem);
		}

		.who-name {
			font-weight: 700;
		}

		.moves {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			gap: 0.35rem;
		}

		.moves li {
			display: grid;
			grid-template-columns: 1fr auto auto auto;
			align-items: center;
			gap: var(--s-3, 0.75rem);
			font-size: var(--fs-sm, 0.875rem);
		}

		.move-name {
			font-weight: 600;
		}

		.damage {
			font-variant-numeric: tabular-nums;
		}

		.ko {
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			text-transform: uppercase;
			letter-spacing: 0.05em;
			text-align: right;
			min-width: 8rem;
		}

		.ko.kill {
			color: var(--success, #2e7d52);
			font-weight: 700;
		}

		.none {
			color: var(--ink-muted);
			display: block;
		}

		.disclosure {
			margin-top: var(--s-5, 1.5rem);
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			line-height: 1.5;
		}
	`,
})
export default class SimulatorComponent {
	private readonly box = inject(BoxStore);

	/** `box:<id>` or `pokedex:<slug>`. */
	protected readonly leftKey = signal<string | null>(null);
	protected readonly rightKey = signal<string | null>(null);

	private readonly queryParams = toSignal(inject(ActivatedRoute).queryParamMap);

	/**
	 * `?left=garchomp&right=dragonite` preselects either side, so the Pokédex can hand a
	 * Pokémon straight to the calculator.
	 *
	 * Seeding only, never writing: the URL sets where you start, and picking something else
	 * afterwards is a decision, not a navigation. Reading the params untracked keeps a later
	 * pick from being stomped when the router re-emits.
	 */
	private readonly seedFromUrl = effect(() => {
		const params = this.queryParams();
		if (!params) return;

		untracked(() => {
			const left = params.get('left');
			const right = params.get('right');
			if (left && !this.leftKey()) this.leftKey.set(`${POKEDEX_PREFIX}${left}`);
			if (right && !this.rightKey()) this.rightKey.set(`${POKEDEX_PREFIX}${right}`);
		});
	});

	protected readonly field = signal<FieldState>(CLEAR_FIELD);
	protected readonly boosts = signal<Record<'left' | 'right', Record<'attack' | 'defense' | 'speed', StatStage>>>({
		left: { attack: 0, defense: 0, speed: 0 },
		right: { attack: 0, defense: 0, speed: 0 },
	});

	protected readonly weathers: FieldState['weather'][] = ['none', 'sun', 'rain', 'sand', 'snow'];
	protected readonly sides = [
		{ key: 'left' as const, label: 'Left' },
		{ key: 'right' as const, label: 'Right' },
	];
	protected readonly boostStats = [
		{ key: 'attack' as const, label: 'Atk' },
		{ key: 'defense' as const, label: 'Def' },
		{ key: 'speed' as const, label: 'Spe' },
	];

	/** Roster slugs needed for whichever sides are Pokedex picks. */
	private readonly pokedexSlugs = computed(() =>
		[this.leftKey(), this.rightKey()]
			.filter((key): key is string => key !== null && key.startsWith(POKEDEX_PREFIX))
			.map((key) => key.slice(POKEDEX_PREFIX.length)),
	);

	private readonly pokedexQuery = championsResource(ChampionsTeamDocument, () => ({ slugs: this.pokedexSlugs() }));
	private readonly chartQuery = championsResource(TypeChartDocument, () => ({}));

	protected readonly typeChart = computed(() => toTypeChart(this.chartQuery.value()?.typeChart ?? []));

	private build(key: string | null): ChampionsBuild | null {
		if (!key) return null;

		if (key.startsWith(BOX_PREFIX)) {
			const entry = this.box.entries().find((boxEntry) => boxEntry.id === Number(key.slice(BOX_PREFIX.length)));
			return entry ? boxEntryToBuild(entry) : null;
		}

		const member = (this.pokedexQuery.value()?.championsTeam ?? []).find((teamMember) => teamMember.slug === key.slice(POKEDEX_PREFIX.length));
		return member ? inferBuild(member) : null;
	}

	protected readonly left = computed(() => this.build(this.leftKey()));
	protected readonly right = computed(() => this.build(this.rightKey()));

	/** Both attack directions, so a matchup is never read one-way. */
	protected readonly directions = computed(() => {
		const left = this.left();
		const right = this.right();
		const chart = this.typeChart();
		if (!left || !right || Object.keys(chart).length === 0) return [];

		const damageFor = (attacker: ChampionsBuild, defender: ChampionsBuild, attackerSide: 'left' | 'right') => {
			const defenderSide = attackerSide === 'left' ? 'right' : 'left';
			return attacker.moves
				.filter((move) => move.damageClass !== 'STATUS' && (move.power ?? 0) > 0)
				.map((move) => {
					const result = damageRoll(attacker, defender, move, chart, {
						field: this.field(),
						attackerBoosts: {
							attack: this.boosts()[attackerSide].attack,
							specialAttack: this.boosts()[attackerSide].attack,
						},
						defenderBoosts: {
							defense: this.boosts()[defenderSide].defense,
							specialDefense: this.boosts()[defenderSide].defense,
						},
					});
					return { move, result, ko: koVerdict(result) };
				})
				.sort((first, second) => second.result.min - first.result.min);
		};

		return [
			{ label: `${left.species.name} → ${right.species.name}`, attacker: left, defender: right, options: damageFor(left, right, 'left') },
			{ label: `${right.species.name} → ${left.species.name}`, attacker: right, defender: left, options: damageFor(right, left, 'right') },
		];
	});

	protected readonly speedVerdict = computed(() => {
		const left = this.left();
		const right = this.right();
		if (!left || !right) return '';

		const order = turnOrder(
			{ build: left, context: { boosts: { speed: this.boosts().left.speed } } },
			{ build: right, context: { boosts: { speed: this.boosts().right.speed } } },
			this.field(),
		);

		const leftSpeed = effectiveSpeed(left, { boosts: { speed: this.boosts().left.speed }, field: this.field() });
		const rightSpeed = effectiveSpeed(right, { boosts: { speed: this.boosts().right.speed }, field: this.field() });

		if (order.order === 'speed-tie') return `Speed tie at ${leftSpeed} — a coin flip decides the turn.`;

		const [fast, slow] = order.order === 'you-first' ? [left, right] : [right, left];
		const [fastSpeed, slowSpeed] = order.order === 'you-first' ? [leftSpeed, rightSpeed] : [rightSpeed, leftSpeed];
		const because = this.field().trickRoom ? ' under Trick Room' : '';

		return `${fast.species.name} moves first${because} — ${fastSpeed} to ${slow.species.name}'s ${slowSpeed}.`;
	});

	protected sprite(build: ChampionsBuild) {
		return spriteSources(build.species.id);
	}

	protected name(side: 'left' | 'right'): string {
		return (side === 'left' ? this.left() : this.right())?.species.name ?? side;
	}

	protected percent(fraction: number): number {
		return Math.round(fraction * 100);
	}

	protected signed(stage: number): string {
		return stage > 0 ? `+${stage}` : `${stage}`;
	}

	protected readonly koLabel = formatKoVerdict;

	protected toggleField(key: 'tailwind' | 'trickRoom'): void {
		this.field.update((current) => ({ ...current, [key]: !current[key] }));
	}

	protected setWeather(weather: FieldState['weather']): void {
		this.field.update((current) => ({ ...current, weather }));
	}

	protected adjustBoost(side: 'left' | 'right', stat: 'attack' | 'defense' | 'speed', delta: number): void {
		this.boosts.update((current) => ({
			...current,
			[side]: { ...current[side], [stat]: Math.max(-6, Math.min(6, current[side][stat] + delta)) as StatStage },
		}));
	}
}


