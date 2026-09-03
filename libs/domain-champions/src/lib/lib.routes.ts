import { Route } from '@angular/router';
import { provideDataGrid } from '@pokemon-center/ui-pokedex';

/**
 * Champions routes, mounted under the Champions shell.
 *
 * The Pokédex is the landing page rather than a separate overview screen: the regulation and
 * its countdown now live in the shell header, which is what the old home page mostly was, and
 * a tab bar makes a "home" tab redundant.
 */
export const domainChampionsRoutes: Route[] = [
	{ path: '', pathMatch: 'full', redirectTo: 'pokedex' },

	// `provideDataGrid()` is route-scoped rather than app-wide so AG Grid stays out of the eagerly
	// loaded main bundle — these two routes are the ones that actually render a grid (the roster
	// table and the move-learners grid on the detail page).
	{ path: 'pokedex', loadComponent: () => import('./pokedex/roster.component'), providers: [provideDataGrid()] },
	{ path: 'pokedex/changes', loadComponent: () => import('./pokedex/changes.component') },
	// After `pokedex/changes`, so the literal segment wins over the parameter.
	{ path: 'pokedex/:slug', loadComponent: () => import('./pokedex/pokemon-detail.component'), providers: [provideDataGrid()] },

	{ path: 'box', loadComponent: () => import('./box/box.component') },

	{ path: 'companion', loadComponent: () => import('./advisor/team-preview.component') },
	{ path: 'companion/live', loadComponent: () => import('./battle/battle-tracker.component') },
	{ path: 'synergy', loadComponent: () => import('./synergy/synergy.component') },

	{ path: 'simulator', loadComponent: () => import('./simulator/simulator.component') },
	{ path: 'school', loadComponent: () => import('./school/school.component') },

	// Paths from before the split, kept so existing links and bookmarks still resolve.
	{ path: 'preview', redirectTo: 'companion' },
	{ path: 'battle', redirectTo: 'companion/live' },
	{ path: 'changes', redirectTo: 'pokedex/changes' },
];
