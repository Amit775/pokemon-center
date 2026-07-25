import { Route } from '@angular/router';

export const domainSchoolRoutes: Route[] = [
	{
		path: '',
		loadComponent: () => import('./domain-school/domain-school.component'),
		children: [
			{ path: '', loadComponent: () => import('./features/school-home/school-home.component') },
			{ path: 'lesson/:lessonId', loadComponent: () => import('./features/lesson/lesson.component') },
			{ path: 'simulation/:lessonId', loadComponent: () => import('./features/simulation/simulation.component') },
			{ path: 'drill', loadComponent: () => import('./features/drill/drill.component') },
		],
	},
];
