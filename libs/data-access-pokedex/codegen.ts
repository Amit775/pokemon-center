import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'apps/pokedex-service/schema.gql',
	documents: ['libs/data-access-pokedex/src/lib/**/*.graphql'],
	generates: {
		'libs/data-access-pokedex/src/lib/generated/': {
			preset: 'client',
			presetConfig: {
				fragmentMasking: false,
			},
			config: {
				documentMode: 'string',
			},
		},
	},
};

export default config;
