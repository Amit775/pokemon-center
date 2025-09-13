import { PromiseExecutor, logger } from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';
import { PokedexCleanupExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<PokedexCleanupExecutorSchema> = async (options) => {
	logger.log('Starting Pokedex Cleanup Executor', options);

	const entitiesPath = path.resolve(options.entitiesPath);

	if (!fs.existsSync(entitiesPath)) {
		logger.error(`Entities path does not exist: ${entitiesPath}`);
		return { success: false };
	}

	const cleanupService = new PokedexCleanupService(entitiesPath, options.dryRun);

	try {
		await cleanupService.cleanup();
		logger.log('✅ Cleanup completed successfully');
		return { success: true };
	} catch (error) {
		logger.error('❌ Cleanup failed:');
		logger.error(error);
		return { success: false };
	}
};

export default runExecutor;

class PokedexCleanupService {
	private readonly mutationPatterns = ['CreateMany', 'CreateOne', 'UpdateMany', 'UpdateOne', 'DeleteMany', 'DeleteOne', 'UpsertOne'];

	private readonly argPatterns = ['CreateMany', 'CreateOne', 'UpdateMany', 'UpdateOne', 'DeleteMany', 'DeleteOne', 'UpsertOne'];

	constructor(
		private readonly entitiesPath: string,
		private readonly dryRun: boolean,
	) {}

	async cleanup(): Promise<void> {
		logger.log(`🔍 Scanning entities directory: ${this.entitiesPath}`);

		// Find all model directories in the crud folder
		const crudPath = path.join(this.entitiesPath, 'resolvers', 'crud');

		if (!fs.existsSync(crudPath)) {
			logger.warn('No crud directory found, skipping cleanup');
			return;
		}

		const modelDirs = fs
			.readdirSync(crudPath, { withFileTypes: true })
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name);

		logger.log(`📁 Found ${modelDirs.length} model directories: ${modelDirs.join(', ')}`);

		for (const modelDir of modelDirs) {
			await this.cleanupModel(modelDir);
		}

		// Clean up index files
		await this.cleanupIndexFiles();

		// Clean up outputs directory
		await this.cleanupOutputs();
	}

	private async cleanupModel(modelName: string): Promise<void> {
		const modelPath = path.join(this.entitiesPath, 'resolvers', 'crud', modelName);

		logger.log(`🧹 Cleaning up model: ${modelName}`);

		// 1. Delete individual mutation resolver files
		await this.deleteMutationResolvers(modelPath);

		// 2. Delete mutation argument files
		await this.deleteMutationArgs(modelPath);

		// 3. Clean up args index file
		await this.cleanupArgsIndexFile(modelPath);

		// 4. Clean up main CRUD resolver
		await this.cleanupMainCrudResolver(modelPath, modelName);
	}

	private async deleteMutationResolvers(modelPath: string): Promise<void> {
		const resolverFiles = fs.readdirSync(modelPath).filter((file) => file.endsWith('.ts') && !file.endsWith('CrudResolver.ts'));

		for (const file of resolverFiles) {
			const shouldDelete = this.mutationPatterns.some((pattern) => file.includes(pattern));

			if (shouldDelete) {
				const filePath = path.join(modelPath, file);
				await this.deleteFile(filePath, `mutation resolver: ${file}`);
			}
		}
	}

	private async deleteMutationArgs(modelPath: string): Promise<void> {
		const argsPath = path.join(modelPath, 'args');

		if (!fs.existsSync(argsPath)) {
			return;
		}

		const argFiles = fs.readdirSync(argsPath).filter((file) => file.endsWith('.ts') && file !== 'index.ts');

		for (const file of argFiles) {
			const shouldDelete = this.argPatterns.some((pattern) => file.includes(pattern));

			if (shouldDelete) {
				const filePath = path.join(argsPath, file);
				await this.deleteFile(filePath, `mutation args: ${file}`);
			}
		}
	}

	private async cleanupArgsIndexFile(modelPath: string): Promise<void> {
		const argsIndexPath = path.join(modelPath, 'args', 'index.ts');

		if (!fs.existsSync(argsIndexPath)) {
			return;
		}

		const modelName = path.basename(modelPath);
		logger.log(`📝 Cleaning up args index file: ${modelName}/args/index.ts`);

		let content = fs.readFileSync(argsIndexPath, 'utf8');
		let modified = false;

		// Remove mutation-related exports
		const lines = content.split('\n');
		const newLines = lines.filter((line) => {
			return !this.argPatterns.some((pattern) => line.includes(pattern));
		});

		if (lines.length !== newLines.length) {
			modified = true;
			content = newLines.join('\n');
		}

		// Clean up extra whitespace
		content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

		if (modified) {
			await this.writeFile(argsIndexPath, content, `args index file: ${modelName}/args/index.ts`);
		}
	}

	private async cleanupMainCrudResolver(modelPath: string, modelName: string): Promise<void> {
		const crudResolverPath = path.join(modelPath, `${modelName}CrudResolver.ts`);

		if (!fs.existsSync(crudResolverPath)) {
			return;
		}

		logger.log(`📝 Cleaning up main CRUD resolver: ${modelName}CrudResolver.ts`);

		let content = fs.readFileSync(crudResolverPath, 'utf8');
		const originalContent = content;

		// Remove mutation methods
		let newContent = '';
		let lastIndex = 0;
		while (true) {
			const mutationIndex = content.indexOf('@TypeGraphQL.Mutation', lastIndex);
			if (mutationIndex === -1) {
				newContent += content.substring(lastIndex);
				break;
			}

			newContent += content.substring(lastIndex, mutationIndex);

			const asyncIndex = content.indexOf('async', mutationIndex);
			if (asyncIndex === -1) {
				lastIndex = mutationIndex + 1;
				continue;
			}

			const bodyStartIndex = content.indexOf('{', asyncIndex);
			if (bodyStartIndex === -1) {
				lastIndex = mutationIndex + 1;
				continue;
			}

			let braceLevel = 1;
			let bodyEndIndex = bodyStartIndex + 1;
			while (bodyEndIndex < content.length) {
				if (content[bodyEndIndex] === '{') {
					braceLevel++;
				} else if (content[bodyEndIndex] === '}') {
					braceLevel--;
					if (braceLevel === 0) {
						break;
					}
				}
				bodyEndIndex++;
			}

			if (braceLevel === 0) {
				lastIndex = bodyEndIndex + 1;
			} else {
				lastIndex = mutationIndex + '@TypeGraphQL.Mutation'.length;
			}
		}
		content = newContent;

		// Remove unused imports
		const lines = content.split('\n');
		const importLines = lines.filter((line) => line.trim().startsWith('import '));
		const otherLines = lines.filter((line) => !line.trim().startsWith('import '));
		const otherLinesContent = otherLines.join('\n');
		const newImportLines: string[] = [];

		for (const line of importLines) {
			const namedImportMatch = line.match(/import\s+(?:type\s+)?\{([^}]+)\}\s+from\s+(['"][^'"]+['"]);?/);
			if (namedImportMatch) {
				const importedSymbols = namedImportMatch[1]
					.split(',')
					.map((s) => s.trim())
					.filter(Boolean);
				const usedSymbols = [];
				for (const symbol of importedSymbols) {
					const symbolWithoutAlias = symbol.split(' as ')[0].trim();
					if (new RegExp(`\\b${symbolWithoutAlias}\\b`).test(otherLinesContent)) {
						usedSymbols.push(symbol);
					}
				}

				if (usedSymbols.length > 0) {
					const typeKeyword = line.includes('import type') ? 'type ' : '';
					newImportLines.push(`import ${typeKeyword}{ ${usedSymbols.join(', ')} } from ${namedImportMatch[2]};`);
				}
			} else {
				const otherImportMatch = line.match(/import\s+((?:[\w$]+|\* as [\w$]+))\s+from/);
				if (otherImportMatch) {
					let symbol = otherImportMatch[1];
					if (symbol.startsWith('* as ')) {
						symbol = symbol.substring(5).trim();
					}
					if (new RegExp(`\\b${symbol}\\b`).test(otherLinesContent)) {
						newImportLines.push(line);
					}
				} else {
					newImportLines.push(line);
				}
			}
		}

		content = newImportLines.join('\n') + '\n\n' + otherLines.join('\n');

		// Clean up extra whitespace
		content = content.replace(/\n\s*\n\s*\n/g, '\n\n').trim();

		if (originalContent !== content) {
			await this.writeFile(crudResolverPath, content, `main CRUD resolver: ${modelName}CrudResolver.ts`);
		}
	}

	private async cleanupIndexFiles(): Promise<void> {
		const indexFiles = [
			path.join(this.entitiesPath, 'resolvers', 'crud', 'index.ts'),
			path.join(this.entitiesPath, 'resolvers', 'crud', 'resolvers-crud.index.ts'),
			path.join(this.entitiesPath, 'resolvers', 'crud', 'resolvers-actions.index.ts'),
		];

		for (const indexFile of indexFiles) {
			if (fs.existsSync(indexFile)) {
				await this.cleanupIndexFile(indexFile);
			}
		}
	}

	private async cleanupIndexFile(indexPath: string): Promise<void> {
		logger.log(`📝 Cleaning up index file: ${path.basename(indexPath)}`);

		let content = fs.readFileSync(indexPath, 'utf8');
		let modified = false;

		// Remove exports for mutation resolvers
		const lines = content.split('\n');
		const newLines = lines.filter((line) => {
			return !this.mutationPatterns.some((pattern) => line.includes(pattern));
		});

		if (lines.length !== newLines.length) {
			modified = true;
			content = newLines.join('\n');
		}

		// Clean up extra whitespace
		content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

		if (modified) {
			await this.writeFile(indexPath, content, `index file: ${path.basename(indexPath)}`);
		}
	}

	private async cleanupOutputs(): Promise<void> {
		const outputsPath = path.join(this.entitiesPath, 'resolvers', 'outputs');
		if (!fs.existsSync(outputsPath)) {
			return;
		}

		logger.log(`🧹 Cleaning up outputs directory: ${outputsPath}`);

		// 1. Delete individual mutation output files
		const outputFiles = fs.readdirSync(outputsPath).filter((file) => file.endsWith('.ts') && file !== 'index.ts');
		const mutationOutputPatterns = ['AffectedRowsOutput', 'CreateManyAndReturn'];

		for (const file of outputFiles) {
			const shouldDelete = mutationOutputPatterns.some((pattern) => file.startsWith(pattern));
			if (shouldDelete) {
				const filePath = path.join(outputsPath, file);
				await this.deleteFile(filePath, `mutation output: ${file}`);
			}
		}

		// 2. Clean up outputs index file
		const outputsIndexPath = path.join(outputsPath, 'index.ts');
		if (fs.existsSync(outputsIndexPath)) {
			let content = fs.readFileSync(outputsIndexPath, 'utf8');
			let modified = false;

			const lines = content.split('\n');
			const newLines = lines.filter((line) => {
				return !mutationOutputPatterns.some((pattern) => line.includes(pattern));
			});

			if (lines.length !== newLines.length) {
				modified = true;
				content = newLines.join('\n');
			}

			content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

			if (modified) {
				await this.writeFile(outputsIndexPath, content, 'outputs index file');
			}
		}
	}

	private async deleteFile(filePath: string, description: string): Promise<void> {
		if (this.dryRun) {
			logger.log(`[DRY RUN] Would delete ${description}: ${filePath}`);
		} else {
			fs.unlinkSync(filePath);
			logger.log(`🗑️  Deleted ${description}: ${path.basename(filePath)}`);
		}
	}

	private async writeFile(filePath: string, content: string, description: string): Promise<void> {
		if (this.dryRun) {
			logger.log(`[DRY RUN] Would update ${description}: ${filePath}`);
		} else {
			fs.writeFileSync(filePath, content, 'utf8');
			logger.log(`✏️  Updated ${description}: ${path.basename(filePath)}`);
		}
	}
}
