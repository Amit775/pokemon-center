import { EnvironmentInjector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LicenseManager } from 'ag-grid-enterprise';
import { AG_GRID_LICENSE_KEY, provideDataGrid } from './data-grid.setup';

describe('provideDataGrid', () => {
	/** Injecting anything realises the environment injector, which runs its initialisers. */
	function bootstrap(providers: unknown[]): void {
		TestBed.configureTestingModule({ providers: providers as never });
		TestBed.inject(EnvironmentInjector);
	}

	it('applies a supplied licence key', () => {
		const setLicenseKey = jest.spyOn(LicenseManager, 'setLicenseKey').mockImplementation(() => undefined);

		bootstrap([provideDataGrid(), { provide: AG_GRID_LICENSE_KEY, useValue: 'test-key' }]);

		expect(setLicenseKey).toHaveBeenCalledWith('test-key');
	});

	it('applies no licence key when none is configured, leaving the grid in trial mode', () => {
		const setLicenseKey = jest.spyOn(LicenseManager, 'setLicenseKey').mockImplementation(() => undefined);

		bootstrap([provideDataGrid()]);

		expect(setLicenseKey).not.toHaveBeenCalled();
	});

	it('defaults the licence key token to empty, so no key has to be configured to develop', () => {
		bootstrap([provideDataGrid()]);
		expect(TestBed.inject(AG_GRID_LICENSE_KEY)).toBe('');
	});

	it('registers modules only once, however many times it is called', () => {
		const { registerDataGridModules } = jest.requireActual<typeof import('./data-grid.setup')>('./data-grid.setup');

		// The second call must be a no-op; AG Grid warns on duplicate registration.
		expect(() => {
			registerDataGridModules();
			registerDataGridModules();
		}).not.toThrow();
	});

	afterEach(() => jest.restoreAllMocks());
});
