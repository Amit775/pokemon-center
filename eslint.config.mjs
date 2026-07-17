import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import nx from '@nx/eslint-plugin';

const compat = new FlatCompat({
	baseDirectory: dirname(fileURLToPath(import.meta.url)),
	recommendedConfig: js.configs.recommended,
});

export default [
	{
		// generated code (prisma-client generator + prisma-nestjs-graphql entities)
		ignores: ['libs/infra-pokedex-data/src/prisma-client/**', 'libs/infra-pokedex-data/src/entities/**'],
	},
	...nx.configs['flat/base'],
	{
		files: ['*'],
		rules: {
			'array-element-newline': [
				'error',
				{
					ArrayExpression: 'consistent',
					ArrayPattern: {
						minItems: 3,
					},
				},
			],
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		rules: {
			'@nx/enforce-module-boundaries': [
				'error',
				{
					enforceBuildableLibDependency: true,
					allow: [],
					depConstraints: [
						{
							sourceTag: '*',
							onlyDependOnLibsWithTags: ['*'],
						},
					],
				},
			],
		},
	},
	...nx.configs['flat/typescript'],
	...nx.configs['flat/javascript'],
	...compat
		.config({
			env: {
				jest: true,
			},
		})
		.map((config) => ({
			...config,
			files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.spec.js', '**/*.spec.jsx'],
			rules: {
				...config.rules,
			},
		})),
];
