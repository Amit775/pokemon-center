// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
	testEnvironmentOptions: {
		errorOnUnknownElements: true,
		errorOnUnknownProperties: true,
	},
};
import { setupZonelessTestEnv } from 'jest-preset-angular/setup-env/zoneless';

setupZonelessTestEnv();

// jsdom does not implement scrollTo; the CDK virtual scroll viewport relies on it
Element.prototype.scrollTo = Element.prototype.scrollTo ?? ((): void => undefined);
