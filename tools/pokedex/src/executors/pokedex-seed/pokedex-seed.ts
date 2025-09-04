import { PromiseExecutor } from '@nx/devkit';
import { PokedexSeedExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<PokedexSeedExecutorSchema> = async (options) => {
	console.log('Executor ran for PokedexSeed', options);
	return {
		success: true,
	};
};

export default runExecutor;
