import { Route } from '@angular/router';

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
			},
			{
				path: 'stats',
				loadComponent: () => import('./features/pokemon-page/pokemon-stats/pokemon-stats.component').then((m) => m.PokemonStatsComponent),
			},
			{
				path: 'moves',
				loadComponent: () => import('./features/pokemon-page/pokemon-moves/pokemon-moves.component').then((m) => m.PokemonMovesComponent),
			},
		],
	},
	{ path: 'moves', loadComponent: () => import('./features/moves-list/moves-list.component').then((m) => m.MovesListComponent) },
	{
		path: 'moves/:id',
		loadComponent: () => import('./features/move-page/move-page.component').then((m) => m.MovePageComponent),
	},
];
