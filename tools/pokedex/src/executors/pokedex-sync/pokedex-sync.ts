import { PromiseExecutor } from '@nx/devkit';
import { PokedexSyncExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<PokedexSyncExecutorSchema> = async (options) => {
	console.log('Executor ran for PokedexSync', options);
	return {
		success: true,
	};
};

export default runExecutor;
