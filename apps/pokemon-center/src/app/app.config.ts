import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { provideDataGrid } from '@pokemon-center/ui-pokedex';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZonelessChangeDetection(),
		provideDataGrid(),
		provideHttpClient(withFetch()),
		provideRouter(
			routes,
			withComponentInputBinding(),
			withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
			withRouterConfig({ paramsInheritanceStrategy: 'always' }),
		),
		provideAnimationsAsync(),
	],
};
