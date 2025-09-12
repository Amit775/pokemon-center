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

	private readonly argPatterns = ['CreateMany', 'CreateOne', 'UpdateMany', 'DeleteMany', 'UpsertOne'];

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
	}

	private async cleanupModel(modelName: string): Promise<void> {
		const modelPath = path.join(this.entitiesPath, 'resolvers', 'crud', modelName);

		logger.log(`🧹 Cleaning up model: ${modelName}`);

		// 1. Delete individual mutation resolver files
		await this.deleteMutationResolvers(modelPath, modelName);

		// 2. Delete mutation argument files
		await this.deleteMutationArgs(modelPath, modelName);

		// 3. Clean up args index file
		await this.cleanupArgsIndexFile(modelPath, modelName);

		// 4. Clean up main CRUD resolver
		await this.cleanupMainCrudResolver(modelPath, modelName);
	}

	private async deleteMutationResolvers(modelPath: string, modelName: string): Promise<void> {
		const resolverFiles = fs.readdirSync(modelPath).filter((file) => file.endsWith('.ts') && file !== `${modelName}CrudResolver.ts`);

		for (const file of resolverFiles) {
			const shouldDelete = this.mutationPatterns.some((pattern) => file.includes(pattern) && file.includes('Resolver'));

			if (shouldDelete) {
				const filePath = path.join(modelPath, file);
				await this.deleteFile(filePath, `mutation resolver: ${file}`);
			}
		}
	}

	private async deleteMutationArgs(modelPath: string, modelName: string): Promise<void> {
		const argsPath = path.join(modelPath, 'args');

		if (!fs.existsSync(argsPath)) {
			return;
		}

		const argFiles = fs.readdirSync(argsPath).filter((file) => file.endsWith('.ts') && file !== 'index.ts');

		for (const file of argFiles) {
			const shouldDelete = this.argPatterns.some((pattern) => file.includes(pattern) && file.includes('Args'));

			if (shouldDelete) {
				const filePath = path.join(argsPath, file);
				await this.deleteFile(filePath, `mutation args: ${file}`);
			}
		}
	}

	private async cleanupArgsIndexFile(modelPath: string, modelName: string): Promise<void> {
		const argsIndexPath = path.join(modelPath, 'args', 'index.ts');

		if (!fs.existsSync(argsIndexPath)) {
			return;
		}

		logger.log(`📝 Cleaning up args index file: ${modelName}/args/index.ts`);

		let content = fs.readFileSync(argsIndexPath, 'utf8');
		let modified = false;

		// Remove mutation-related exports
		const mutationExportPatterns = [
			/export { [^}]*CreateMany[^}]* } from "\.\/[^"]*";/g,
			/export { [^}]*CreateOne[^}]* } from "\.\/[^"]*";/g,
			/export { [^}]*UpdateMany[^}]* } from "\.\/[^"]*";/g,
			/export { [^}]*UpdateOne[^}]* } from "\.\/[^"]*";/g,
			/export { [^}]*DeleteMany[^}]* } from "\.\/[^"]*";/g,
			/export { [^}]*DeleteOne[^}]* } from "\.\/[^"]*";/g,
			/export { [^}]*UpsertOne[^}]* } from "\.\/[^"]*";/g,
		];

		for (const pattern of mutationExportPatterns) {
			if (pattern.test(content)) {
				content = content.replace(pattern, '');
				modified = true;
			}
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
		let modified = false;

		// Remove mutation-related imports
		const mutationImportPatterns = [
			/import { [^}]*CreateMany[^}]* } from "\.\/args\/[^"]*";/g,
			/import { [^}]*CreateOne[^}]* } from "\.\/args\/[^"]*";/g,
			/import { [^}]*UpdateMany[^}]* } from "\.\/args\/[^"]*";/g,
			/import { [^}]*UpdateOne[^}]* } from "\.\/args\/[^"]*";/g,
			/import { [^}]*DeleteMany[^}]* } from "\.\/args\/[^"]*";/g,
			/import { [^}]*DeleteOne[^}]* } from "\.\/args\/[^"]*";/g,
			/import { [^}]*UpsertOne[^}]* } from "\.\/args\/[^"]*";/g,
		];

		for (const pattern of mutationImportPatterns) {
			if (pattern.test(content)) {
				content = content.replace(pattern, '');
				modified = true;
			}
		}

		// Remove mutation-related output imports
		const mutationOutputPatterns = [
			/import { [^}]*CreateManyAndReturn[^}]* } from "\.\.\/outputs\/[^"]*";/g,
			/import { AffectedRowsOutput } from "\.\.\/outputs\/[^"]*";/g,
		];

		for (const pattern of mutationOutputPatterns) {
			if (pattern.test(content)) {
				content = content.replace(pattern, '');
				modified = true;
			}
		}

		// Remove mutation methods (methods decorated with @TypeGraphQL.Mutation)
		const mutationMethodPattern = /@TypeGraphQL\.Mutation\([^}]*\)\s*async\s+\w+\([^}]*\):\s*Promise<[^>]*>\s*\{[^}]*\}/gs;
		if (mutationMethodPattern.test(content)) {
			content = content.replace(mutationMethodPattern, '');
			modified = true;
		}

		// Clean up extra whitespace
		content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

		if (modified) {
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
		const mutationExportPatterns = [
			/export \* from "\.\/[^"]*\/CreateMany[^"]*";/g,
			/export \* from "\.\/[^"]*\/CreateOne[^"]*";/g,
			/export \* from "\.\/[^"]*\/UpdateMany[^"]*";/g,
			/export \* from "\.\/[^"]*\/UpdateOne[^"]*";/g,
			/export \* from "\.\/[^"]*\/DeleteMany[^"]*";/g,
			/export \* from "\.\/[^"]*\/DeleteOne[^"]*";/g,
			/export \* from "\.\/[^"]*\/UpsertOne[^"]*";/g,
		];

		for (const pattern of mutationExportPatterns) {
			if (pattern.test(content)) {
				content = content.replace(pattern, '');
				modified = true;
			}
		}

		// Clean up extra whitespace
		content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

		if (modified) {
			await this.writeFile(indexPath, content, `index file: ${path.basename(indexPath)}`);
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
