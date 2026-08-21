import type { CodegenConfig } from '@graphql-codegen/cli';

/**
 * Typed documents for the Champions API.
 *
 * Deliberately a second codegen project rather than extra documents on
 * `data-access-pokedex`: the two schemas describe different games with different mechanics,
 * and sharing a generated namespace would make it easy to pass a mainline `Move` where a
 * Champions `ChampMove` is meant — the exact class of mistake the database split prevents.
 */
const config: CodegenConfig = {
	schema: 'apps/champions-service/schema.gql',
	documents: ['libs/data-access-champions/src/lib/**/*.graphql'],
	generates: {
		'libs/data-access-champions/src/lib/generated/': {
			preset: 'client',
			presetConfig: {
				fragmentMasking: false,
			},
			config: {
				documentMode: 'string',
				// GraphQL's DateTime arrives over JSON as an ISO-8601 string, and codegen would
				// otherwise leave it as `unknown` — which makes every `| date` pipe a type error.
				scalars: {
					DateTime: 'string',
				},
			},
		},
	},
};

export default config;
