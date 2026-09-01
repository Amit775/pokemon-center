// eslint-disable-next-line @nx/enforce-module-boundaries
import { PrismaClient } from '../../../../libs/prisma-champions/src/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';

const CHAMPIONS_TABLES = [
	'battle_turn',
	'battle_session',
	'team_member',
	'team',
	'box_pokemon_move',
	'box_pokemon',
	'known_set_move',
	'known_set',
	'regulation',
	'champions_learnset',
	'champions_pokemon_ability',
	'champions_pokemon',
	'champions_move',
	'champions_ability',
	'champions_type_efficacy',
	'champions_type',
];

export async function truncateChampionsDatabase(executor: Pick<PrismaClient, '$executeRawUnsafe'>): Promise<number> {
	const tables = CHAMPIONS_TABLES.map((table) => `"${table}"`).join(', ');
	await executor.$executeRawUnsafe(`TRUNCATE TABLE ${tables} RESTART IDENTITY CASCADE`);
	return CHAMPIONS_TABLES.length;
}

export async function runReset(options: { confirm: boolean }): Promise<void> {
	if (!options.confirm) {
		throw new Error('champions:reset deletes every row, including your Box, teams and battle sessions. Pass --confirm to proceed.');
	}

	const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env['DATABASE_URL_CHAMPIONS'] }) });

	try {
		const tableCount = await truncateChampionsDatabase(prisma);
		console.log(`Truncated ${tableCount} tables.`);
	} finally {
		await prisma.$disconnect();
	}
}
