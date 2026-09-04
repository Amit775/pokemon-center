<<<<<<< HEAD
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EntityPortraitComponent } from '@pokemon-center/ui-pokedex';
import { localSpriteUrl, officialArtworkUrl } from '../../shared/pokemon-avatar/pokemon-avatar.service';

/** Sprite + name, packed into one cell — the table's Name column is more than a string. */
=======
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
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
@Component({
	selector: 'pokedex-pokemon-name-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, EntityPortraitComponent],
	template: `
<<<<<<< HEAD
		<a [routerLink]="[pokemonId()]">
			<pokedex-entity-portrait [type]="primaryType()" [src]="spriteUrl()" [fallbackSrc]="artworkUrl()" [size]="32" [alt]="name()" />
			<span>{{ name() }}</span>
		</a>
=======
		@if (row(); as pokemon) {
			<a [routerLink]="[pokemon.id]">
				<pokedex-entity-portrait [type]="pokemon.types[0] ?? 'normal'" [src]="spriteUrl()" [fallbackSrc]="artworkUrl()" [size]="32" [alt]="pokemon.name" />
				<span>{{ pokemon.name }}</span>
			</a>
		}
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
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
<<<<<<< HEAD
export class PokemonNameCellComponent {
	readonly pokemonId = input.required<number>();
	readonly name = input.required<string>();
	readonly primaryType = input<string>('normal');

	protected spriteUrl(): string {
		return localSpriteUrl(this.pokemonId());
	}

	protected artworkUrl(): string {
		return officialArtworkUrl(this.pokemonId());
=======
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
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
	}
}
