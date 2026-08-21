import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent, TypeChipComponent, UiCardComponent } from '@pokemon-center/ui-pokedex';
import { AdvisorStore } from '../advisor/advisor.store';
import { BattleStore } from './battle.store';

/**
 * The live battle tracker.
 *
 * Built to one rule: **nothing here may take more than a tap**. During a real match the
 * competition is not another app, it is you deciding the tool is not worth the time. So
 * there are no forms, no sliders and no confirmations — HP moves in quarter chunks, boosts
 * are ± buttons, and the advice line at the top restates the situation in one sentence so
 * you can act without reading the numbers underneath it.
 */
@Component({
	selector: 'champions-battle-tracker',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, SectionHeadingComponent, TypeChipComponent, UiCardComponent],
	template: `
		<header class="masthead">
			<div>
				<h1>Battle</h1>
				<p class="tagline">Turn {{ battle.turn() }}</p>
			</div>
			<div class="header-actions">
				<button type="button" class="ghost" (click)="battle.nextTurn()">Turn +1</button>
				<button type="button" class="ghost" (click)="battle.reset()">Reset</button>
			</div>
		</header>

		@if (!battle.isReady()) {
			<pkd-card>
				<div class="panel">
					<h2>No teams loaded</h2>
					<p>
						Set both sides in <a routerLink="/champions/preview">team preview</a> first — the tracker
						uses those six so there is nothing to re-enter here.
					</p>
				</div>
			</pkd-card>
		} @else {
			@if (battle.headline(); as headline) {
				<p class="headline">{{ headline }}</p>
			}

			<div class="sides">
				<!-- Opponent first: their state is what you are tracking, yours you already know. -->
				<section class="side them">
					<pkd-section-heading label="Them" />
					@if (battle.theirActive(); as active) {
						<pkd-card>
							<div class="panel">
								<div class="who">
									<span class="name">{{ active.species.name }}</span>
									@for (t of active.species.types; track t) {
										<pkd-type-chip [type]="t" size="sm" />
									}
								</div>

								<div class="hp">
									<div class="bar"><span [style.width.%]="battle.them().hpFraction * 100"></span></div>
									<span class="pct">{{ round(battle.them().hpFraction * 100) }}%</span>
								</div>

								<div class="taps">
									<button type="button" (click)="battle.chip('them', 0.25)">−25%</button>
									<button type="button" (click)="battle.chip('them', 0.5)">−50%</button>
									<button type="button" (click)="battle.setHp('them', 1)">Full</button>
									<button type="button" class="danger" (click)="battle.faint('them')">Fainted</button>
								</div>

								<div class="stages">
									<span>Atk</span>
									<button type="button" (click)="battle.adjustStage('them', 'attackStage', -1)">−</button>
									<span class="stage">{{ signed(battle.them().attackStage) }}</span>
									<button type="button" (click)="battle.adjustStage('them', 'attackStage', 1)">+</button>

									<span>Spe</span>
									<button type="button" (click)="battle.adjustStage('them', 'speedStage', -1)">−</button>
									<span class="stage">{{ signed(battle.them().speedStage) }}</span>
									<button type="button" (click)="battle.adjustStage('them', 'speedStage', 1)">+</button>
								</div>

								@if (battle.theirThreat(); as threat) {
									<p class="threat">
										Their best into you: <strong>{{ threat.move.name }}</strong>
										{{ round(threat.result.minFraction * 100) }}–{{ round(threat.result.maxFraction * 100) }}%
										<span class="ko">({{ koLabel(threat.ko) }})</span>
									</p>
								}

								<div class="switcher">
									@for (build of advisor.theirBuilds(); track build.species.slug; let i = $index) {
										<button
											type="button"
											class="chip"
											[class.active]="battle.them().activeIndex === i"
											[class.fainted]="battle.them().fainted.includes(i)"
											(click)="battle.setActive('them', i)"
										>
											{{ build.species.name }}
										</button>
									}
								</div>
							</div>
						</pkd-card>
					}
				</section>

				<section class="side you">
					<pkd-section-heading label="You" />
					@if (battle.yourActive(); as active) {
						<pkd-card>
							<div class="panel">
								<div class="who">
									<span class="name">{{ active.species.name }}</span>
									@for (t of active.species.types; track t) {
										<pkd-type-chip [type]="t" size="sm" />
									}
								</div>

								<div class="hp">
									<div class="bar"><span [style.width.%]="battle.you().hpFraction * 100"></span></div>
									<span class="pct">{{ round(battle.you().hpFraction * 100) }}%</span>
								</div>

								<div class="taps">
									<button type="button" (click)="battle.chip('you', 0.25)">−25%</button>
									<button type="button" (click)="battle.chip('you', 0.5)">−50%</button>
									<button type="button" (click)="battle.setHp('you', 1)">Full</button>
									<button type="button" class="danger" (click)="battle.faint('you')">Fainted</button>
								</div>

								<div class="stages">
									<span>Atk</span>
									<button type="button" (click)="battle.adjustStage('you', 'attackStage', -1)">−</button>
									<span class="stage">{{ signed(battle.you().attackStage) }}</span>
									<button type="button" (click)="battle.adjustStage('you', 'attackStage', 1)">+</button>

									<span>Spe</span>
									<button type="button" (click)="battle.adjustStage('you', 'speedStage', -1)">−</button>
									<span class="stage">{{ signed(battle.you().speedStage) }}</span>
									<button type="button" (click)="battle.adjustStage('you', 'speedStage', 1)">+</button>
								</div>

								<div class="switcher">
									@for (build of advisor.myBuilds(); track build.species.slug; let i = $index) {
										<button
											type="button"
											class="chip"
											[class.active]="battle.you().activeIndex === i"
											[class.fainted]="battle.you().fainted.includes(i)"
											(click)="battle.setActive('you', i)"
										>
											{{ build.species.name }}
										</button>
									}
								</div>
							</div>
						</pkd-card>
					}
				</section>
			</div>

			<pkd-section-heading label="Your options" />
			<pkd-card>
				<div class="panel">
					<ul class="options">
						@for (option of battle.yourOptions(); track option.move.id) {
							<li>
								<button type="button" class="option" (click)="battle.revealMove('you', option.move.slug, option.move.name)">
									<span class="option-head">
										<span class="move-name">{{ option.move.name }}</span>
										<pkd-type-chip [type]="option.move.type" size="sm" />
									</span>
									<span class="damage">
										{{ round(option.result.minFraction * 100) }}–{{ round(option.result.maxFraction * 100) }}%
									</span>
									<span class="ko" [class.kill]="option.ko.startsWith('guaranteed')">{{ koLabel(option.ko) }}</span>
								</button>
							</li>
						} @empty {
							<li class="none">Nothing in this set damages their active Pokémon.</li>
						}
					</ul>
					<p class="caveat">
						Tap a move to record that you used it. Damage assumes maximum investment on their side —
						the pessimistic read, deliberately.
					</p>
				</div>
			</pkd-card>

			<pkd-section-heading label="Field" />
			<pkd-card>
				<div class="panel">
					<div class="field">
						<button type="button" [class.on]="battle.field().tailwind" (click)="battle.setField({ tailwind: !battle.field().tailwind })">
							Tailwind
						</button>
						<button
							type="button"
							[class.on]="battle.field().trickRoom"
							(click)="battle.setField({ trickRoom: !battle.field().trickRoom })"
						>
							Trick Room
						</button>
						<button type="button" [class.on]="battle.them().isParalysed" (click)="battle.toggleParalysis('them')">
							They're paralysed
						</button>
						<button type="button" [class.on]="battle.you().isParalysed" (click)="battle.toggleParalysis('you')">
							You're paralysed
						</button>
					</div>
				</div>
			</pkd-card>

			@if (battle.log().length > 0) {
				<pkd-section-heading label="Log" />
				<pkd-card>
					<div class="panel">
						<ol class="log">
							@for (line of reversedLog(); track $index) {
								<li>{{ line }}</li>
							}
						</ol>
					</div>
				</pkd-card>
			}
		}
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5, 1.5rem);
			max-width: 60rem;
			margin-inline: auto;
		}

		.masthead {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			gap: var(--s-3, 0.75rem);
			flex-wrap: wrap;
		}

		h1 {
			margin: 0;
			font-size: var(--fs-2xl, 2rem);
			letter-spacing: -0.02em;
		}

		.tagline {
			margin: var(--s-1, 0.25rem) 0 0;
			color: var(--ink-muted);
			font-variant-numeric: tabular-nums;
		}

		.header-actions {
			display: flex;
			gap: 0.4rem;
		}

		button {
			font: inherit;
			cursor: pointer;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
			/* Comfortably tappable with a thumb — this is used one-handed. */
			min-height: 2.5rem;
			padding: 0.35rem 0.7rem;
		}

		button:hover {
			border-color: var(--accent, #4f6df5);
		}

		button.on {
			background: var(--accent, #4f6df5);
			color: #fff;
			border-color: var(--accent, #4f6df5);
		}

		.ghost {
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
		}

		.headline {
			margin: var(--s-4, 1rem) 0;
			padding: var(--s-3, 0.75rem) var(--s-4, 1rem);
			border-left: 3px solid var(--accent, #4f6df5);
			background: var(--surface-sunken, rgba(128, 128, 128, 0.1));
			border-radius: 0 var(--r-md, 8px) var(--r-md, 8px) 0;
			font-size: var(--fs-lg, 1.125rem);
			line-height: 1.45;
		}

		.sides {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
			gap: var(--s-4, 1rem);
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

		.who {
			display: flex;
			align-items: center;
			gap: var(--s-2, 0.5rem);
			margin-bottom: var(--s-3, 0.75rem);
		}

		.name {
			font-weight: 700;
			font-size: var(--fs-lg, 1.125rem);
		}

		.hp {
			display: grid;
			grid-template-columns: 1fr auto;
			align-items: center;
			gap: var(--s-2, 0.5rem);
		}

		.bar {
			height: 0.6rem;
			border-radius: 999px;
			background: var(--surface-sunken, rgba(128, 128, 128, 0.2));
			overflow: hidden;
		}

		.bar span {
			display: block;
			height: 100%;
			background: var(--success, #2e7d52);
			transition: width 120ms ease-out;
		}

		.pct {
			font-variant-numeric: tabular-nums;
			font-size: var(--fs-sm, 0.875rem);
			min-width: 2.6rem;
			text-align: right;
		}

		.taps,
		.field,
		.switcher {
			display: flex;
			flex-wrap: wrap;
			gap: 0.35rem;
			margin-top: var(--s-3, 0.75rem);
		}

		.taps button,
		.stages button {
			font-size: var(--fs-sm, 0.875rem);
		}

		.danger:hover {
			border-color: var(--danger, #d1495b);
			color: var(--danger, #d1495b);
		}

		.stages {
			display: flex;
			align-items: center;
			gap: 0.3rem;
			margin-top: var(--s-3, 0.75rem);
			font-size: var(--fs-sm, 0.875rem);
			flex-wrap: wrap;
		}

		.stages button {
			min-width: 2.2rem;
			min-height: 2.2rem;
			padding: 0;
		}

		.stage {
			font-variant-numeric: tabular-nums;
			min-width: 1.6rem;
			text-align: center;
		}

		.threat {
			margin-top: var(--s-3, 0.75rem) !important;
			font-size: var(--fs-sm, 0.875rem);
		}

		.chip {
			font-size: var(--fs-xs, 0.75rem);
			min-height: 2rem;
			padding: 0.2rem 0.5rem;
		}

		.chip.active {
			border-color: var(--accent, #4f6df5);
			font-weight: 600;
		}

		.chip.fainted {
			opacity: 0.4;
			text-decoration: line-through;
		}

		.options {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			gap: 0.4rem;
		}

		.option {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr auto auto;
			align-items: center;
			gap: var(--s-3, 0.75rem);
			text-align: left;
			min-height: 3rem;
		}

		.option-head {
			display: flex;
			align-items: center;
			gap: var(--s-2, 0.5rem);
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
			letter-spacing: 0.06em;
		}

		.ko.kill {
			color: var(--success, #2e7d52);
			font-weight: 700;
		}

		.none,
		.caveat {
			color: var(--ink-muted);
			font-size: var(--fs-xs, 0.75rem);
			line-height: 1.5;
		}

		.caveat {
			margin-top: var(--s-3, 0.75rem);
		}

		.log {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			gap: 0.2rem;
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
			max-height: 12rem;
			overflow-y: auto;
		}
	`,
})
export default class BattleTrackerComponent {
	protected readonly battle = inject(BattleStore);
	protected readonly advisor = inject(AdvisorStore);

	protected round(value: number): number {
		return Math.round(value);
	}

	protected signed(stage: number): string {
		return stage > 0 ? `+${stage}` : `${stage}`;
	}

	/** `3hko-or-worse` → `3HKO or worse`. A template cannot take a regex, hence a method. */
	protected koLabel(verdict: string): string {
		return verdict.replace(/-/g, ' ').replace(/\bh?ko\b/gi, (match) => match.toUpperCase());
	}

	/** Newest first, because mid-battle you only read the last line or two. */
	protected reversedLog(): string[] {
		return [...this.battle.log()].reverse();
	}
}
