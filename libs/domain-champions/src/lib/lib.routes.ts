import { Route } from '@angular/router';

export const domainChampionsRoutes: Route[] = [
	{ path: '', loadComponent: () => import('./features/champions-home/champions-home.component') },
	{ path: 'preview', loadComponent: () => import('./advisor/team-preview.component') },
];
