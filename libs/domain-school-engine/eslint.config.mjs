import baseConfig from '../../eslint.config.mjs';

// Pure TypeScript engine lib — deliberately no Angular eslint plugins, matching
// the zero-framework-coupling rule in docs/school-plan.md 3.1.
export default [...baseConfig];
