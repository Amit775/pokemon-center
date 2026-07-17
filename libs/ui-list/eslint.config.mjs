import baseConfig from '../../eslint.config.mjs';
import nx from '@nx/eslint-plugin';

export default [
	...baseConfig,
	...nx.configs['flat/angular'],
	{
		files: ['**/*.ts'],
		rules: {
			'@angular-eslint/directive-selector': [
				'off',
				{
					type: 'attribute',
					prefix: 'uiList',
					style: 'camelCase',
				},
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'ui',
					style: 'kebab-case',
				},
			],
			'@angular-eslint/prefer-standalone': 'off',
		},
	},
	...nx.configs['flat/angular-template'],
];
