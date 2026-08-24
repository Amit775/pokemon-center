import { Route } from '@angular/router';

/**
 * Two apps, one build.
 *
 * `/nuzlocke` and `/champions` each mount their own shell component, so each owns its header,
 * its navigation and its identity — neither can see the other's tabs. They share a build and a
 * dev server because "two apps" is about how it feels to use, not how it deploys.
 *
 * Champions is the default landing because it is the active project; Nuzlocke stays one click
 * away from either header.
 */
export const routes: Route[] = [
	{ path: '', pathMatch: 'full', redirectTo: 'champions' },

	{
		path: 'champions',
		loadComponent: () => import('./layout/champions-shell/champions-shell.component'),
		loadChildren: () => import('@pokemon-center/domain-champions'),
	},

	{
		path: 'nuzlocke',
		loadComponent: () => import('./layout/nuzlocke-shell/nuzlocke-shell.component'),
		children: [
			{ path: '', loadComponent: () => import('./layout/home/home.component') },
			{ path: 'pokedex', loadChildren: () => import('@pokemon-center/domain-pokedex') },
			{ path: 'school', loadChildren: () => import('@pokemon-center/domain-school') },
			{ path: 'arena', loadChildren: () => import('@pokemon-center/domain-arena') },
		],
	},

	// Deep links that predate the split. Prefix redirects, so `/pokedex/25` keeps its tail.
	{ path: 'pokedex', redirectTo: 'nuzlocke/pokedex' },
	{ path: 'school', redirectTo: 'nuzlocke/school' },
	{ path: 'arena', redirectTo: 'nuzlocke/arena' },

	{ path: '**', redirectTo: 'champions' },
];
