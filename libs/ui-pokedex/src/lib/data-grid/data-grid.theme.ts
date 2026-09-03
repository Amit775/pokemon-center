import { themeQuartz } from 'ag-grid-community';

/**
 * The one grid theme, built on the Theming API (v33+), never the legacy CSS files.
 *
 * Parameter names verified against `SharedThemeParams`/`CoreParams` in the installed `ag-stack@36.1.0`
 * type declarations (the package `themeQuartz.withParams()` is built on) — see
 * https://www.ag-grid.com/archive/36.1.0/angular-data-grid/theming-parameters/ for the documented
 * equivalent. Parameters take CSS values (the doc page: "Every type can accept a string, which is
 * passed to CSS without processing"), so they read this project's existing design tokens directly —
 * the grid then follows light/dark and any token change without a second source of truth.
 */
export const pokedexGridTheme = themeQuartz.withParams({
	backgroundColor: 'var(--surface)',
	foregroundColor: 'var(--ink)',
	borderColor: 'var(--line)',
	headerBackgroundColor: 'var(--surface-sunken)',
	accentColor: 'var(--accent, #4f6df5)',
	fontFamily: 'inherit',
});
