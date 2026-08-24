import baseConfig from '../../eslint.config.mjs';

// Pure TypeScript engine lib — no Angular plugins, matching the zero-framework-coupling
// discipline of domain-school-engine. Nothing here may import Angular, fetch, or the DOM.
export default [...baseConfig];
