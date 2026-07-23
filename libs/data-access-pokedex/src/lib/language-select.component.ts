import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguagesDocument } from './generated/graphql';
import { gqlResource } from './gql-resource';
import { PokedexContextStore } from './pokedex-context.store';

/** Header control: pick the display language for names, flavor and effect text. */
@Component({
	selector: 'pokedex-language-select',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<label class="language-select">
			<span class="sr-only">Display language</span>
			<select (change)="onChange($event)" title="Display language">
				@for (lang of languages(); track lang.id) {
					<option [value]="lang.code" [selected]="lang.code === store.language()">{{ lang.name }}</option>
				}
			</select>
		</label>
	`,
	styles: `
		select {
			padding: 0.4rem 0.6rem;
			border-radius: var(--r-sm);
			border: 1px solid var(--line);
			background: var(--surface);
			color: var(--ink);
			font: inherit;
			font-size: var(--fs-sm);
		}
		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			overflow: hidden;
			clip: rect(0 0 0 0);
		}
	`,
})
export class LanguageSelectComponent {
	protected readonly store = inject(PokedexContextStore);

	private readonly list = gqlResource(LanguagesDocument, () => ({}));
	protected readonly languages = computed(() => (this.list.hasValue() ? (this.list.value()?.languages ?? []) : []));

	protected onChange(event: Event): void {
		this.store.setLanguage((event.target as HTMLSelectElement).value);
	}
}
