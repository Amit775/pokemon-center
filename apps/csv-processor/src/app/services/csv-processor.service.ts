import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import * as fs from 'fs';
import * as path from 'path';
import csv from 'csv-parser';

@Injectable()
export class CsvProcessorService {
	private readonly logger = new Logger(CsvProcessorService.name);

	constructor(private readonly prisma: PrismaService) {}

	async processAllCsvFiles(): Promise<void> {
		const csvDir = path.join(process.cwd(), 'data', 'csv');

		if (!fs.existsSync(csvDir)) {
			this.logger.error(`CSV directory not found: ${csvDir}`);
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

		this.logger.log(`Processing ${filesToProcess.length} CSV files in order`);

		for (const fileName of filesToProcess) {
			const filePath = path.join(csvDir, fileName);
			if (fs.existsSync(filePath)) {
				await this.processCsvFile(filePath);
			} else {
				this.logger.warn(`File not found: ${fileName}`);
			}
		}
	}

	private async processCsvFile(filePath: string): Promise<void> {
		const fileName = path.basename(filePath, '.csv');
		this.logger.log(`Processing ${fileName}.csv`);

		try {
			switch (fileName) {
				case 'pokemon':
					await this.processPokemonCsv(filePath);
					break;
				case 'types':
					await this.processTypesCsv(filePath);
					break;
				case 'moves':
					await this.processMovesCsv(filePath);
					break;
				case 'abilities':
					await this.processAbilitiesCsv(filePath);
					break;
				case 'stats':
					await this.processStatsCsv(filePath);
					break;
				case 'items':
					await this.processItemsCsv(filePath);
					break;
				case 'move_damage_classes':
					await this.processDamageClassesCsv(filePath);
					break;
				case 'pokemon_types':
					await this.processPokemonTypesCsv(filePath);
					break;
				case 'pokemon_moves':
					await this.processPokemonMovesCsv(filePath);
					break;
				case 'pokemon_abilities':
					await this.processPokemonAbilitiesCsv(filePath);
					break;
				case 'pokemon_stats':
					await this.processPokemonStatsCsv(filePath);
					break;
				default:
					this.logger.warn(`No processor found for ${fileName}.csv`);
			}
		} catch (error) {
			this.logger.error(`Error processing ${fileName}.csv:`, error);
		}
	}

	private async processPokemonCsv(filePath: string): Promise<void> {
		const results: any[] = [];

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', (data) => {
					results.push({
						id: parseInt(data.id),
						name: data.identifier,
						slug: data.identifier,
					});
				})
				.on('end', async () => {
					try {
						await this.prisma.pokemon.createMany({
							data: results,
							skipDuplicates: true,
						});
						this.logger.log(`Inserted ${results.length} Pokemon records`);
						resolve();
					} catch (error) {
						reject(error);
					}
				})
				.on('error', reject);
		});
	}

	private async processTypesCsv(filePath: string): Promise<void> {
		const results: any[] = [];

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', (data) => {
					results.push({
						id: parseInt(data.id),
						name: data.identifier,
						slug: data.identifier,
					});
				})
				.on('end', async () => {
					try {
						await this.prisma.type.createMany({
							data: results,
							skipDuplicates: true,
						});
						this.logger.log(`Inserted ${results.length} Type records`);
						resolve();
					} catch (error) {
						reject(error);
					}
				})
				.on('error', reject);
		});
	}

	private async processMovesCsv(filePath: string): Promise<void> {
		const results: any[] = [];

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', (data) => {
					results.push({
						id: parseInt(data.id),
						name: data.identifier,
						slug: data.identifier,
						power: data.power ? parseInt(data.power) : null,
						accuracy: data.accuracy ? parseInt(data.accuracy) : null,
						pp: data.pp ? parseInt(data.pp) : null,
						priority: parseInt(data.priority) || 0,
						typeId: parseInt(data.type_id),
						damageClassId: parseInt(data.damage_class_id),
					});
				})
				.on('end', async () => {
					try {
						await this.prisma.move.createMany({
							data: results,
							skipDuplicates: true,
						});
						this.logger.log(`Inserted ${results.length} Move records`);
						resolve();
					} catch (error) {
						reject(error);
					}
				})
				.on('error', reject);
		});
	}

	private async processAbilitiesCsv(filePath: string): Promise<void> {
		const results: any[] = [];

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', (data) => {
					results.push({
						id: parseInt(data.id),
						name: data.identifier,
						slug: data.identifier,
					});
				})
				.on('end', async () => {
					try {
						await this.prisma.ability.createMany({
							data: results,
							skipDuplicates: true,
						});
						this.logger.log(`Inserted ${results.length} Ability records`);
						resolve();
					} catch (error) {
						reject(error);
					}
				})
				.on('error', reject);
		});
	}

	private async processStatsCsv(filePath: string): Promise<void> {
		const results: any[] = [];

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', (data) => {
					results.push({
						id: parseInt(data.id),
						name: data.identifier,
						slug: data.identifier,
					});
				})
				.on('end', async () => {
					try {
						await this.prisma.stat.createMany({
							data: results,
							skipDuplicates: true,
						});
						this.logger.log(`Inserted ${results.length} Stat records`);
						resolve();
					} catch (error) {
						reject(error);
					}
				})
				.on('error', reject);
		});
	}

	private async processItemsCsv(filePath: string): Promise<void> {
		const results: any[] = [];

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', (data) => {
					results.push({
						id: parseInt(data.id),
						name: data.identifier,
						slug: data.identifier,
					});
				})
				.on('end', async () => {
					try {
						await this.prisma.item.createMany({
							data: results,
							skipDuplicates: true,
						});
						this.logger.log(`Inserted ${results.length} Item records`);
						resolve();
					} catch (error) {
						reject(error);
					}
				})
				.on('error', reject);
		});
	}

	private async processDamageClassesCsv(filePath: string): Promise<void> {
		const results: any[] = [];

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', (data) => {
					results.push({
						id: parseInt(data.id),
						name: data.identifier,
						slug: data.identifier,
					});
				})
				.on('end', async () => {
					try {
						await this.prisma.damageClass.createMany({
							data: results,
							skipDuplicates: true,
						});
						this.logger.log(`Inserted ${results.length} DamageClass records`);
						resolve();
					} catch (error) {
						reject(error);
					}
				})
				.on('error', reject);
		});
	}

	private async processPokemonTypesCsv(filePath: string): Promise<void> {
		const results: any[] = [];

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', (data) => {
					results.push({
						pokemonId: parseInt(data.pokemon_id),
						typeId: parseInt(data.type_id),
					});
				})
				.on('end', async () => {
					try {
						await this.prisma.pokemonToType.createMany({
							data: results,
							skipDuplicates: true,
						});
						this.logger.log(`Inserted ${results.length} PokemonToType records`);
						resolve();
					} catch (error) {
						reject(error);
					}
				})
				.on('error', reject);
		});
	}

	private async processPokemonMovesCsv(filePath: string): Promise<void> {
		const results: any[] = [];

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', (data) => {
					results.push({
						pokemonId: parseInt(data.pokemon_id),
						moveId: parseInt(data.move_id),
					});
				})
				.on('end', async () => {
					try {
						await this.prisma.pokemonToMove.createMany({
							data: results,
							skipDuplicates: true,
						});
						this.logger.log(`Inserted ${results.length} PokemonToMove records`);
						resolve();
					} catch (error) {
						reject(error);
					}
				})
				.on('error', reject);
		});
	}

	private async processPokemonAbilitiesCsv(filePath: string): Promise<void> {
		const results: any[] = [];

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', (data) => {
					results.push({
						pokemonId: parseInt(data.pokemon_id),
						abilityId: parseInt(data.ability_id),
						isHidden: data.is_hidden === '1',
					});
				})
				.on('end', async () => {
					try {
						await this.prisma.pokemonToAbility.createMany({
							data: results,
							skipDuplicates: true,
						});
						this.logger.log(`Inserted ${results.length} PokemonToAbility records`);
						resolve();
					} catch (error) {
						reject(error);
					}
				})
				.on('error', reject);
		});
	}

	private async processPokemonStatsCsv(filePath: string): Promise<void> {
		const results: any[] = [];

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', (data) => {
					results.push({
						pokemonId: parseInt(data.pokemon_id),
						statId: parseInt(data.stat_id),
						baseStat: parseInt(data.base_stat),
					});
				})
				.on('end', async () => {
					try {
						await this.prisma.pokemonToStat.createMany({
							data: results,
							skipDuplicates: true,
						});
						this.logger.log(`Inserted ${results.length} PokemonToStat records`);
						resolve();
					} catch (error) {
						reject(error);
					}
				})
				.on('error', reject);
		});
	}
}
