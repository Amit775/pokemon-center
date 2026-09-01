import { parseRegulationMetadata, serializeRegulationMetadata, type RegulationMetadata } from './regulation-file';

const metadata: RegulationMetadata = {
	code: 'M-B',
	name: 'Regulation Set M-B',
	startsOn: '2026-06-17',
	endsOn: '2026-09-02',
	notes: null,
};

describe('regulation metadata', () => {
	it('round-trips through JSON', () => {
		expect(parseRegulationMetadata(serializeRegulationMetadata(metadata))).toEqual(metadata);
	});

	it('defaults absent notes to null rather than undefined', () => {
		expect(parseRegulationMetadata('{"code":"M-B","name":"Regulation Set M-B","startsOn":"2026-06-17","endsOn":"2026-09-02"}').notes).toBeNull();
	});

	it.each(['code', 'name', 'startsOn', 'endsOn'])('refuses a file with no %s', (field) => {
		const incomplete = { ...metadata, [field]: '' };
		expect(() => parseRegulationMetadata(JSON.stringify(incomplete))).toThrow(new RegExp(field));
	});
});
