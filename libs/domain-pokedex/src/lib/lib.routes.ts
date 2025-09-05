import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, ResolveFn, Route, RouterStateSnapshot } from '@angular/router';
import { PokemonService, Move, Pokemon } from '@pokemon-center/data';

const pokemon: ResolveFn<Pokemon> = (route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): MaybeAsync<Pokemon> => {
	const service = inject(PokemonService);
	return service.getPokemon(Number(route.parent!.params['id']));
};

const move: ResolveFn<Move> = (route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): MaybeAsync<Move> => {
	const service = inject(PokemonService);
	return service.getMove(route.params['id']);
};

export const domainPokedexRoutes: Route[] = [
	{ path: '', redirectTo: 'pokemon', pathMatch: 'full' },
	{ path: 'pokemon', loadComponent: () => import('./features/pokemon-list/pokemon-list.component').then((m) => m.PokemonListComponent) },
	{
		path: 'pokemon/:id',
		loadComponent: () => import('./features/pokemon-page/pokemon-page.component').then((m) => m.PokemonPageComponent),
		children: [
			{ path: '', redirectTo: 'about', pathMatch: 'full' },
			{
				path: 'about',
				loadComponent: () => import('./features/pokemon-page/pokemon-about/pokemon-about.component').then((m) => m.PokemonAboutComponent),
				resolve: { pokemon },
			},
			{
				path: 'stats',
				loadComponent: () => import('./features/pokemon-page/pokemon-stats/pokemon-stats.component').then((m) => m.PokemonStatsComponent),
				resolve: { pokemon },
			},
			{
				path: 'moves',
				loadComponent: () => import('./features/pokemon-page/pokemon-moves/pokemon-moves.component').then((m) => m.PokemonMovesComponent),
				resolve: { pokemon },
			},
		],
	},
	{ path: 'moves', loadComponent: () => import('./features/moves-list/moves-list.component').then((m) => m.MovesListComponent) },
	{
		path: 'moves/:id',
		loadComponent: () => import('./features/move-page/move-page.component').then((m) => m.MovePageComponent),
		resolve: { move },
	},
];
