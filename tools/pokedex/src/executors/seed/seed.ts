import { PromiseExecutor, logger } from '@nx/devkit';
import { PokedexSeedExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<PokedexSeedExecutorSchema> = async (options) => {
	logger.info(`Executor ran for PokedexSeed ${JSON.stringify(options)}`);
	return {
		success: true,
	};
};

export default runExecutor;
