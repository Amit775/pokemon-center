import { ExecutorContext, logger } from '@nx/devkit';
import { execSync } from 'child_process';
import { InitializeExecutorSchema } from './schema';

export default async function runExecutor(options: InitializeExecutorSchema, context: ExecutorContext): Promise<{ success: boolean }> {
	logger.info(`Executing "initialize" executor with options: ${JSON.stringify(options)}`);

	const { root: workspaceRoot } = context;

	const commands = ['npx prisma db push', 'npx prisma generate', 'nx run pokedex:cleanup', 'nx run pokedex:seed', 'nx run pokedex:sync'];

	try {
		for (const command of commands) {
			logger.info(`> ${command}`);
			execSync(command, { cwd: workspaceRoot, stdio: 'inherit' });
		}
		logger.info('Execution complete.');
		return { success: true };
	} catch (error) {
		logger.error(`Failed to execute command.`);
		logger.error(error);
		return { success: false };
	}
}
