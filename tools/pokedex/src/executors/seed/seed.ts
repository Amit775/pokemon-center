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
		const onlyTables = this.tables ? new Set(this.tables.map((table) => `${table}.csv`)) : undefined;
		// Define the order of processing - core entities only
		// Order is critical: dependencies must be processed before dependents
		// Based on foreign key relationships in Prisma schema
		const filesToProcess = [
			// Level 1: No dependencies (foundational tables)
			'languages.csv',
			'regions.csv',
			'genders.csv',
			'egg_groups.csv',
			'growth_rates.csv',
			'evolution_triggers.csv',
			'pokemon_colors.csv',
			'pokemon_shapes.csv',
			'pokemon_habitats.csv',
			'contest_types.csv',
			'contest_effects.csv',
			'super_contest_effects.csv',
			'encounter_methods.csv',
			'encounter_conditions.csv',
			'pal_park_areas.csv',
			'pokeathlon_stats.csv',
			'move_meta_categories.csv',
			'move_meta_ailments.csv',
			'move_flags.csv',
			'move_battle_styles.csv',
			'item_flags.csv',
			'item_fling_effects.csv',
			'berry_firmness.csv',
			'characteristics.csv',
			'move_effects.csv',
			'move_targets.csv',
			'move_damage_classes.csv',
			'pokemon_move_methods.csv',

			// Level 2: Depend on Level 1
			'generations.csv', // depends on regions
			'stats.csv', // no dependencies
			'evolution_chains.csv', // depends on items (optional)
			'item_categories.csv', // depends on item_pockets
			'item_pockets.csv', // no dependencies
			'encounter_condition_values.csv', // depends on encounter_conditions

			// Level 3: Depend on Level 2
			'version_groups.csv', // depends on generations
			'types.csv', // depends on generations, stats
			'abilities.csv', // depends on generations
			'items.csv', // depends on item_categories, item_fling_effects
			'experience.csv', // depends on growth_rates
			'natures.csv', // depends on stats
			'locations.csv', // depends on regions
			'pokedexes.csv', // depends on regions
			'berries.csv', // depends on items, berry_firmness, types

			// Level 4: Depend on Level 3
			'versions.csv', // depends on version_groups
			'location_areas.csv', // depends on locations
			'pokemon_species.csv', // depends on generations, evolution_chains, pokemon_colors, pokemon_shapes, pokemon_habitats, growth_rates
			'moves.csv', // depends on generations, types, move_targets, move_damage_classes, move_effects, contest_types, contest_effects, super_contest_effects
			'encounter_slots.csv', // depends on version_groups, encounter_methods
			'machines.csv', // depends on version_groups, items, moves

			// Level 5: Depend on Level 4
			'pokemon_forms.csv', // depends on pokemon, version_groups
			'encounters.csv', // depends on versions, location_areas, encounter_slots, pokemon
			'pokemon.csv', // depends on pokemon_species
		];

		// Get all CSV files in the directory
		const allCsvFiles = fs
			.readdirSync(csvDir)
			.filter((file) => file.endsWith('.csv'))
			.sort();

		// Process files in the defined order first, then any remaining files
		const remainingFiles = allCsvFiles.filter((file) => !filesToProcess.includes(file));
		return [...filesToProcess, ...remainingFiles].filter((file) => onlyTables?.has(file) ?? true);
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
