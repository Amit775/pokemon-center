import { ChangeDetectionStrategy, Component, HostListener, computed, effect, inject, signal, viewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SearchDocument } from './generated/graphql';
import { gqlResource } from './gql-resource';

/** Global Ctrl+K fuzzy search across every entity kind, in every language. */
@Component({
	selector: 'pokedex-omnisearch',
	template: `
		<button type="button" class="trigger" (click)="open()" title="Search everything (Ctrl+K)">🔍 Ctrl+K</button>
		@if (isOpen()) {
			<div class="backdrop" (click)="close()" (keydown.escape)="close()" tabindex="-1">
				<div class="panel" (click)="$event.stopPropagation()" (keydown)="$event.stopPropagation()" tabindex="-1">
					<input
						#searchInput
						type="search"
						placeholder="Search pokemon, moves, abilities, items, types — any language…"
						[value]="term()"
						(input)="onInput($event)"
						(keydown.escape)="close()"
						(keydown.enter)="openFirst()"
					/>
					@for (group of groups(); track group.kind) {
						<div class="group">
							<div class="kind">{{ group.kind }}</div>
							@for (hit of group.hits; track hit.canonicalId) {
								<button type="button" class="hit" [disabled]="!isNavigable(hit.kind)" (click)="go(hit.kind, hit.id)">
									<span class="name">{{ hit.matchedName }}</span>
									@if (hit.matchedName.toLowerCase() !== hit.slug) {
										<span class="slug">{{ hit.slug }}</span>
									}
								</button>
							}
						</div>
					}
					@if (term() && groups().length === 0) {
						<div class="empty">No matches — try fewer letters, typos are fine</div>
					}
				</div>
			</div>
		}
	`,
	styles: `
		.trigger {
			padding: 0.25rem 0.75rem;
			border-radius: 6px;
			cursor: pointer;
		}
		.backdrop {
			position: fixed;
			inset: 0;
			background: rgba(0, 0, 0, 0.5);
			z-index: 1000;
			display: flex;
			justify-content: center;
			padding-top: 10vh;
		}
		.panel {
			width: min(40rem, 90vw);
			max-height: 70vh;
			overflow-y: auto;
			background: var(--mat-sys-surface, #222);
			border-radius: 10px;
			padding: 1rem;
			height: fit-content;
		}
		input {
			width: 100%;
			padding: 0.6rem 0.8rem;
			font-size: 1.1rem;
			border-radius: 8px;
			box-sizing: border-box;
		}
		.group .kind {
			opacity: 0.6;
			text-transform: uppercase;
			font-size: 0.75rem;
			margin: 0.75rem 0 0.25rem;
		}
		.hit {
			display: flex;
			gap: 0.75rem;
			width: 100%;
			text-align: left;
			padding: 0.4rem 0.6rem;
			border-radius: 6px;
			cursor: pointer;
			background: transparent;
			border: none;
			color: inherit;
		}
		.hit:hover:not(:disabled) {
			background: rgba(128, 128, 128, 0.2);
		}
		.hit:disabled {
			opacity: 0.5;
			cursor: default;
		}
		.hit .slug {
			opacity: 0.6;
		}
		.empty {
			padding: 1rem;
			opacity: 0.7;
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OmnisearchComponent {
	private readonly router = inject(Router);

	protected readonly isOpen = signal(false);
	protected readonly term = signal('');

	private readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

	private readonly results = gqlResource(SearchDocument, () => ({ term: this.term(), takePerKind: 5 }));

	protected readonly groups = computed(() => {
		if (!this.term()) return [];
		const hits = this.results.value()?.search ?? [];
		const kinds = ['pokemon', 'move', 'ability', 'item', 'type'];
		return kinds
			.map((kind) => ({ kind, hits: hits.filter((hit) => hit.kind === kind) }))
			.filter((group) => group.hits.length > 0);
	});

	constructor() {
		effect(() => {
			if (this.isOpen()) this.searchInput()?.nativeElement.focus();
		});
	}

	@HostListener('document:keydown.control.k', ['$event'])
	onShortcut(event: Event): void {
		event.preventDefault();
		this.open();
	}

	protected open(): void {
		this.isOpen.set(true);
	}

	protected close(): void {
		this.isOpen.set(false);
		this.term.set('');
	}

	protected onInput(event: Event): void {
		this.term.set((event.target as HTMLInputElement).value);
	}

	protected isNavigable(_kind: string): boolean {
		return true;
	}

	protected go(kind: string, id: number): void {
		this.close();
		const segment = { pokemon: 'pokemon', move: 'moves', ability: 'abilities', item: 'items', type: 'types' }[kind] ?? 'pokemon';
		this.router.navigate(['/pokedex', segment, id]);
	}

	protected openFirst(): void {
		const first = this.groups()
			.flatMap((thi) => thi.hits)
			.find((thi) => this.isNavigable(thi.kind));
		if (first) this.go(first.kind, first.id);
	}
}
