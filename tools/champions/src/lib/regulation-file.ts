export interface RegulationMetadata {
	code: string;
	name: string;
	startsOn: string;
	endsOn: string;
	notes: string | null;
}

const REQUIRED_FIELDS = ['code', 'name', 'startsOn', 'endsOn'] as const;

export function serializeRegulationMetadata(metadata: RegulationMetadata): string {
	return `${JSON.stringify(metadata, null, '\t')}\n`;
}

export function parseRegulationMetadata(contents: string): RegulationMetadata {
	const parsed = JSON.parse(contents) as Partial<RegulationMetadata>;

	for (const field of REQUIRED_FIELDS) {
		if (typeof parsed[field] !== 'string' || parsed[field] === '') {
			throw new Error(`regulation.json is missing a value for "${field}"`);
		}
	}

	return {
		code: parsed.code as string,
		name: parsed.name as string,
		startsOn: parsed.startsOn as string,
		endsOn: parsed.endsOn as string,
		notes: parsed.notes ?? null,
	};
}
