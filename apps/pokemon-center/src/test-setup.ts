// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
	testEnvironmentOptions: {
		errorOnUnknownElements: true,
		errorOnUnknownProperties: true,
	},
};
import { setupZonelessTestEnv } from 'jest-preset-angular/setup-env/zoneless';

setupZonelessTestEnv();

// jsdom does not implement matchMedia; the theme resolver reads it during change detection.
window.matchMedia =
	window.matchMedia ??
	((query: string): MediaQueryList =>
		({
			matches: false,
			media: query,
			onchange: null,
			addEventListener: (): void => undefined,
			removeEventListener: (): void => undefined,
			addListener: (): void => undefined,
			removeListener: (): void => undefined,
			dispatchEvent: (): boolean => false,
		}) as unknown as MediaQueryList);
