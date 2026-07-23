import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

export function getImageUrl(index: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`;
}

/** Official-artwork PNG — served with a proper image content-type, so it renders via a plain <img src>. */
export function officialArtworkUrl(index: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`;
}

/** Locally mirrored sprite (see tools/mirror-sprites.mjs). Falls back to the remote artwork when absent. */
export function localSpriteUrl(index: number): string {
  return `/sprites/${index}.png`;
}

@Injectable({ providedIn: 'root' })
export class PokemonAvatarService {
  private _cache = new Map<number, string>();

  private client = inject(HttpClient);

  public getSvg(pokemonId: number): Observable<string> {
    const svg = this._cache.get(pokemonId);
    if (svg != null) return of(svg);

    return this.client
      .get(getImageUrl(pokemonId), {
        responseType: 'text',
        headers: { Accept: 'image/svg+xml' },
      })
      .pipe(tap((svg: string) => this.saveSvg(pokemonId, svg)));
  }

  private saveSvg(pokemonId: number, svg: string): void {
    this._cache.set(pokemonId, svg);
  }
}
