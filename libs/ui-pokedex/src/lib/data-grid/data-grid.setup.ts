import { EnvironmentProviders, InjectionToken, inject, isDevMode, provideEnvironmentInitializer } from '@angular/core';
import { AllCommunityModule, ModuleRegistry, enableDevValidations } from 'ag-grid-community';
import { AllEnterpriseModule, LicenseManager } from 'ag-grid-enterprise';

/**
 * AG Grid Enterprise licence key.
 *
 * Empty by default, which runs the grid in trial mode (full features, with a watermark and console
 * warnings once the 30-day trial lapses). Override it in the app's providers from wherever the key
 * is actually kept. **Never commit a key.**
 *
 * Follows the same injection-token-with-a-factory shape as `CHAMPIONS_API_URL`, which is how this
 * codebase configures everything else.
 */
export const AG_GRID_LICENSE_KEY = new InjectionToken<string>('AG_GRID_LICENSE_KEY', {
	providedIn: 'root',
	factory: () => '',
});

let modulesRegistered = false;

/**
 * Module registration is global side-effecting setup, and several lazy routes each call
 * `provideDataGrid()` (one per grid-hosting domain). The guard below keeps repeat calls — one per
 * route activation — from redundantly re-registering every module each time.
 *
 * TODO: `AllCommunityModule` + `AllEnterpriseModule` register everything, which is right while the
 * feature set is still moving. Narrow to the specific modules actually used (SideBar,
 * ColumnsToolPanel, FiltersToolPanel, SetFilter, ClientSideRowModel, …) once Phase 3 has settled,
 * to cut bundle size.
 */
export function registerDataGridModules(): void {
	if (modulesRegistered) return;
	modulesRegistered = true;

	ModuleRegistry.registerModules([AllCommunityModule, AllEnterpriseModule]);

	// Turns AG Grid's minified `error #200` codes into sentences naming the property and the module
	// it needs. Dev only, so it costs the production bundle nothing.
	if (isDevMode()) enableDevValidations();
}

/** Registers AG Grid's modules and applies the licence key. Call once, in the app's providers. */
export function provideDataGrid(): EnvironmentProviders {
	return provideEnvironmentInitializer(() => {
		registerDataGridModules();

		const licenseKey = inject(AG_GRID_LICENSE_KEY);
		if (licenseKey) LicenseManager.setLicenseKey(licenseKey);
	});
}
