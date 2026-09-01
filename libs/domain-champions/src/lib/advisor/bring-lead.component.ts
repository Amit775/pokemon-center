import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RankedCandidate, SelectionRecommendation } from '@pokemon-center/champions-engine';

/**
 * The ranked bring list with the leader(s) flagged, each backed by its top findings.
 *
 * Findings are shown, not a score — the same "explain, don't just rank" discipline as the
 * synergy screen, applied to the decision that actually opens the match.
 */
@Component({
	selector: 'champions-bring-lead',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
	template: `
		<ol class="bring">
			@for (entry of recommendation().bring; track entry.build.species.slug; let rank = $index) {
				<li>
					<div class="head">
						<span class="rank">{{ rank + 1 }}</span>
						<span class="name">{{ entry.build.species.name }}</span>
						@if (isLead(entry)) {
							<span class="lead-badge">Lead</span>
						}
					</div>
					<ul class="findings">
						@for (finding of topFindings(entry); track finding.explanation) {
							<li [class.negative]="finding.impact === 'negative'">{{ finding.explanation }}</li>
						}
					</ul>
				</li>
			}
		</ol>
	`,
	styles: `
		.bring {
			margin: 0;
			padding: 0;
			list-style: none;
			display: grid;
			gap: var(--s-3, 0.75rem);
		}

		.head {
			display: flex;
			align-items: center;
			gap: var(--s-2, 0.5rem);
		}

		.rank {
			font-variant-numeric: tabular-nums;
			color: var(--ink-muted);
		}

		.name {
			font-weight: 600;
		}

		.lead-badge {
			font-size: var(--fs-xs, 0.75rem);
			text-transform: uppercase;
			letter-spacing: 0.04em;
			padding: 0.1rem 0.4rem;
			border-radius: var(--r-sm, 4px);
			background: var(--accent-soft, rgba(79, 109, 245, 0.1));
			color: var(--accent, #4f6df5);
		}

		.findings {
			margin: 0.25rem 0 0;
			padding-left: 1.25rem;
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
		}

		.findings li.negative {
			color: var(--danger, #c0392b);
		}
	`,
})
export class BringLeadComponent {
	readonly recommendation = input.required<SelectionRecommendation>();

	protected isLead(entry: RankedCandidate): boolean {
		return this.recommendation().leads.includes(entry);
	}

	protected topFindings(entry: RankedCandidate) {
		return [...entry.findings].sort((first, second) => second.magnitude - first.magnitude).slice(0, 3);
	}
}
