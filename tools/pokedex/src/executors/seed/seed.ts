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
		// If specific tables are requested, we need to include their dependencies
		const requestedTables = this.tables ? new Set(this.tables.map((table) => `${table}.csv`)) : undefined;
		const onlyTables = requestedTables;
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
			'pokemon.csv', // depends on pokemon_species
			'pokemon_forms.csv', // depends on pokemon, version_groups
			'encounters.csv', // depends on versions, location_areas, encounter_slots, pokemon

			// Level 6: Relation tables and remaining files
			'pokemon_abilities.csv', // depends on pokemon, abilities
			'pokemon_moves.csv', // depends on pokemon, version_groups, moves, pokemon_move_methods
			'pokemon_stats.csv', // depends on pokemon, stats
			'pokemon_types.csv', // depends on pokemon, types
			'pokemon_egg_groups.csv', // depends on pokemon_species, egg_groups
			'pokemon_items.csv', // depends on pokemon, versions, items
			'pokemon_game_indices.csv', // depends on pokemon, versions
			'pokemon_dex_numbers.csv', // depends on pokemon_species, pokedexes
			'pokemon_form_generations.csv', // depends on pokemon_forms, generations
			'pokemon_form_types.csv', // depends on pokemon_forms, types
			'pokemon_evolution.csv', // depends on pokemon_species, evolution_triggers, items, genders, locations, moves, types
			'type_efficacy.csv', // depends on types
			'type_game_indices.csv', // depends on types, generations
			'item_game_indices.csv', // depends on items, generations
			'location_game_indices.csv', // depends on locations, generations
			'location_area_encounter_rates.csv', // depends on location_areas, encounter_methods, versions
			'nature_battle_style_preferences.csv', // depends on natures, move_battle_styles
			'version_group_pokemon_move_methods.csv', // depends on version_groups, pokemon_move_methods
			'version_group_regions.csv', // depends on version_groups, regions
			'pokedex_version_groups.csv', // depends on pokedexes, version_groups
			'encounter_condition_value_map.csv', // depends on encounters, encounter_condition_values
			'berry_flavors.csv', // depends on berries, contest_types
			'contest_combos.csv', // depends on moves
			'super_contest_combos.csv', // depends on moves
			'move_meta.csv', // depends on moves, move_meta_categories, move_meta_ailments
			'move_meta_stat_changes.csv', // depends on moves, stats
			'move_flag_map.csv', // depends on moves, move_flags
			'item_flag_map.csv', // depends on items, item_flags
		];

		// Get all CSV files in the directory
		const allCsvFiles = fs
			.readdirSync(csvDir)
			.filter((file) => file.endsWith('.csv'))
			.sort();

		// If specific tables are requested, include their dependencies
		if (requestedTables) {
			const dependencies = this.getDependenciesForTables(requestedTables);
			const allRequiredFiles = new Set([...requestedTables, ...dependencies]);
			return filesToProcess.filter((file) => allRequiredFiles.has(file));
		}

		// Process files in the defined order first, then any remaining files
		const remainingFiles = allCsvFiles.filter((file) => !filesToProcess.includes(file));
		return [...filesToProcess, ...remainingFiles];
	}

	private getDependenciesForTables(requestedTables: Set<string>): string[] {
		const dependencies: string[] = [];

		// Define dependency mappings
		const dependencyMap: { [key: string]: string[] } = {
			'locations.csv': ['regions.csv'],
			'pokedexes.csv': ['regions.csv'],
			'location_areas.csv': ['locations.csv', 'regions.csv'],
			'pokemon_species.csv': [
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
				'regions.csv',
			],
			'pokemon.csv': [
				'pokemon_species.csv',
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
				'regions.csv',
			],
			'pokemon_forms.csv': [
				'pokemon.csv',
				'version_groups.csv',
				'pokemon_species.csv',
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
				'regions.csv',
			],
			'encounters.csv': [
				'versions.csv',
				'location_areas.csv',
				'encounter_slots.csv',
				'pokemon.csv',
				'location_groups.csv',
				'regions.csv',
				'pokemon_species.csv',
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
			],
			'pokemon_abilities.csv': [
				'pokemon.csv',
				'abilities.csv',
				'pokemon_species.csv',
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
				'regions.csv',
			],
			'pokemon_moves.csv': [
				'pokemon.csv',
				'version_groups.csv',
				'moves.csv',
				'pokemon_move_methods.csv',
				'pokemon_species.csv',
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
				'regions.csv',
			],
			'pokemon_stats.csv': [
				'pokemon.csv',
				'stats.csv',
				'pokemon_species.csv',
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
				'regions.csv',
			],
			'pokemon_types.csv': [
				'pokemon.csv',
				'types.csv',
				'pokemon_species.csv',
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
				'regions.csv',
			],
			'pokemon_egg_groups.csv': [
				'pokemon_species.csv',
				'egg_groups.csv',
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
				'regions.csv',
			],
			'pokemon_items.csv': [
				'pokemon.csv',
				'versions.csv',
				'items.csv',
				'pokemon_species.csv',
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
				'regions.csv',
			],
			'pokemon_game_indices.csv': [
				'pokemon.csv',
				'versions.csv',
				'pokemon_species.csv',
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
				'regions.csv',
			],
			'pokemon_dex_numbers.csv': [
				'pokemon_species.csv',
				'pokedexes.csv',
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
				'regions.csv',
			],
			'pokemon_form_generations.csv': [
				'pokemon_forms.csv',
				'generations.csv',
				'pokemon.csv',
				'version_groups.csv',
				'pokemon_species.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
				'regions.csv',
			],
			'pokemon_form_types.csv': [
				'pokemon_forms.csv',
				'types.csv',
				'pokemon.csv',
				'version_groups.csv',
				'pokemon_species.csv',
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
				'regions.csv',
			],
			'pokemon_evolution.csv': [
				'pokemon_species.csv',
				'evolution_triggers.csv',
				'items.csv',
				'genders.csv',
				'locations.csv',
				'moves.csv',
				'types.csv',
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
				'regions.csv',
			],
			'type_efficacy.csv': ['types.csv', 'generations.csv', 'stats.csv'],
			'type_game_indices.csv': ['types.csv', 'generations.csv', 'stats.csv'],
			'item_game_indices.csv': ['items.csv', 'generations.csv', 'item_categories.csv', 'item_fling_effects.csv', 'item_pockets.csv'],
			'location_game_indices.csv': ['locations.csv', 'generations.csv', 'regions.csv'],
			'location_area_encounter_rates.csv': ['location_areas.csv', 'encounter_methods.csv', 'versions.csv', 'locations.csv', 'regions.csv'],
			'nature_battle_style_preferences.csv': ['natures.csv', 'move_battle_styles.csv', 'stats.csv'],
			'version_group_pokemon_move_methods.csv': ['version_groups.csv', 'pokemon_move_methods.csv', 'generations.csv', 'regions.csv'],
			'version_group_regions.csv': ['version_groups.csv', 'regions.csv', 'generations.csv'],
			'pokedex_version_groups.csv': ['pokedexes.csv', 'version_groups.csv', 'regions.csv', 'generations.csv'],
			'encounter_condition_value_map.csv': [
				'encounters.csv',
				'encounter_condition_values.csv',
				'versions.csv',
				'location_areas.csv',
				'encounter_slots.csv',
				'pokemon.csv',
				'locations.csv',
				'regions.csv',
				'pokemon_species.csv',
				'generations.csv',
				'evolution_chains.csv',
				'pokemon_colors.csv',
				'pokemon_shapes.csv',
				'pokemon_habitats.csv',
				'growth_rates.csv',
			],
			'berry_flavors.csv': [
				'berries.csv',
				'contest_types.csv',
				'items.csv',
				'berry_firmness.csv',
				'types.csv',
				'item_categories.csv',
				'item_fling_effects.csv',
				'item_pockets.csv',
			],
			'contest_combos.csv': [
				'moves.csv',
				'generations.csv',
				'types.csv',
				'move_targets.csv',
				'move_damage_classes.csv',
				'move_effects.csv',
				'contest_types.csv',
				'contest_effects.csv',
				'super_contest_effects.csv',
				'stats.csv',
			],
			'super_contest_combos.csv': [
				'moves.csv',
				'generations.csv',
				'types.csv',
				'move_targets.csv',
				'move_damage_classes.csv',
				'move_effects.csv',
				'contest_types.csv',
				'contest_effects.csv',
				'super_contest_effects.csv',
				'stats.csv',
			],
			'move_meta.csv': [
				'moves.csv',
				'move_meta_categories.csv',
				'move_meta_ailments.csv',
				'generations.csv',
				'types.csv',
				'move_targets.csv',
				'move_damage_classes.csv',
				'move_effects.csv',
				'contest_types.csv',
				'contest_effects.csv',
				'super_contest_effects.csv',
				'stats.csv',
			],
			'move_meta_stat_changes.csv': [
				'moves.csv',
				'stats.csv',
				'generations.csv',
				'types.csv',
				'move_targets.csv',
				'move_damage_classes.csv',
				'move_effects.csv',
				'contest_types.csv',
				'contest_effects.csv',
				'super_contest_effects.csv',
			],
			'move_flag_map.csv': [
				'moves.csv',
				'move_flags.csv',
				'generations.csv',
				'types.csv',
				'move_targets.csv',
				'move_damage_classes.csv',
				'move_effects.csv',
				'contest_types.csv',
				'contest_effects.csv',
				'super_contest_effects.csv',
				'stats.csv',
			],
			'item_flag_map.csv': ['items.csv', 'item_flags.csv', 'item_categories.csv', 'item_fling_effects.csv', 'item_pockets.csv'],
		};

		// Recursively find all dependencies
		const findDependencies = (table: string) => {
			const deps = dependencyMap[table] || [];
			for (const dep of deps) {
				if (!dependencies.includes(dep)) {
					dependencies.push(dep);
					findDependencies(dep);
				}
			}
		};

		for (const table of requestedTables) {
			findDependencies(table);
		}

		return dependencies;
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
				.pipe(
					csv({
						skipEmptyLines: true,
						skipLinesWithError: true,
					}),
				)
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
						logger.error(`Database error for ${String(prismaModelName)}:`);
						logger.error(`Error message: ${error.message || error}`);
						logger.error(`Error code: ${error.code || 'N/A'}`);
						logger.error(`Error details: ${JSON.stringify(error, null, 2)}`);
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
