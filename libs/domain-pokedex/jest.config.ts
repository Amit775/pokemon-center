/* eslint-disable */
module.exports = {
	displayName: 'domain-pokedex',
	preset: '../../jest.preset.js',
	setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
	coverageDirectory: '../../coverage/libs/domain-pokedex',
	transform: {
		'^.+\\.(ts|mjs|js|html)$': [
			'jest-preset-angular',
			{
				tsconfig: '<rootDir>/tsconfig.spec.json',
				stringifyContentPathRegex: '\\.(html|svg)$',
			},
		],
	},
	// @tanstack/table-core is "type": "module" with plain .js files and no CommonJS build at all,
	// so it has to be transformed rather than skipped. The negative lookahead must fail at *every*
	// node_modules/ in the path — Jest ignores a file if any position matches, and pnpm's layout
	// gives every dependency two. The obvious `node_modules/(?!@tanstack/)` silently does not work.
	transformIgnorePatterns: ['node_modules/(?!.*(@tanstack|\\.mjs$))'],
	snapshotSerializers: [
		'jest-preset-angular/build/serializers/no-ng-attributes',
		'jest-preset-angular/build/serializers/ng-snapshot',
		'jest-preset-angular/build/serializers/html-comment',
	],
};
