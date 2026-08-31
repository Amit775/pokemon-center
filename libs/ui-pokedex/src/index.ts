export * from './lib/type-colors';
export * from './lib/sprites';
export * from './lib/type-chip/type-chip.component';
export * from './lib/entity-portrait/entity-portrait.component';
export * from './lib/stat-bar/stat-bar.component';
export * from './lib/pokemon-card/pokemon-card.component';
export * from './lib/ui-button/ui-button.component';
export * from './lib/ui-card/ui-card.component';
export * from './lib/section-heading/section-heading.component';
export * from './lib/ui-skeleton/ui-skeleton.component';
export * from './lib/ui-tabs/ui-tabs.component';
export * from './lib/chip-toggle/chip-toggle.component';
export * from './lib/matchup-grid/matchup-grid.component';
export * from './lib/data-table/data-table-columns';
export * from './lib/data-table/data-table.component';

// Type-only. `isolatedModules` is on, so re-exporting a type in value position fails the build —
// and consumers need these names to declare a column set and the three controlled state slices
// without importing TanStack directly.
export type { ColumnDef, ColumnOrderState, SortingState, ColumnVisibilityState } from '@tanstack/angular-table';
