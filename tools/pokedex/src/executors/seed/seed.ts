import { PromiseExecutor, logger } from '@nx/devkit';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@pokemon-center/prisma';
import csv = require('csv-parser');
import * as fs from 'fs';
import * as path from 'path';
import { PokedexSeedExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<PokedexSeedExecutorSchema> = async (options) => {
	logger.info(`Executor ran for PokedexSeed ${JSON.stringify(options)}`);

	const adapter = new PrismaPg({ connectionString: process.env['DATABASE_URL'] });
	const prisma = new PrismaClient({ adapter });
	try {
		const csvProcessorService = new CsvProcessorService(prisma, options.tables);
		await csvProcessorService.processAllCsvFiles();
	} finally {
		await prisma.$disconnect();
	}
	return {
		success: true,
	};
};

export default runExecutor;

class CsvProcessorService {
	constructor(
		private readonly prisma: PrismaClient,
		private readonly tables?: string[],
	) {}

	async processAllCsvFiles(): Promise<void> {
		const csvDir = path.join(process.cwd(), 'data', 'csv');

		if (!fs.existsSync(csvDir)) {
			logger.error(`CSV directory not found: ${csvDir}`);
			return;
		}

		const orderedFiles = this.getOrderedFiles(csvDir);

		logger.log(`Processing ${orderedFiles.length} CSV files`);

		for (const fileName of orderedFiles) {
			const filePath = path.join(csvDir, fileName);
			if (fs.existsSync(filePath)) {
				await this.processCsvFile(filePath);
			} else {
				logger.warn(`File not found: ${fileName}`);
			}
		}
	}

	/**
	 * Derives seed order from prisma/schema.prisma: builds the FK dependency
	 * graph from @relation declarations and topologically sorts it, so the
	 * order can never drift from the schema again.
	 */
	private getOrderedFiles(csvDir: string): string[] {
		const schema = fs.readFileSync(path.join(process.cwd(), 'prisma', 'schema.prisma'), 'utf8');

		const modelToTable = new Map<string, string>();
		const modelBodies = new Map<string, string>();
		for (const match of schema.matchAll(/model\s+(\w+)\s*\{([^}]*)\}/g)) {
			const [, name, body] = match;
			const map = body.match(/@@map\("([^"]+)"\)/);
			modelToTable.set(name, map ? map[1] : name);
			modelBodies.set(name, body);
		}

		const deps = new Map<string, Set<string>>();
		for (const [name, body] of modelBodies) {
			const table = modelToTable.get(name) as string;
			if (!deps.has(table)) deps.set(table, new Set());
			for (const rel of body.matchAll(/\s\w+\s+(\w+)\??\s+@relation\([^)]*fields:/g)) {
				const targetTable = modelToTable.get(rel[1]);
				if (targetTable && targetTable !== table) deps.get(table)?.add(targetTable);
			}
		}

		// Kahn's algorithm
		const ordered: string[] = [];
		const remaining = new Map([...deps].map(([t, d]) => [t, new Set(d)] as const));
		while (remaining.size > 0) {
			const ready = [...remaining.keys()].filter((t) => [...(remaining.get(t) as Set<string>)].every((d) => !remaining.has(d)));
			if (ready.length === 0) {
				logger.warn(`Circular dependency among: ${[...remaining.keys()].join(', ')} - appending as-is`);
				ordered.push(...remaining.keys());
				break;
			}
			ready.sort();
			for (const t of ready) {
				ordered.push(t);
				remaining.delete(t);
			}
		}

		let tables = ordered;
		if (this.tables) {
			const wanted = new Set<string>();
			const visit = (t: string): void => {
				if (wanted.has(t)) return;
				wanted.add(t);
				for (const d of deps.get(t) ?? []) visit(d);
			};
			for (const t of this.tables) visit(t);
			tables = ordered.filter((t) => wanted.has(t));
		}

		return tables.map((table) => `${table}.csv`).filter((table) => fs.existsSync(path.join(csvDir, table)));
	}

	private async processCsvFile(filePath: string): Promise<void> {
		const fileName = path.basename(filePath, '.csv');
		logger.log(`Processing ${fileName}.csv`);

		try {
			const prismaModelName = this.getPrismaModelName(fileName);
			if (!prismaModelName) {
				logger.warn(`No Prisma model found for ${fileName}.csv - skipping`);
				return;
			}

			await this.processCsv(filePath, prismaModelName);
		} catch (error) {
			logger.error(`Error processing ${fileName}.csv: ${error instanceof Error ? error.message : JSON.stringify(error)}`);
		}
	}

	/**
	 * Converts snake_case CSV filename to camelCase Prisma model name
	 */
	private getPrismaModelName(fileName: string): keyof PrismaClient | null {
		// Convert snake_case to camelCase
		const camelCase = fileName.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

		// Capitalize first letter for Prisma model name
		const modelName = camelCase.charAt(0).toUpperCase() + camelCase.slice(1);

		// Check if the model exists in PrismaClient
		if (modelName in this.prisma) {
			return modelName as keyof PrismaClient;
		}

		return null;
	}

	/**
	 * Converts CSV data to appropriate types based on common patterns
	 */
	private convertCsvData(data: any): any {
		const converted: any = {};

		for (const [key, value] of Object.entries(data)) {
			// Remove BOM from field names
			const cleanKey = key.replace(/^\ufeff/, '');
			if (value === '' || value === null || value === undefined) {
				converted[cleanKey] = null;
			} else if (typeof value === 'string') {
				// Handle empty strings as null
				if (value.trim() === '') {
					converted[cleanKey] = null;
				}
				// Special handling for specific fields that should remain as strings even if they look like numbers
				else if (cleanKey === 'form_identifier' || cleanKey === 'identifier') {
					converted[cleanKey] = value.trim();
				}
				// Try to convert to number if it looks like a number
				else if (/^-?\d+$/.test(value.trim())) {
					converted[cleanKey] = parseInt(value.trim(), 10);
				} else if (/^-?\d*\.\d+$/.test(value.trim())) {
					converted[cleanKey] = parseFloat(value.trim());
				} else {
					converted[cleanKey] = value.trim();
				}
			} else {
				converted[cleanKey] = value;
			}
		}

		return converted;
	}

	private async processCsv(filePath: string, prismaModelName: keyof PrismaClient): Promise<void> {
		const results: any[] = [];

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', (data: Record<string, string>) => {
					try {
						results.push(this.convertCsvData(data));
					} catch (error) {
						logger.warn(`Error converting row data: ${JSON.stringify(data)}`);
						logger.warn(`Conversion error: ${error}`);
					}
				})
				.on('end', async () => {
					try {
						if (results.length === 0) {
							logger.warn(`No data to insert for ${String(prismaModelName)}`);
							resolve();
							return;
						}

						const prismaModel = this.prisma[prismaModelName] as any;
						// Insert in batches: a single createMany with hundreds of
						// thousands of rows exceeds the postgres bind-parameter limit
						// and stalls query construction.
						const BATCH_SIZE = 5000;
						for (let i = 0; i < results.length; i += BATCH_SIZE) {
							await prismaModel.createMany({
								data: results.slice(i, i + BATCH_SIZE),
								skipDuplicates: true,
							});
							if (results.length > BATCH_SIZE) {
								logger.log(`  ${String(prismaModelName)}: ${Math.min(i + BATCH_SIZE, results.length)}/${results.length}`);
							}
						}

						// Generate log message from Prisma model name
						const modelName = this.formatModelNameForLog(prismaModelName);
						logger.log(`Inserted ${results.length} ${modelName} records`);

						resolve();
					} catch (error) {
						const err = error as { message?: string; code?: string };
						logger.error(`Database error for ${String(prismaModelName)}:`);
						logger.error(`Error message: ${err.message || error}`);
						logger.error(`Error code: ${err.code || 'N/A'}`);
						logger.error(`Error details: ${JSON.stringify(error, null, 2)}`);
						reject(error);
					}
				})
				.on('error', (error: Error) => {
					logger.error(`File reading error: ${error}`);
					reject(error);
				});
		});
	}

	private formatModelNameForLog(modelKey: keyof PrismaClient): string {
		// Convert camelCase to Title Case with spaces
		const formatted = modelKey
			.toString()
			.replace(/([A-Z])/g, ' $1') // Add space before capital letters
			.replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
			.trim();

		return formatted;
	}
}
