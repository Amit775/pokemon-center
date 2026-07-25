module.exports = {
	displayName: 'domain-school-engine',
	preset: '../../jest.preset.js',
	testEnvironment: 'node',
	transform: {
		'^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
	},
	moduleFileExtensions: ['ts', 'js'],
	coverageDirectory: '../../coverage/libs/domain-school-engine',
};
