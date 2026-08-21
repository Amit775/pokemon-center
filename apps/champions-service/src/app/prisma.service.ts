import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@pokemon-center/prisma-champions';
import { PrismaPg } from '@prisma/adapter-pg';

/**
 * Connects to the *Champions* database, not the mainline one.
 *
 * `DATABASE_URL_CHAMPIONS` points at `pokemon-champions` on the same Postgres instance as
 * `pokemon-center`. Keeping the two clients distinct is what stops a Champions query from
 * accidentally reading mainline move data, which would be wrong in exactly the subtle,
 * hard-to-notice ways this whole split exists to prevent.
 */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	constructor() {
		super({ adapter: new PrismaPg({ connectionString: process.env['DATABASE_URL_CHAMPIONS'] }) });
	}

	async onModuleInit(): Promise<void> {
		await this.$connect();
	}

	async onModuleDestroy(): Promise<void> {
		await this.$disconnect();
	}
}
