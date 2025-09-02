import { Route } from '@angular/router';

export const domainArenaRoutes: Route[] = [{ path: '', loadComponent: () => import('./domain-arena/domain-arena.component') }];
