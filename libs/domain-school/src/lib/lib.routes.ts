import { Route } from '@angular/router';

export const domainSchoolRoutes: Route[] = [{ path: '', loadComponent: () => import('./domain-school/domain-school.component') }];
