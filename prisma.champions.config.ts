import 'dotenv/config';
import { defineConfig } from 'prisma/config';

/**
 * Second Prisma project, pointed at the Champions database.
 *
 * Champions is mechanically divergent from the mainline dataset (no IVs, SP instead of EVs,
 * fixed level 50, rebalanced moves, rotating regulation rosters) *and* mutable, where the
 * mainline API is read-only by decree. Both facts argue for its own database rather than a
 * lens over `prisma/schema.prisma`.
 *
 * Run any Prisma command against it with `--config prisma.champions.config.ts`.
 */
export default defineConfig({
	schema: 'prisma/champions/schema.prisma',
	migrations: {
		path: 'prisma/champions/migrations',
	},
	datasource: {
		url: process.env['DATABASE_URL_CHAMPIONS'],
	},
});
