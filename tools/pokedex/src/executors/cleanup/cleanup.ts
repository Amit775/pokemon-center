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
	private readonly mutationPatterns = ['create', 'update', 'delete', 'upsert'];

	constructor(
		private readonly entitiesPath: string,
		private readonly dryRun: boolean,
	) {}

	async cleanup(): Promise<void> {
		logger.log(`🔍 Scanning entities directory: ${this.entitiesPath}`);

		// Find all model directories in the entities folder
		const modelNames = fs
			.readdirSync(this.entitiesPath, { withFileTypes: true })
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name);

		logger.log(`📁 Found ${modelNames.length} model directories`);

		for (const modelName of modelNames) {
			const modelPath = path.join(this.entitiesPath, modelName);
			logger.log(`🧹 Cleaning up model: ${modelName}`);

			const fileNames = fs.readdirSync(modelPath).filter((file) => file.endsWith('.ts'));
			for (const fileName of fileNames) {
				const shouldDelete = this.mutationPatterns.some((pattern) => fileName.match(pattern));
				if (shouldDelete) {
					const filePath = path.join(modelPath, fileName);
					if (this.dryRun) {
						logger.log(`[DRY RUN] Would delete mutation file: ${filePath}`);
					} else {
						fs.unlinkSync(filePath);
						logger.log(`🗑️  Deleted mutation file: ${path.basename(filePath)}`);
					}
				}
			}
		}
	}
}
