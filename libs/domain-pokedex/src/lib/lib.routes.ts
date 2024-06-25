import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  Route,
  RouterStateSnapshot,
} from '@angular/router';
import { PokemonService } from '@pokemon/data';
import { Pokemon } from 'pokenode-ts';
import { PokemonAboutComponent } from './features/pokemon-page/pokemon-about/pokemon-about.component';
import { PokemonMovesComponent } from './features/pokemon-page/pokemon-moves/pokemon-moves.component';
import { PokemonPageComponent } from './features/pokemon-page/pokemon-page.component';
import { PokemonStatsComponent } from './features/pokemon-page/pokemon-stats/pokemon-stats.component';
import { PokedexComponent } from './pokedex.component';

const pokemon: ResolveFn<Pokemon> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const service = inject(PokemonService);
  return service.getPokemon(Number(route.parent!.params['id']));
};

export const domainPokedexRoutes: Route[] = [
  { path: '', component: PokedexComponent },
  {
    path: ':id',
    component: PokemonPageComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: PokemonAboutComponent, resolve: { pokemon } },
      { path: 'stats', component: PokemonStatsComponent, resolve: { pokemon } },
      { path: 'moves', component: PokemonMovesComponent, resolve: { pokemon } },
    ],
  },
];
