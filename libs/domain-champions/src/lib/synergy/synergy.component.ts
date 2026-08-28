import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TypeChipComponent, UiCardComponent } from '@pokemon-center/ui-pokedex';
import { SlotPickerComponent } from '../advisor/slot-picker.component';
import { SYNERGY_TEAM_SIZE, SynergyStore } from './synergy.store';

/**
 * A transparent team-building assistant.
 *
 * It deliberately displays evidence instead of a synthetic team-quality number: all advice is
 * traceable to a rule and the Pokémon and types involved in that rule.
 */
@Component({
	selector: 'champions-synergy',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotPickerComponent, TypeChipComponent, UiCardComponent],
	template: `
		<header>
			<div>
				<p class="eyebrow">Team-building assistant</p>
				<h1>Synergy</h1>
				<p class="tagline">Build six, see the evidence, then make the next choice with context.</p>
			</div>
			<button type="button" class="clear" (click)="store.clearTeam()" [disabled]="store.selectedSlugs().length === 0">Clear team</button>
		</header>

		<section class="format" aria-label="Battle format">
			<span>Format</span>
			<button type="button" [class.selected]="store.format() === 'singles'" (click)="store.setFormat('singles')">Singles</button>
			<button type="button" [class.selected]="store.format() === 'doubles'" (click)="store.setFormat('doubles')">Doubles</button>
		</section>

		@if (store.error()) {
			<pokedex-card><p class="panel error">Champions data is unavailable. Start the Champions service and try again.</p></pokedex-card>
		} @else if (store.isLoading()) {
			<pokedex-card><p class="panel">Loading the current regulation roster and type chart…</p></pokedex-card>
		} @else {
			<section aria-labelledby="team-heading">
				<h2 id="team-heading">Your team <span>{{ store.team().length }} / 6</span></h2>
				<div class="slots">
					@for (slot of slots; track slot) {
						<champions-slot-picker
							[index]="slot"
							[selected]="selected(slot)"
							(picked)="store.setSlot(slot, $event)"
							(clear)="store.setSlot(slot, null)"
						/>
					}
				</div>
			</section>

			@if (store.team().length === 0) {
				<pokedex-card><p class="panel">Start with any legal Pokémon. Once you add one, recommendations are ranked by the new defensive answers and STAB diversity they create—not an invented tier list.</p></pokedex-card>
			} @else {
				<div class="analysis-grid">
					<section>
						<h2>What is working</h2>
						@if (store.analysis().positiveFindings.length === 0) {
							<p class="empty">No verified positive relationship yet. Add another Pokémon to evaluate team interactions.</p>
						} @else {
							@for (finding of store.analysis().positiveFindings; track finding.rule + finding.types.join()) {
								<pokedex-card><article class="finding good"><strong>{{ ruleName(finding.rule) }}</strong><p>{{ finding.explanation }}</p><div>@for (type of finding.types; track type) { <pokedex-type-chip [type]="type" /> }</div></article></pokedex-card>
							}
						}
					</section>
					<section>
						<h2>Needs attention</h2>
						@if (store.analysis().negativeFindings.length === 0) {
							<p class="empty">No shared type weakness is currently unaddressed by the team.</p>
						} @else {
							@for (finding of store.analysis().negativeFindings; track finding.rule + finding.types.join()) {
								<pokedex-card><article class="finding warn"><strong>{{ ruleName(finding.rule) }}</strong><p>{{ finding.explanation }}</p><div>@for (type of finding.types; track type) { <pokedex-type-chip [type]="type" /> }</div></article></pokedex-card>
							}
						}
					</section>
				</div>

				<section class="recommendations">
					<h2>Recommended next</h2>
					<p>Each candidate is compared with the current team using the same rules above.</p>
					<div class="recommendation-list">
						@for (recommendation of store.recommendations(); track recommendation.candidate.slug) {
							<pokedex-card><article class="recommendation">
								<div><h3>{{ recommendation.candidate.name }}</h3><div class="types">@for (type of recommendation.candidate.types; track type) { <pokedex-type-chip [type]="type" /> }</div></div>
								@if (recommendation.improvements.length > 0) { <p class="improves">+ {{ recommendation.improvements[0].explanation }}</p> }
								@if (recommendation.regressions.length > 0) { <p class="regresses">− {{ recommendation.regressions[0].explanation }}</p> }
								<button type="button" (click)="add(recommendation.candidate.slug)" [disabled]="store.team().length === 6">Add to team</button>
							</article></pokedex-card>
						}
					</div>
				</section>
			}
		}
	`,
	styles: `
		:host { display: block; max-width: 76rem; margin-inline: auto; padding: var(--s-5); }
		header { display: flex; align-items: start; justify-content: space-between; gap: var(--s-4); flex-wrap: wrap; }
		h1, h2, h3, p { margin: 0; } h1 { font-size: var(--fs-2xl); } h2 { margin: var(--s-6) 0 var(--s-3); font-size: var(--fs-lg); } h2 span, .tagline, .empty, .recommendations > p { color: var(--ink-muted); font-size: var(--fs-sm); font-weight: 400; }
		.eyebrow { color: var(--accent); font-size: var(--fs-xs); font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; } .tagline { margin-top: var(--s-1); }
		button { font: inherit; cursor: pointer; border: 1px solid var(--line); border-radius: var(--r-md); color: var(--ink); background: var(--surface); padding: var(--s-2) var(--s-3); } button:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; } button:disabled { cursor: not-allowed; color: var(--ink-faint); }
		.format { display: flex; gap: var(--s-2); align-items: center; margin: var(--s-5) 0; font-size: var(--fs-sm); } .format span { color: var(--ink-muted); } .format .selected { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
		.slots { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: var(--s-2); } .panel { padding: var(--s-4); color: var(--ink-muted); line-height: 1.5; } .error { color: var(--crit); }
		.analysis-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--s-5); } .analysis-grid pokedex-card { display: block; margin-bottom: var(--s-2); } .finding, .recommendation { padding: var(--s-3); } .finding { border-left: var(--s-1) solid var(--good); } .finding.warn { border-color: var(--warn); } .finding p, .recommendation p { margin: var(--s-2) 0; color: var(--ink-muted); font-size: var(--fs-sm); line-height: 1.45; } .finding div, .types { display: flex; gap: var(--s-1); flex-wrap: wrap; }
		.recommendation-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr)); gap: var(--s-3); } .recommendation { display: grid; gap: var(--s-2); height: calc(100% - var(--s-6)); } .recommendation h3 { font-size: var(--fs-md); } .improves { color: var(--good) !important; } .regresses { color: var(--warn) !important; } .recommendation button { margin-top: auto; }
		@media (max-width: 48rem) { .slots { grid-template-columns: repeat(3, minmax(0, 1fr)); } .analysis-grid { grid-template-columns: 1fr; } }
		@media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition-duration: 0.01ms !important; } }
	`,
})
export default class SynergyComponent {
	protected readonly store = inject(SynergyStore);
	protected readonly slots = Array.from({ length: SYNERGY_TEAM_SIZE }, (_, index) => index);
	protected readonly bySlug = computed(() => new Map(this.store.roster().map((pokemon) => [pokemon.slug, pokemon])));

	protected selected(index: number): { name: string; types: string[] } | null {
		const slug = this.store.slots()[index];
		const pokemon = slug ? this.bySlug().get(slug) : null;
		return pokemon ? { name: pokemon.name, types: pokemon.types } : null;
	}

	protected add(slug: string): void {
		const index = this.store.slots().findIndex((current) => current === null);
		if (index !== -1) this.store.setSlot(index, slug);
	}

	protected ruleName(rule: string): string {
		return rule.replace(/-/g, ' ');
	}
}
