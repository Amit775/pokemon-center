import { Route } from '@angular/router';

export const domainChampionsRoutes: Route[] = [
	{ path: '', loadComponent: () => import('./features/champions-home/champions-home.component') },
	{ path: 'preview', loadComponent: () => import('./advisor/team-preview.component') },
	{ path: 'battle', loadComponent: () => import('./battle/battle-tracker.component') },
	{ path: 'dex', loadComponent: () => import('./dex/roster.component') },
	// `slug` binds straight to the component input via withComponentInputBinding.
	{ path: 'dex/:slug', loadComponent: () => import('./dex/pokemon-detail.component') },
	{ path: 'changes', loadComponent: () => import('./dex/changes.component') },
];
