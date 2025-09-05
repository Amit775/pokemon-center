import { ExecutorContext } from '@nx/devkit';

import { PokedexSynchronizerExecutorSchema } from './schema';
import executor from './pokedex-synchronizer';

const options: PokedexSynchronizerExecutorSchema = {};
const context: ExecutorContext = {
	root: '',
	cwd: process.cwd(),
	isVerbose: false,
	projectGraph: {
		nodes: {},
		dependencies: {},
	},
	projectsConfigurations: {
		projects: {},
		version: 2,
	},
	nxJsonConfiguration: {},
};

describe('PokedexSynchronizer Executor', () => {
	it('can run', async () => {
		const output = await executor(options, context);
		expect(output.success).toBe(true);
	});
});
