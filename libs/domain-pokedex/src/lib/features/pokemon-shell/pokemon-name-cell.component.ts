import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';
import { EntityPortraitComponent } from '@pokemon-center/ui-pokedex';
import { localSpriteUrl, officialArtworkUrl } from '../../shared/pokemon-avatar/pokemon-avatar.service';
import type { PokemonRow } from './pokemon-grid-columns';

/**
 * Sprite + name, packed into one cell — the grid's Name column is more than a string.
 *
 * An AG Grid cell renderer: the grid supplies the row via `agInit`/`refresh` rather than template
 * inputs. The rendered link doubles as row selection — navigating to it IS selecting the row, so
 * this cell needs no click handler of its own.
 */
@Component({
	selector: 'pokedex-pokemon-name-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, EntityPortraitComponent],
	template: `
		@if (row(); as pokemon) {
			<a [routerLink]="[pokemon.id]">
				<pokedex-entity-portrait [type]="pokemon.types[0] ?? 'normal'" [src]="spriteUrl()" [fallbackSrc]="artworkUrl()" [size]="32" [alt]="pokemon.name" />
				<span>{{ pokemon.name }}</span>
			</a>
		}
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
export class PokemonNameCellComponent implements ICellRendererAngularComp {
	protected readonly row = signal<PokemonRow | null>(null);

	agInit(params: ICellRendererParams<PokemonRow>): void {
		this.row.set(params.data ?? null);
	}

	refresh(params: ICellRendererParams<PokemonRow>): boolean {
		this.row.set(params.data ?? null);
		return true;
	}

	protected spriteUrl(): string {
		const pokemon = this.row();
		return pokemon ? localSpriteUrl(pokemon.id) : '';
	}

	protected artworkUrl(): string {
		const pokemon = this.row();
		return pokemon ? officialArtworkUrl(pokemon.id) : '';
	}
}
