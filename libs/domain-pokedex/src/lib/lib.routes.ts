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
			{
				path: 'locations',
				loadComponent: () =>
					import('./features/pokemon-page/pokemon-locations/pokemon-locations.component').then((m) => m.PokemonLocationsComponent),
			},
		],
	},
	{ path: 'moves', loadComponent: () => import('./features/moves-list/moves-list.component').then((m) => m.MovesListComponent) },
	{
		path: 'moves/:id',
		loadComponent: () => import('./features/move-page/move-page.component').then((m) => m.MovePageComponent),
	},
	{
		path: 'abilities/:id',
		loadComponent: () => import('./features/ability-page/ability-page.component').then((m) => m.AbilityPageComponent),
	},
	{
		path: 'items/:id',
		loadComponent: () => import('./features/item-page/item-page.component').then((m) => m.ItemPageComponent),
	},
	{
		path: 'types/:id',
		loadComponent: () => import('./features/type-page/type-page.component').then((m) => m.TypePageComponent),
	},
	{
		path: 'analyzer',
		loadComponent: () => import('./features/analyzer/analyzer.component').then((m) => m.AnalyzerComponent),
	},
	{
		path: 'coverage',
		loadComponent: () => import('./features/coverage/coverage.component').then((m) => m.CoverageComponent),
	},
	{
		path: 'compare',
		loadComponent: () => import('./features/compare/compare.component').then((m) => m.CompareComponent),
	},
	{
		path: 'kit',
		loadComponent: () => import('./features/kit/kit.component').then((m) => m.KitComponent),
	},
];
