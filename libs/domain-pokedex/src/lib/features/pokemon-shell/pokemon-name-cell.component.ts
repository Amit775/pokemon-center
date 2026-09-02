import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EntityPortraitComponent } from '@pokemon-center/ui-pokedex';
import { localSpriteUrl, officialArtworkUrl } from '../../shared/pokemon-avatar/pokemon-avatar.service';

/** Sprite + name, packed into one cell — the table's Name column is more than a string. */
@Component({
	selector: 'pokedex-pokemon-name-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, EntityPortraitComponent],
	template: `
		<a [routerLink]="['/pokedex', 'pokemon', pokemonId()]">
			<pokedex-entity-portrait [type]="primaryType()" [src]="spriteUrl()" [fallbackSrc]="artworkUrl()" [size]="32" [alt]="name()" />
			<span>{{ name() }}</span>
		</a>
	`,
	styles: `
		:host {
			display: flex;
			align-items: center;
		}
		a {
			display: flex;
			align-items: center;
			gap: var(--s-2);
			color: inherit;
			text-decoration: none;
		}
	`,
})
export class PokemonNameCellComponent {
	readonly pokemonId = input.required<number>();
	readonly name = input.required<string>();
	readonly primaryType = input<string>('normal');

	protected spriteUrl(): string {
		return localSpriteUrl(this.pokemonId());
	}

	protected artworkUrl(): string {
		return officialArtworkUrl(this.pokemonId());
	}
}
