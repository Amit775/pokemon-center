import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComparePokemonDocument, ComparePokemonQuery, gqlResource } from '@pokemon-center/data-access-pokedex';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';

type ComparedPokemon = NonNullable<ComparePokemonQuery['pokemon']>;

const STAT_ORDER = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'];

/** Compare 2–4 pokemon side by side: typing, base stats (with per-row winner), abilities. */
@Component({
	standalone: true,
	selector: 'pokedex-compare',
	templateUrl: './compare.component.html',
	styleUrl: './compare.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TypeChipComponent],
})
export class CompareComponent {
	private readonly router = inject(Router);
	private readonly route = inject(ActivatedRoute);

	private readonly initial = (this.route.snapshot.queryParamMap.get('p') ?? '').split(',');
	protected readonly slots = [signal(this.initial[0] ?? ''), signal(this.initial[1] ?? ''), signal(this.initial[2] ?? ''), signal(this.initial[3] ?? '')];

	private readonly resources = this.slots.map((slot) => gqlResource(ComparePokemonDocument, () => (slot() ? { idOrSlug: slot() } : { idOrSlug: '__none__' })));

	protected readonly columns = computed<(ComparedPokemon | null)[]>(() =>
		this.slots.map((slot, i) => (slot() ? (this.resources[i].value()?.pokemon ?? null) : null)),
	);

	protected readonly filled = computed(() => this.columns().filter((c): c is ComparedPokemon => c !== null));

	protected readonly statOrder = STAT_ORDER;

	protected baseStat(pokemon: ComparedPokemon, statId: string): number {
		return pokemon.stats.find((s) => s.stat.identifier === statId)?.base_stat ?? 0;
	}

	protected bst(pokemon: ComparedPokemon): number {
		return pokemon.stats.reduce((sum, s) => sum + s.base_stat, 0);
	}

	protected isMax(statId: string, value: number): boolean {
		const values = this.filled().map((p) => this.baseStat(p, statId));
		return values.length > 1 && value === Math.max(...values) && value > 0;
	}

	protected isMaxBst(value: number): boolean {
		const values = this.filled().map((p) => this.bst(p));
		return values.length > 1 && value === Math.max(...values);
	}

	protected onSlot(index: number, event: Event): void {
		this.slots[index].set((event.target as HTMLInputElement).value.trim().toLowerCase());
		this.syncUrl();
	}

	private syncUrl(): void {
		const p = this.slots.map((s) => s()).filter(Boolean).join(',');
		this.router.navigate([], { relativeTo: this.route, queryParams: { p: p || null }, replaceUrl: true });
	}
}
