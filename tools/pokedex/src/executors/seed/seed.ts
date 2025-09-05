import { PromiseExecutor, logger } from '@nx/devkit';
import { PrismaClient } from '@prisma/client';
import * as csv from 'csv-parser';
import * as fs from 'fs';
import * as path from 'path';
import { PokedexSeedExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<PokedexSeedExecutorSchema> = async (options) => {
	logger.info(`Executor ran for PokedexSeed ${JSON.stringify(options)}`);

	const csvProcessorService = new CsvProcessorService(new PrismaClient(), options.tables);
	await csvProcessorService.processAllCsvFiles();
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

	private getOrderedFiles(csvDir: string): string[] {
		if (this.tables) {
			return this.tables.map((table) => `${table}.csv`);
		}
		// Define the order of processing - core entities first, then relationships
		// This order is maintained for potential future foreign key relationships
		const filesToProcess = [
			'move_damage_classes.csv',
			'types.csv',
			'stats.csv',
			'abilities.csv',
			'items.csv',
			'pokemon.csv',
			'moves.csv',
			'pokemon_types.csv',
			'pokemon_stats.csv',
			'pokemon_abilities.csv',
			'pokemon_moves.csv',
		];

		// Get all CSV files in the directory
		const allCsvFiles = fs
			.readdirSync(csvDir)
			.filter((file) => file.endsWith('.csv'))
			.sort();

		// Process files in the defined order first, then any remaining files
		const remainingFiles = allCsvFiles.filter((file) => !filesToProcess.includes(file));
		return [...filesToProcess, ...remainingFiles];
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
			logger.error(`Error processing ${fileName}.csv:`);
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
			if (value === '' || value === null || value === undefined) {
				converted[key] = null;
			} else if (typeof value === 'string') {
				// Handle empty strings as null
				if (value.trim() === '') {
					converted[key] = null;
				}
				// Try to convert to number if it looks like a number
				else if (/^-?\d+$/.test(value.trim())) {
					converted[key] = parseInt(value.trim(), 10);
				} else if (/^-?\d*\.\d+$/.test(value.trim())) {
					converted[key] = parseFloat(value.trim());
				} else {
					converted[key] = value.trim();
				}
			} else {
				converted[key] = value;
			}
		}

		return converted;
	}

	private async processCsv(filePath: string, prismaModelName: keyof PrismaClient): Promise<void> {
		const results: any[] = [];

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', (data) => {
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
						await prismaModel.createMany({
							data: results,
							skipDuplicates: true,
						});

						// Generate log message from Prisma model name
						const modelName = this.formatModelNameForLog(prismaModelName);
						logger.log(`Inserted ${results.length} ${modelName} records`);

						resolve();
					} catch (error) {
						logger.error(`Database error for ${String(prismaModelName)}`);
						reject(error);
					}
				})
				.on('error', (error) => {
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
