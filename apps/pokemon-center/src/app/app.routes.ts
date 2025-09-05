import { Route } from '@angular/router';

export type NavRoute = Route & { type: 'nav'; display: string; icon?: string };
export const isNavRoute = (route: Route | NavRoute): route is NavRoute => {
	return (route as NavRoute).type === 'nav';
};

export const routes: (Route | NavRoute)[] = [
	{
		type: 'nav',
		display: 'Home',
		path: '',
		loadComponent: () => import('./layout/home/home.component'),
	},
	{
		type: 'nav',
		display: 'Pokedex',
		path: 'pokedex',
		loadChildren: () => import('@pokemon-center/domain-pokedex'),
	},
	{
		type: 'nav',
		display: 'School',
		path: 'school',
		loadChildren: () => import('@pokemon-center/domain-school'),
	},
	{
		type: 'nav',
		display: 'Arena',
		path: 'arena',
		loadChildren: () => import('@pokemon-center/domain-arena'),
	},
];
