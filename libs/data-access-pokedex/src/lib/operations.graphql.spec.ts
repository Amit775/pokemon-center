import { PokemonListDocument } from './generated/graphql';

describe('PokemonList operation', () => {
	it('requests stats alongside types', () => {
		const query = PokemonListDocument.toString();

		expect(query).toContain('base_stat');
		expect(query).toContain('stat {');
		expect(query).not.toContain('$skip');
	});
});
