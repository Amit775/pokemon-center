import { Route } from '@angular/router';

/**
 * Champions routes, mounted under the Champions shell.
 *
 * The Pokédex is the landing page rather than a separate overview screen: the regulation and
 * its countdown now live in the shell header, which is what the old home page mostly was, and
 * a tab bar makes a "home" tab redundant.
 */
export const domainChampionsRoutes: Route[] = [
	{ path: '', pathMatch: 'full', redirectTo: 'dex' },

	{ path: 'dex', loadComponent: () => import('./dex/roster.component') },
	{ path: 'dex/changes', loadComponent: () => import('./dex/changes.component') },
	// After `dex/changes`, so the literal segment wins over the parameter.
	{ path: 'dex/:slug', loadComponent: () => import('./dex/pokemon-detail.component') },

	{ path: 'box', loadComponent: () => import('./box/box.component') },

	{ path: 'companion', loadComponent: () => import('./advisor/team-preview.component') },
	{ path: 'companion/live', loadComponent: () => import('./battle/battle-tracker.component') },

	// Paths from before the split, kept so existing links and bookmarks still resolve.
	{ path: 'preview', redirectTo: 'companion' },
	{ path: 'battle', redirectTo: 'companion/live' },
	{ path: 'changes', redirectTo: 'dex/changes' },
];
