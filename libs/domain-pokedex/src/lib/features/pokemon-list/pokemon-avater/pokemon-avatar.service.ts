import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

export function getImageUrl(index: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`;
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
