import { PromiseExecutor, logger } from '@nx/devkit';
import { PrismaClient } from '@prisma/client';
import * as csv from 'csv-parser';
import * as fs from 'fs';
import * as path from 'path';
import { PokedexSeedExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<PokedexSeedExecutorSchema> = async (options) => {
	logger.info(`Executor ran for PokedexSeed ${JSON.stringify(options)}`);

	const csvProcessorService = new CsvProcessorService(new PrismaClient());
	await csvProcessorService.processAllCsvFiles();
	return {
		success: true,
	};
};

export default runExecutor;

interface CsvProcessorConfig<T> {
	transformRow: (data: any) => T;
	prismaModel: keyof PrismaClient;
}

class CsvProcessorService {
	constructor(private readonly prisma: PrismaClient) {}

	async processAllCsvFiles(): Promise<void> {
		const csvDir = path.join(process.cwd(), 'data', 'csv');

		if (!fs.existsSync(csvDir)) {
			logger.error(`CSV directory not found: ${csvDir}`);
			return;
		}

		// Define the order of processing - core entities first, then relationships
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

		logger.log(`Processing ${filesToProcess.length} CSV files in order`);

		for (const fileName of filesToProcess) {
			const filePath = path.join(csvDir, fileName);
			if (fs.existsSync(filePath)) {
				await this.processCsvFile(filePath);
			} else {
				logger.warn(`File not found: ${fileName}`);
			}
		}
	}

	private async processCsvFile(filePath: string): Promise<void> {
		const fileName = path.basename(filePath, '.csv');
		logger.log(`Processing ${fileName}.csv`);

		try {
			switch (fileName) {
				case 'pokemon':
					await this.processCsv(filePath, {
						transformRow: (data) => ({
							id: parseInt(data.id),
							name: data.identifier,
							slug: data.identifier,
						}),
						prismaModel: 'pokemon',
					});
					break;
				case 'types':
					await this.processCsv(filePath, {
						transformRow: (data) => ({
							id: parseInt(data.id),
							name: data.identifier,
							slug: data.identifier,
						}),
						prismaModel: 'types',
					});
					break;
				case 'moves':
					await this.processCsv(filePath, {
						transformRow: (data) => ({
							id: parseInt(data.id),
							name: data.identifier,
							slug: data.identifier,
							power: data.power ? parseInt(data.power) : null,
							accuracy: data.accuracy ? parseInt(data.accuracy) : null,
							pp: data.pp ? parseInt(data.pp) : null,
							priority: parseInt(data.priority) || 0,
							typeId: parseInt(data.type_id),
							damageClassId: parseInt(data.damage_class_id),
						}),
						prismaModel: 'moves',
					});
					break;
				case 'abilities':
					await this.processCsv(filePath, {
						transformRow: (data) => ({
							id: parseInt(data.id),
							name: data.identifier,
							slug: data.identifier,
						}),
						prismaModel: 'abilities',
					});
					break;
				case 'stats':
					await this.processCsv(filePath, {
						transformRow: (data) => ({
							id: parseInt(data.id),
							name: data.identifier,
							slug: data.identifier,
						}),
						prismaModel: 'stats',
					});
					break;
				case 'items':
					await this.processCsv(filePath, {
						transformRow: (data) => ({
							id: parseInt(data.id),
							name: data.identifier,
							slug: data.identifier,
						}),
						prismaModel: 'items',
					});
					break;
				case 'move_damage_classes':
					await this.processCsv(filePath, {
						transformRow: (data) => ({
							id: parseInt(data.id),
							name: data.identifier,
							slug: data.identifier,
						}),
						prismaModel: 'moveDamageClasses',
					});
					break;
				case 'pokemon_types':
					await this.processCsv(filePath, {
						transformRow: (data) => ({
							pokemonId: parseInt(data.pokemon_id),
							typeId: parseInt(data.type_id),
						}),
						prismaModel: 'pokemonTypes',
					});
					break;
				case 'pokemon_moves':
					await this.processCsv(filePath, {
						transformRow: (data) => ({
							pokemonId: parseInt(data.pokemon_id),
							moveId: parseInt(data.move_id),
						}),
						prismaModel: 'pokemonMoves',
					});
					break;
				case 'pokemon_abilities':
					await this.processCsv(filePath, {
						transformRow: (data) => ({
							pokemonId: parseInt(data.pokemon_id),
							abilityId: parseInt(data.ability_id),
							isHidden: data.is_hidden === '1',
						}),
						prismaModel: 'pokemonAbilities',
					});
					break;
				case 'pokemon_stats':
					await this.processCsv(filePath, {
						transformRow: (data) => ({
							pokemonId: parseInt(data.pokemon_id),
							statId: parseInt(data.stat_id),
							baseStat: parseInt(data.base_stat),
						}),
						prismaModel: 'pokemonStats',
					});
					break;
				default:
					logger.warn(`No processor found for ${fileName}.csv`);
			}
		} catch (error) {
			logger.error(`Error processing ${fileName}.csv:\n${error}`);
		}
	}

	private async processCsv<T>(filePath: string, config: CsvProcessorConfig<T>): Promise<void> {
		const results: T[] = [];

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', (data) => {
					results.push(config.transformRow(data));
				})
				.on('end', async () => {
					try {
						const prismaModel = this.prisma[config.prismaModel] as any;
						await prismaModel.createMany({
							data: results,
							skipDuplicates: true,
						});

						// Generate log message from Prisma model name
						const modelName = this.formatModelNameForLog(config.prismaModel);
						logger.log(`Inserted ${results.length} ${modelName} records`);

						resolve();
					} catch (error) {
						reject(error);
					}
				})
				.on('error', reject);
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
