import baseConfig from '../../eslint.config.mjs';
import nx from '@nx/eslint-plugin';

export default [
	...baseConfig,
	...nx.configs['flat/angular'],
	{
		files: ['**/*.ts'],
		rules: {
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'pokedex',
					style: 'camelCase',
				},
			],
			// Components are elements by default, but a few must attach to an existing native
			// element instead — pokedex-button applies to a real <button> or <a routerLink> rather
			// than wrapping one, which would nest interactive elements and break routing. The
			// prefix stays enforced either way; only the selector form is relaxed.
			'@angular-eslint/component-selector': [
				'error',
				{
					type: ['element', 'attribute'],
					prefix: 'pokedex',
					style: 'kebab-case',
				},
			],
			'@angular-eslint/prefer-standalone': 'off',
		},
	},
	...nx.configs['flat/angular-template'],
];
