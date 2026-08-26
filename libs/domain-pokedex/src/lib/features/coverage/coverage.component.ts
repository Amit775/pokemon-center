import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CoverageDocument, gqlResource } from '@pokemon-center/data-access-pokedex';
import { MatchupCell, MatchupGridComponent, SectionHeadingComponent } from '@pokemon-center/ui-pokedex';

/** Coverage Checker: pick up to 4 moves, see the best multiplier vs each of the 18 defending types. */
@Component({
	standalone: true,
	selector: 'pokedex-coverage',
	templateUrl: './coverage.component.html',
	styleUrl: './coverage.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatchupGridComponent, SectionHeadingComponent],
})
export class CoverageComponent {
	protected readonly moves = signal<string[]>([]);
	protected readonly draft = signal('');

	private readonly query = gqlResource(CoverageDocument, () => ({ moves: this.moves() }));

	protected readonly cells = computed<MatchupCell[]>(() => {
		if (!this.moves().length || !this.query.hasValue()) return [];
		return (this.query.value()?.coverage ?? []).map((cell) => ({ type: cell.defendingType, factor: cell.bestFactor, note: cell.viaMove ? 'via ' + cell.viaMove : null }));
	});

	protected onInput(event: Event): void {
		this.draft.set((event.target as HTMLInputElement).value);
	}

	protected addMove(): void {
		const slug = this.draft().trim().toLowerCase().replace(/\s+/g, '-');
		if (slug && !this.moves().includes(slug) && this.moves().length < 4) {
			this.moves.set([...this.moves(), slug]);
		}
		this.draft.set('');
	}

	protected removeMove(slug: string): void {
		this.moves.set(this.moves().filter((thi) => thi !== slug));
	}
}
