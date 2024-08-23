import { Directive, ElementRef, effect, inject, input, output, untracked } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokemonAvatarService } from './pokemon-avatar.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'img[index]',
  standalone: true,
})
export class PokemonAvatarDirective {
  private host = inject(ElementRef).nativeElement as HTMLImageElement;
  private service = inject(PokemonAvatarService);

  public index = input.required<number>();
  public loaded = output<string>();

  #loadImage = effect((cleanup) => {
    const index = this.index();

    untracked(() => {
      const sub = this.createPokemonImage(index).subscribe((svg) => (this.host.src = svg));

      cleanup(() => sub.unsubscribe());
    });
  });

  private createPokemonImage(index: number): Observable<string> {
    return this.service.getSvg(index).pipe(map((svg: string) => this.createSvgUrl(svg)));
  }

  private createSvgUrl(svg: string): string {
    const blob = new Blob([svg ?? ''], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    this.host.addEventListener('load', () => URL.revokeObjectURL(url), {
      once: true,
    });

    return url;
  }
}
