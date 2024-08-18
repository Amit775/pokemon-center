import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  Route,
  RouterStateSnapshot,
} from '@angular/router';
import { PokemonService } from '@pokemon/data';
import { Move, Pokemon } from 'pokenode-ts';
import { MovePageComponent } from './features/move-page/move-page.component';
import { MovesListComponent } from './features/moves-list/moves-list.component';
import { PokemonListComponent } from './features/pokemon-list/pokemon-list.component';
import { PokemonAboutComponent } from './features/pokemon-page/pokemon-about/pokemon-about.component';
import { PokemonMovesComponent } from './features/pokemon-page/pokemon-moves/pokemon-moves.component';
import { PokemonPageComponent } from './features/pokemon-page/pokemon-page.component';
import { PokemonStatsComponent } from './features/pokemon-page/pokemon-stats/pokemon-stats.component';

const pokemon: ResolveFn<Pokemon> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const service = inject(PokemonService);
  return service.getPokemon(Number(route.parent!.params['id']));
};

const move: ResolveFn<Move> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const service = inject(PokemonService);
  return service.getMove(route.params['id']);
};

export const domainPokedexRoutes: Route[] = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonListComponent },
  {
    path: 'pokemon/:id',
    component: PokemonPageComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: PokemonAboutComponent, resolve: { pokemon } },
      { path: 'stats', component: PokemonStatsComponent, resolve: { pokemon } },
      { path: 'moves', component: PokemonMovesComponent, resolve: { pokemon } },
    ],
  },
  { path: 'moves', component: MovesListComponent },
  { path: 'moves/:id', component: MovePageComponent, resolve: { move } },
];
