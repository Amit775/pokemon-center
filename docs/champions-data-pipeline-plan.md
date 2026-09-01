# Champions data pipeline — implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Champions ingest path so a regulation rotation is a reviewed diff of a
hand-editable roster file rather than a 654 KB JSON blob, and so M-C can be loaded before
Bulbapedia is updated.

**Architecture:** The Champions database becomes a disposable projection of exactly one
regulation, rebuilt by truncate-then-insert. `derive` and `seed` collapse into one `load` stage
with no committed intermediate. A new `roster` stage turns wikitext into a per-regulation TSV
that a human commits and can hand-edit; `load` reads only committed files. `RegulationLegality`
collapses onto `ChampionsPokemon` as a status column.

**Tech Stack:** TypeScript, ts-node, Nx 23, Prisma 7 (two schemas/clients), PostgreSQL 17,
NestJS 11 + code-first GraphQL, Angular 22, `@ngrx/signals`, Jest 30.

**Spec:** [docs/champions-data-pipeline-design.md](champions-data-pipeline-design.md)

## Global Constraints

- **No abbreviations in identifiers.** `context` not `ctx`, `pokedex` not `dex`, `regulation`
  not `reg`. Game-native terms (HP, PP, SP, STAB, IV, EV) are domain vocabulary and stay.
- **No explanatory comments in TypeScript.** No line comments, no block comments, no JSDoc.
  Extract named functions and named constants instead. Machine-read directives
  (`// eslint-disable-next-line`, `// @ts-expect-error`, codegen banners) are not comments and
  stay. Prisma `///` doc comments are schema data and stay.
- **Two Prisma projects.** Mainline is the default config; Champions requires
  `--config prisma.champions.config.ts` on every Prisma command. Mainline connection string is
  `DATABASE_URL`, Champions is `DATABASE_URL_CHAMPIONS`.
- **Generated code is committed and never hand-edited** (`libs/prisma-champions/src/generated`,
  `libs/data-access-champions/src/lib/generated`, `apps/champions-service/schema.gql`).
- **Branch:** `claude/pokemon-champions-data-arch-4a331d`. Conventional commits, frequently.
- Tests run through Nx: `pnpm nx run champions:test`. Never call jest directly.

## File structure

**Created:**

| File | Responsibility |
| --- | --- |
| `tools/champions/src/lib/champions-paths.ts` | Directory constants and per-regulation path helpers. |
| `tools/champions/src/lib/roster-file.ts` | The roster TSV format: serialize, parse, and the `RosterEntry` ↔ `RosterFileEntry` conversion. |
| `tools/champions/src/lib/roster-file.spec.ts` | Round-trip and malformed-input tests. |
| `tools/champions/src/lib/regulation-file.ts` | `regulation.json` metadata: shape, read, write. |
| `tools/champions/src/lib/legality-status.ts` | Maps Bulbapedia's availability text to `LegalityStatus`. |
| `tools/champions/src/lib/legality-status.spec.ts` | Mapping tests. |
| `tools/champions/src/lib/load-gates.ts` | The three refusal gates, pure. |
| `tools/champions/src/lib/load-gates.spec.ts` | One tripping and one passing fixture per gate. |
| `tools/champions/src/lib/mainline-projection.ts` | Mainline → Champions projection, moved wholesale out of `derive.ts`. |
| `tools/champions/src/pipeline/roster.ts` | `champions:roster` — wikitext to committed files. |
| `tools/champions/src/pipeline/load.ts` | `champions:load` — committed files + mainline DB → Champions DB. |
| `tools/champions/src/pipeline/reset.ts` | `champions:reset` — truncate. |

**Deleted:** `tools/champions/src/pipeline/derive.ts`, `tools/champions/src/pipeline/seed.ts`,
`tools/champions/src/lib/champions-data.ts`.

**Modified:** `tools/champions/src/lib/wikitext.ts` (add `parseRosterCounts`),
`tools/champions/src/cli.ts`, `tools/champions/project.json`,
`prisma/champions/schema.prisma`, the three files in
`apps/champions-service/src/app/resolvers/`, `apps/champions-service/src/app/models/`,
`libs/data-access-champions/src/lib/regulation.store.ts`,
`libs/data-access-champions/src/lib/operations.graphql`.

**Out of scope, stated explicitly:** no UI renders `legalityStatus` or `restrictionNote`. This
plan lands the columns and exposes them through GraphQL so the data path is complete; choosing
how a caveat badge looks is separate product work.

---

### Task 1: The roster file format

**Files:**
- Create: `tools/champions/src/lib/champions-paths.ts`
- Create: `tools/champions/src/lib/roster-file.ts`
- Create: `tools/champions/src/lib/regulation-file.ts`
- Test: `tools/champions/src/lib/roster-file.spec.ts`
- Test: `tools/champions/src/lib/regulation-file.spec.ts`

**Interfaces:**
- Consumes: `RosterEntry`, `RosterSection` from `./wikitext`.
- Produces: `RosterFileEntry`, `serializeRosterFile(entries: RosterFileEntry[]): string`,
  `parseRosterFile(contents: string): RosterFileEntry[]`,
  `toRosterFileEntry(entry: RosterEntry): RosterFileEntry`,
  `RegulationMetadata`, `serializeRegulationMetadata`, `parseRegulationMetadata`,
  `RAW_DIRECTORY`, `regulationDirectory(code: string): string`,
  `rosterFilePath(code: string)`, `regulationMetadataPath(code: string)`.

- [ ] **Step 1: Write the failing test**

Create `tools/champions/src/lib/roster-file.spec.ts`:

```typescript
import { parseRosterFile, serializeRosterFile, toRosterFileEntry, type RosterFileEntry } from './roster-file';
import type { RosterEntry } from './wikitext';

const venusaur: RosterFileEntry = {
	pokedexNumber: 3,
	species: 'Venusaur',
	form: '',
	formSuffix: '',
	section: 'species',
	type1: 'Grass',
	type2: 'Poison',
	availability: 'Yes',
	note: '',
	introducedIn: '1.0.2',
};

const alolanRaichu: RosterFileEntry = {
	pokedexNumber: 26,
	species: 'Raichu',
	form: 'Alolan Form',
	formSuffix: '-Alola',
	section: 'species',
	type1: 'Electric',
	type2: 'Psychic',
	availability: 'Yes',
	note: 'Regular form only',
	introducedIn: '1.0.2',
};

describe('roster file', () => {
	it('round-trips entries through the tab-separated format', () => {
		expect(parseRosterFile(serializeRosterFile([venusaur, alolanRaichu]))).toEqual([venusaur, alolanRaichu]);
	});

	it('writes a header row naming every column', () => {
		const [header] = serializeRosterFile([venusaur]).split('\n');
		expect(header.split('\t')).toEqual(['pokedex_number', 'species', 'form', 'form_suffix', 'section', 'type1', 'type2', 'availability', 'note', 'introduced_in']);
	});

	it('rejects a file whose header does not match the expected columns', () => {
		expect(() => parseRosterFile('pokedex_number\tspecies\n3\tVenusaur\n')).toThrow(/header/i);
	});

	it('ignores blank trailing lines', () => {
		expect(parseRosterFile(`${serializeRosterFile([venusaur])}\n\n`)).toEqual([venusaur]);
	});

	it('fills absent optional fields with empty strings when converting a parsed entry', () => {
		const parsed: RosterEntry = {
			pokedexNumber: 9,
			species: 'Blastoise',
			types: ['Water'],
			section: 'species',
			isMega: false,
			availability: 'Yes',
			isAvailable: true,
		};

		expect(toRosterFileEntry(parsed)).toEqual({
			pokedexNumber: 9,
			species: 'Blastoise',
			form: '',
			formSuffix: '',
			section: 'species',
			type1: 'Water',
			type2: '',
			availability: 'Yes',
			note: '',
			introducedIn: '',
		});
	});
});
```

Create `tools/champions/src/lib/regulation-file.spec.ts`:

```typescript
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
```

The blank `startsOn` that `champions:roster` writes is therefore rejected by `champions:load`
until a human fills it in. That is deliberate: the date is not stated on the roster page, and a
silently wrong start date is exactly the M-B bug this work exists to remove.

- [ ] **Step 2: Run the tests to verify they fail**

Run: `pnpm nx run champions:test -- roster-file regulation-file`
Expected: FAIL — `Cannot find module './roster-file'`.

- [ ] **Step 3: Write the path helpers**

Create `tools/champions/src/lib/champions-paths.ts`:

```typescript
export const CHAMPIONS_DATA_DIRECTORY = 'data/champions';
export const RAW_DIRECTORY = `${CHAMPIONS_DATA_DIRECTORY}/raw`;
export const REGULATIONS_DIRECTORY = `${CHAMPIONS_DATA_DIRECTORY}/regulations`;

export function regulationDirectory(code: string): string {
	return `${REGULATIONS_DIRECTORY}/${code}`;
}

export function rosterFilePath(code: string): string {
	return `${regulationDirectory(code)}/roster.tsv`;
}

export function regulationMetadataPath(code: string): string {
	return `${regulationDirectory(code)}/regulation.json`;
}
```

- [ ] **Step 4: Write the roster file module**

Create `tools/champions/src/lib/roster-file.ts`:

```typescript
import type { RosterEntry, RosterSection } from './wikitext';

export interface RosterFileEntry {
	pokedexNumber: number;
	species: string;
	form: string;
	formSuffix: string;
	section: RosterSection;
	type1: string;
	type2: string;
	availability: string;
	note: string;
	introducedIn: string;
}

const COLUMNS = ['pokedex_number', 'species', 'form', 'form_suffix', 'section', 'type1', 'type2', 'availability', 'note', 'introduced_in'] as const;

function toFields(entry: RosterFileEntry): string[] {
	return [
		String(entry.pokedexNumber),
		entry.species,
		entry.form,
		entry.formSuffix,
		entry.section,
		entry.type1,
		entry.type2,
		entry.availability,
		entry.note,
		entry.introducedIn,
	];
}

export function serializeRosterFile(entries: readonly RosterFileEntry[]): string {
	return [COLUMNS.join('\t'), ...entries.map((entry) => toFields(entry).join('\t'))].join('\n') + '\n';
}

export function parseRosterFile(contents: string): RosterFileEntry[] {
	const lines = contents.split(/\r?\n/).filter((line) => line.trim() !== '');
	const [header, ...rows] = lines;

	if (header === undefined || header.split('\t').join() !== COLUMNS.join()) {
		throw new Error(`Roster file header must be exactly: ${COLUMNS.join('\t')}`);
	}

	return rows.map((row, index) => {
		const fields = row.split('\t');
		if (fields.length !== COLUMNS.length) {
			throw new Error(`Roster file line ${index + 2} has ${fields.length} fields, expected ${COLUMNS.length}`);
		}

		const pokedexNumber = Number(fields[0]);
		if (!Number.isInteger(pokedexNumber)) {
			throw new Error(`Roster file line ${index + 2} has a non-numeric pokedex_number: ${fields[0]}`);
		}

		return {
			pokedexNumber,
			species: fields[1],
			form: fields[2],
			formSuffix: fields[3],
			section: fields[4] as RosterSection,
			type1: fields[5],
			type2: fields[6],
			availability: fields[7],
			note: fields[8],
			introducedIn: fields[9],
		};
	});
}

export function toRosterFileEntry(entry: RosterEntry): RosterFileEntry {
	return {
		pokedexNumber: entry.pokedexNumber,
		species: entry.species,
		form: entry.form ?? '',
		formSuffix: entry.formSuffix ?? '',
		section: entry.section,
		type1: entry.types[0] ?? '',
		type2: entry.types[1] ?? '',
		availability: entry.availability,
		note: entry.note ?? '',
		introducedIn: entry.introducedIn ?? '',
	};
}

export function toRosterEntry(entry: RosterFileEntry): RosterEntry {
	return {
		pokedexNumber: entry.pokedexNumber,
		species: entry.species,
		types: [entry.type1, entry.type2].filter((type) => type !== ''),
		...(entry.form ? { form: entry.form } : {}),
		...(entry.formSuffix ? { formSuffix: entry.formSuffix } : {}),
		section: entry.section,
		isMega: entry.section === 'mega',
		availability: entry.availability,
		isAvailable: true,
		...(entry.introducedIn ? { introducedIn: entry.introducedIn } : {}),
		...(entry.note ? { note: entry.note } : {}),
	};
}
```

- [ ] **Step 5: Write the regulation metadata module**

Create `tools/champions/src/lib/regulation-file.ts`:

```typescript
export interface RegulationMetadata {
	code: string;
	name: string;
	startsOn: string;
	endsOn: string;
	notes: string | null;
}

export function serializeRegulationMetadata(metadata: RegulationMetadata): string {
	return `${JSON.stringify(metadata, null, '\t')}\n`;
}

export function parseRegulationMetadata(contents: string): RegulationMetadata {
	const parsed = JSON.parse(contents) as Partial<RegulationMetadata>;

	for (const field of ['code', 'name', 'startsOn', 'endsOn'] as const) {
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
```

- [ ] **Step 6: Run the tests to verify they pass**

Run: `pnpm nx run champions:test -- roster-file regulation-file`
Expected: PASS — 5 roster-file tests and 6 regulation-file tests.

- [ ] **Step 7: Commit**

```bash
git add tools/champions/src/lib/champions-paths.ts tools/champions/src/lib/roster-file.ts tools/champions/src/lib/regulation-file.ts tools/champions/src/lib/roster-file.spec.ts tools/champions/src/lib/regulation-file.spec.ts
git commit -m "feat(champions): add the per-regulation roster file format"
```

---

### Task 2: Legality status mapping and the load gates

**Files:**
- Create: `tools/champions/src/lib/legality-status.ts`
- Create: `tools/champions/src/lib/load-gates.ts`
- Modify: `tools/champions/src/lib/wikitext.ts` (append `parseRosterCounts`)
- Test: `tools/champions/src/lib/legality-status.spec.ts`
- Test: `tools/champions/src/lib/load-gates.spec.ts`

**Interfaces:**
- Consumes: `RegulationMetadata` from `./regulation-file`.
- Produces: `LegalityStatus` (string union `'LEGAL' | 'TRANSFER_ONLY' | 'EVENT_ONLY' | 'RESTRICTED'`),
  `toLegalityStatus(availability: string): LegalityStatus`,
  `parseRosterCounts(wikitext: string): { species: number; megas: number } | null`,
  `LoadProblem`, `GateInput`, `findLoadProblems(input: GateInput): LoadProblem[]`,
  `SPECIES_COUNT_TOLERANCE`.

- [ ] **Step 1: Write the failing tests**

Create `tools/champions/src/lib/legality-status.spec.ts`:

```typescript
import { toLegalityStatus } from './legality-status';

describe('toLegalityStatus', () => {
	it('reads a plain yes as legal', () => {
		expect(toLegalityStatus('Yes')).toBe('LEGAL');
	});

	it('reads transfer and event caveats as their own statuses', () => {
		expect(toLegalityStatus('Transfer only')).toBe('TRANSFER_ONLY');
		expect(toLegalityStatus('Event only')).toBe('EVENT_ONLY');
	});

	it('is case and whitespace insensitive', () => {
		expect(toLegalityStatus('  transfer ONLY ')).toBe('TRANSFER_ONLY');
	});

	it('treats anything else as restricted rather than guessing it is legal', () => {
		expect(toLegalityStatus('Ranked Battle only')).toBe('RESTRICTED');
	});
});
```

Create `tools/champions/src/lib/load-gates.spec.ts`:

```typescript
import { findLoadProblems } from './load-gates';
import { parseRosterCounts } from './wikitext';

const regulation = { code: 'M-B', name: 'Regulation Set M-B', startsOn: '2026-06-17', endsOn: '2026-09-02', notes: null };
const clean = { statedSpeciesCount: 208, parsedSpeciesCount: 208, regulation, unresolvedSpeciesSectionEntries: [] };

describe('parseRosterCounts', () => {
	it('reads the species and Mega counts the page states in prose', () => {
		const prose = 'This is a list of Pokémon that are available in [[Pokémon Champions]]. 208 Pokémon species are available in the game, as well as 75 [[Mega Evolution]]s.';
		expect(parseRosterCounts(prose)).toEqual({ species: 208, megas: 75 });
	});

	it('returns null when the prose has been reworded', () => {
		expect(parseRosterCounts('A list of Pokémon available in Champions.')).toBeNull();
	});
});

describe('findLoadProblems', () => {
	it('passes a clean load', () => {
		expect(findLoadProblems(clean)).toEqual([]);
	});

	it('accepts a species count within tolerance of the stated figure', () => {
		expect(findLoadProblems({ ...clean, parsedSpeciesCount: 200 })).toEqual([]);
	});

	it('refuses a species count far below the stated figure', () => {
		const problems = findLoadProblems({ ...clean, parsedSpeciesCount: 40 });
		expect(problems).toHaveLength(1);
		expect(problems[0].gate).toBe('species-count');
	});

	it('skips the count gate when the prose could not be read', () => {
		expect(findLoadProblems({ ...clean, statedSpeciesCount: null, parsedSpeciesCount: 40 })).toEqual([]);
	});

	it('refuses a regulation window that ends before it starts', () => {
		const problems = findLoadProblems({ ...clean, regulation: { ...regulation, endsOn: '2026-05-01' } });
		expect(problems.map((problem) => problem.gate)).toEqual(['regulation-window']);
	});

	it('refuses an unparseable date', () => {
		const problems = findLoadProblems({ ...clean, regulation: { ...regulation, startsOn: 'soon' } });
		expect(problems.map((problem) => problem.gate)).toEqual(['regulation-window']);
	});

	it('refuses when a species-section entry did not resolve against the mainline dataset', () => {
		const problems = findLoadProblems({ ...clean, unresolvedSpeciesSectionEntries: ['Venusaur'] });
		expect(problems.map((problem) => problem.gate)).toEqual(['unresolved-species']);
	});
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `pnpm nx run champions:test -- legality-status load-gates`
Expected: FAIL — `Cannot find module './legality-status'` and `parseRosterCounts is not a function`.

- [ ] **Step 3: Write the legality status module**

Create `tools/champions/src/lib/legality-status.ts`:

```typescript
export type LegalityStatus = 'LEGAL' | 'TRANSFER_ONLY' | 'EVENT_ONLY' | 'RESTRICTED';

export function toLegalityStatus(availability: string): LegalityStatus {
	const value = availability.trim().toLowerCase();
	if (value.startsWith('transfer')) return 'TRANSFER_ONLY';
	if (value.startsWith('event')) return 'EVENT_ONLY';
	if (value.startsWith('yes')) return 'LEGAL';
	return 'RESTRICTED';
}
```

- [ ] **Step 4: Add `parseRosterCounts` to the wikitext parsers**

Append to `tools/champions/src/lib/wikitext.ts`:

```typescript
export function parseRosterCounts(wikitext: string): { species: number; megas: number } | null {
	const species = wikitext.match(/(\d+)\s+Pokémon species are available/i);
	const megas = wikitext.match(/as well as\s+(\d+)\s+\[\[Mega Evolution\]\]s/i);
	if (!species || !megas) return null;

	return { species: Number(species[1]), megas: Number(megas[1]) };
}
```

- [ ] **Step 5: Write the gates**

Create `tools/champions/src/lib/load-gates.ts`:

```typescript
import type { RegulationMetadata } from './regulation-file';

export const SPECIES_COUNT_TOLERANCE = 0.05;

export interface LoadProblem {
	gate: 'species-count' | 'regulation-window' | 'unresolved-species';
	message: string;
}

export interface GateInput {
	statedSpeciesCount: number | null;
	parsedSpeciesCount: number;
	regulation: RegulationMetadata;
	unresolvedSpeciesSectionEntries: readonly string[];
}

function isValidDate(value: string): boolean {
	return !Number.isNaN(new Date(value).getTime());
}

export function findLoadProblems(input: GateInput): LoadProblem[] {
	const problems: LoadProblem[] = [];
	const { statedSpeciesCount, parsedSpeciesCount, regulation, unresolvedSpeciesSectionEntries } = input;

	if (statedSpeciesCount !== null && statedSpeciesCount > 0) {
		const drift = Math.abs(parsedSpeciesCount - statedSpeciesCount) / statedSpeciesCount;
		if (drift > SPECIES_COUNT_TOLERANCE) {
			problems.push({
				gate: 'species-count',
				message: `The roster page states ${statedSpeciesCount} species but ${parsedSpeciesCount} parsed. The template shape has probably changed.`,
			});
		}
	}

	if (!isValidDate(regulation.startsOn) || !isValidDate(regulation.endsOn) || new Date(regulation.endsOn) <= new Date(regulation.startsOn)) {
		problems.push({
			gate: 'regulation-window',
			message: `Regulation ${regulation.code} has an invalid window: ${regulation.startsOn} to ${regulation.endsOn}.`,
		});
	}

	if (unresolvedSpeciesSectionEntries.length > 0) {
		problems.push({
			gate: 'unresolved-species',
			message: `${unresolvedSpeciesSectionEntries.length} species-section entries did not resolve against the mainline dataset: ${unresolvedSpeciesSectionEntries.slice(0, 10).join(', ')}`,
		});
	}

	return problems;
}
```

- [ ] **Step 6: Run the tests to verify they pass**

Run: `pnpm nx run champions:test`
Expected: PASS — the new suites plus the existing `wikitext.spec.ts`.

- [ ] **Step 7: Commit**

```bash
git add tools/champions/src/lib/legality-status.ts tools/champions/src/lib/legality-status.spec.ts tools/champions/src/lib/load-gates.ts tools/champions/src/lib/load-gates.spec.ts tools/champions/src/lib/wikitext.ts
git commit -m "feat(champions): add legality status mapping and load refusal gates"
```

---

### Task 3: The `roster` stage

**Files:**
- Create: `tools/champions/src/pipeline/roster.ts`
- Modify: `tools/champions/src/cli.ts`
- Modify: `tools/champions/project.json`

**Interfaces:**
- Consumes: `parseRoster`, `parseRegulationHeader` from `../lib/wikitext`; everything Task 1
  produced.
- Produces: `runRoster(options: { force: boolean }): Promise<void>`, and the committed files
  `data/champions/regulations/M-B/roster.tsv` and `.../regulation.json`.

- [ ] **Step 1: Write the roster stage**

Create `tools/champions/src/pipeline/roster.ts`:

```typescript
import * as fs from 'fs';
import * as path from 'path';
import { RAW_DIRECTORY, regulationDirectory, regulationMetadataPath, rosterFilePath } from '../lib/champions-paths';
import { serializeRegulationMetadata, type RegulationMetadata } from '../lib/regulation-file';
import { serializeRosterFile, toRosterFileEntry } from '../lib/roster-file';
import { parseRegulationHeader, parseRoster } from '../lib/wikitext';

const UNKNOWN_START_DATE = '';

function readRawRoster(): string {
	const file = path.join(process.cwd(), RAW_DIRECTORY, 'roster.wikitext');
	if (!fs.existsSync(file)) {
		throw new Error(`Missing ${file}. Run "nx run champions:fetch" first.`);
	}
	return fs.readFileSync(file, 'utf8');
}

function refuseToOverwrite(file: string, force: boolean): void {
	if (fs.existsSync(file) && !force) {
		throw new Error(`${file} already exists. Review it, or pass --force to regenerate it from the wiki.`);
	}
}

export async function runRoster(options: { force: boolean }): Promise<void> {
	const wikitext = readRawRoster();
	const header = parseRegulationHeader(wikitext);

	if (!header) {
		throw new Error('Could not read the regulation code from the roster page. Write regulation.json by hand and skip this stage.');
	}

	const entries = parseRoster(wikitext).filter((entry) => entry.isAvailable);
	if (entries.length === 0) {
		throw new Error('Parsed zero available roster entries — the upstream markup has probably changed shape.');
	}

	const directory = path.join(process.cwd(), regulationDirectory(header.code));
	const roster = path.join(process.cwd(), rosterFilePath(header.code));
	const metadata = path.join(process.cwd(), regulationMetadataPath(header.code));

	refuseToOverwrite(roster, options.force);
	refuseToOverwrite(metadata, options.force);

	fs.mkdirSync(directory, { recursive: true });
	fs.writeFileSync(roster, serializeRosterFile(entries.map(toRosterFileEntry)), 'utf8');

	const regulation: RegulationMetadata = {
		code: header.code,
		name: `Regulation Set ${header.code}`,
		startsOn: UNKNOWN_START_DATE,
		endsOn: header.endsOn,
		notes: null,
	};
	fs.writeFileSync(metadata, serializeRegulationMetadata(regulation), 'utf8');

	const bySection = (section: string) => entries.filter((entry) => entry.section === section).length;
	console.log(`Regulation ${header.code}, ends ${header.endsOn}`);
	console.log(`  ${rosterFilePath(header.code)} — ${entries.length} entries (${bySection('species')} species, ${bySection('mega')} Megas, ${bySection('other-form')} alternate forms)`);
	console.log(`  ${regulationMetadataPath(header.code)} — startsOn is blank; fill it in before loading.`);
	console.log('\nReview the diff, fill in startsOn, commit, then run champions:load.');
}
```

- [ ] **Step 2: Wire the stage into the CLI**

Replace `tools/champions/src/cli.ts` entirely:

```typescript
import { runFetch } from './pipeline/fetch';
import { runRoster } from './pipeline/roster';

const flags = process.argv.slice(3);
const hasFlag = (flag: string): boolean => flags.includes(flag);

const STAGES = {
	fetch: () => runFetch(),
	roster: () => runRoster({ force: hasFlag('--force') }),
} satisfies Record<string, () => Promise<void>>;

type Stage = keyof typeof STAGES;

async function main(): Promise<void> {
	const stage = process.argv[2] as Stage | undefined;

	if (!stage || !(stage in STAGES)) {
		console.error(`Usage: champions <${Object.keys(STAGES).join('|')}>`);
		process.exitCode = 1;
		return;
	}

	await STAGES[stage]();
}

main().catch((error: unknown) => {
	console.error(error instanceof Error ? error.message : error);
	process.exitCode = 1;
});
```

The `derive` and `seed` imports are gone; those files are deleted in Task 5. Between this task
and that one, `nx run champions:derive` and `champions:seed` will fail. That is intended — they
are being replaced, and leaving them importable would invite running the old path against the
new schema.

- [ ] **Step 3: Add the Nx target**

In `tools/champions/project.json`, add alongside `fetch`, and delete the `derive` and `seed`
targets and the `refresh` target's body (rebuilt in Task 5):

```json
"roster": {
  "executor": "nx:run-commands",
  "options": {
    "command": "ts-node --project tools/champions/tsconfig.lib.json tools/champions/src/cli.ts roster"
  }
}
```

- [ ] **Step 4: Generate the M-B roster from the committed wikitext**

Run: `pnpm nx run champions:roster`
Expected: writes `data/champions/regulations/M-B/roster.tsv` and `regulation.json`, reporting
roughly 208 species, 75 Megas, and some alternate forms.

- [ ] **Step 5: Fill in the M-B start date and verify the file by eye**

Edit `data/champions/regulations/M-B/regulation.json` and set `"startsOn": "2026-06-17"` — the
value currently hardcoded in `derive.ts`.

Open `roster.tsv`. Confirm it is roughly 300 lines, that Venusaur is the first species row, that
Alolan Raichu carries `-Alola` in `form_suffix`, and that Mega rows sit in the `mega` section.

- [ ] **Step 6: Commit**

```bash
git add tools/champions/src/pipeline/roster.ts tools/champions/src/cli.ts tools/champions/project.json data/champions/regulations
git commit -m "feat(champions): generate a committed, hand-editable roster file per regulation"
```

---

### Task 4: Schema migration

**Files:**
- Modify: `prisma/champions/schema.prisma`
- Create: `prisma/champions/migrations/<timestamp>_regulation_scoped_legality/migration.sql` (generated)

**Interfaces:**
- Produces: `ChampionsPokemon.legality_status`, `.restriction_note`, `.introduced_in`; the
  `LegalityStatus` Prisma enum. Removes the `RegulationLegality` model and
  `Regulation.is_current`.

- [ ] **Step 1: Add the enum**

Add to the enums section at the bottom of `prisma/champions/schema.prisma`:

```prisma
/// How a Pokémon is legal in the loaded regulation. Every row in `champions_pokemon` is legal;
/// this records the caveat Bulbapedia attaches to obtaining it.
enum LegalityStatus {
  LEGAL
  TRANSFER_ONLY
  EVENT_ONLY
  RESTRICTED
}
```

- [ ] **Step 2: Add the columns to `ChampionsPokemon`**

Add after `learnset_is_approximate`:

```prisma
  legality_status  LegalityStatus @default(LEGAL)
  /// Caveat attached to obtaining this entry, e.g. "Regular form only".
  restriction_note String?
  /// Game version that added this entry, e.g. `1.1.0`. The only in-database answer to "what is
  /// new this regulation", since the database holds one regulation at a time.
  introduced_in    String?
```

Then delete the `legality RegulationLegality[]` relation field from the same model, and add:

```prisma
  @@index([legality_status])
```

- [ ] **Step 3: Remove `RegulationLegality` and `is_current`**

Delete the entire `RegulationLegality` model. In `Regulation`, delete the `is_current` field,
the `legality RegulationLegality[]` relation, and the `@@index([is_current])`.

Update the `Regulation` doc comment to state that the table holds exactly one row, matching the
governing principle in the design document.

- [ ] **Step 4: Create and apply the migration**

Run: `pnpm prisma migrate dev --config prisma.champions.config.ts --name regulation_scoped_legality`
Expected: a migration that drops `regulation_legality`, drops `regulation.is_current`, creates
the `LegalityStatus` type, and adds three columns to `champions_pokemon`.

- [ ] **Step 5: Regenerate the client and confirm it typechecks**

Run: `pnpm prisma generate --config prisma.champions.config.ts`
Then: `pnpm nx run champions-service:build`
Expected: FAIL — the resolvers still reference `regulationLegality` and `is_current`. That is
the expected state; Task 6 fixes it. Record the failing references.

- [ ] **Step 6: Commit**

```bash
git add prisma/champions/schema.prisma prisma/champions/migrations libs/prisma-champions/src/generated
git commit -m "feat(champions)!: collapse regulation legality onto the pokemon row"
```

---

### Task 5: The `load` and `reset` stages

**Files:**
- Create: `tools/champions/src/lib/mainline-projection.ts`
- Create: `tools/champions/src/pipeline/load.ts`
- Create: `tools/champions/src/pipeline/reset.ts`
- Delete: `tools/champions/src/pipeline/derive.ts`, `tools/champions/src/pipeline/seed.ts`, `tools/champions/src/lib/champions-data.ts`
- Modify: `tools/champions/src/cli.ts`, `tools/champions/project.json`

**Interfaces:**
- Consumes: `parseRosterFile`, `toRosterEntry`, `parseRegulationMetadata`, `findLoadProblems`,
  `parseRosterCounts`, `toLegalityStatus`.
- Produces: `runLoad(options: { code?: string; dryRun: boolean }): Promise<void>`,
  `runReset(options: { confirm: boolean }): Promise<void>`,
  `projectFromMainline(entries: RosterEntry[]): Promise<ProjectedDataset>`.

- [ ] **Step 1: Move the projection out of `derive.ts`**

Create `tools/champions/src/lib/mainline-projection.ts`. Move these from `derive.ts`
**unchanged in behaviour**: `CHAMPIONS_VERSION_GROUP`, `FALLBACK_VERSION_GROUPS`, `ENGLISH`,
`CHAMPIONS_LEVEL`, `displayName`, `resolveEntry`, and the body of `runDerive` from the
`allPokemon` query down to the Mega learnset inheritance loop.

Strip every comment during the move, per the Global Constraints — the reasoning those comments
carried now lives in the design document and in this plan.

Export:

```typescript
export interface ProjectedPokemon {
	id: number;
	slug: string;
	name: string;
	nationalPokedexNumber: number;
	type1Id: number;
	type2Id: number | null;
	baseHp: number;
	baseAttack: number;
	baseDefense: number;
	baseSpecialAttack: number;
	baseSpecialDefense: number;
	baseSpeed: number;
	isMega: boolean;
	megaOfId: number | null;
	megaAbilityId: number | null;
	spriteKey: string | null;
	abilities: { abilityId: number; slot: number; isHidden: boolean }[];
	moveIds: number[];
	learnsetIsApproximate: boolean;
	legalityStatus: LegalityStatus;
	restrictionNote: string | null;
	introducedIn: string | null;
}

export interface ProjectedDataset {
	types: { id: number; slug: string; name: string }[];
	typeEfficacy: { attackingTypeId: number; defendingTypeId: number; damageFactor: number }[];
	abilities: { id: number; slug: string; name: string; effectText: string | null; isMega: boolean }[];
	moves: ProjectedMove[];
	pokemon: ProjectedPokemon[];
	unresolved: { kind: 'pokemon' | 'move'; section: string; name: string; reason: string }[];
}
```

`ProjectedMove` carries the same fields as the deleted `DerivedMove`. Two behavioural changes
from `derive.ts`, and only two:

1. Each `ProjectedPokemon` gains `legalityStatus` from `toLegalityStatus(entry.availability)`,
   `restrictionNote` from `entry.note ?? null`, and `introducedIn` from `entry.introducedIn ?? null`.
2. `unresolved` entries gain a `section` field carrying `entry.section`, so the gate can tell a
   species-section failure from a cosmetic other-form one.

The move override inputs (`moveOverrides`, `ppExceptions`) stay parameters of
`projectFromMainline`, passed in by `load.ts` from `changes.wikitext`.

- [ ] **Step 2: Write the reset stage**

Create `tools/champions/src/pipeline/reset.ts`:

```typescript
// eslint-disable-next-line @nx/enforce-module-boundaries
import { PrismaClient } from '../../../../libs/prisma-champions/src/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';

const CHAMPIONS_TABLES = [
	'battle_turn',
	'battle_session',
	'team_member',
	'team',
	'box_pokemon_move',
	'box_pokemon',
	'known_set_move',
	'known_set',
	'regulation',
	'champions_learnset',
	'champions_pokemon_ability',
	'champions_pokemon',
	'champions_move',
	'champions_ability',
	'champions_type_efficacy',
	'champions_type',
];

export async function truncateChampionsDatabase(executor: Pick<PrismaClient, '$executeRawUnsafe'>): Promise<void> {
	const tables = CHAMPIONS_TABLES.map((table) => `"${table}"`).join(', ');
	await executor.$executeRawUnsafe(`TRUNCATE TABLE ${tables} RESTART IDENTITY CASCADE`);
}

export async function runReset(options: { confirm: boolean }): Promise<void> {
	if (!options.confirm) {
		throw new Error('champions:reset deletes every row, including your Box, teams and battle sessions. Pass --confirm to proceed.');
	}

	const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env['DATABASE_URL_CHAMPIONS'] }) });

	try {
		await truncateChampionsDatabase(prisma);
		console.log(`Truncated ${CHAMPIONS_TABLES.length} tables.`);
	} finally {
		await prisma.$disconnect();
	}
}
```

- [ ] **Step 3: Write the load stage**

Create `tools/champions/src/pipeline/load.ts`. It reads the committed files, runs the
projection, applies the gates, and then truncates and inserts inside one transaction:

```typescript
export async function runLoad(options: { code?: string; dryRun: boolean }): Promise<void> {
	const code = options.code ?? mostRecentlyModifiedRegulationCode();
	const regulation = parseRegulationMetadata(fs.readFileSync(path.join(process.cwd(), regulationMetadataPath(code)), 'utf8'));
	const entries = parseRosterFile(fs.readFileSync(path.join(process.cwd(), rosterFilePath(code)), 'utf8')).map(toRosterEntry);

	const changesWikitext = readRaw('changes');
	const rosterWikitext = readRaw('roster');
	const statedCounts = parseRosterCounts(rosterWikitext);

	const projection = await projectFromMainline(entries, parseMoveOverrides(changesWikitext), parsePpExceptions(changesWikitext));

	const problems = findLoadProblems({
		statedSpeciesCount: statedCounts?.species ?? null,
		parsedSpeciesCount: new Set(entries.filter((entry) => entry.section === 'species').map((entry) => entry.pokedexNumber)).size,
		regulation,
		unresolvedSpeciesSectionEntries: projection.unresolved.filter((item) => item.section === 'species').map((item) => item.name),
	});

	reportProjection(regulation, projection, problems);

	if (problems.length > 0) {
		throw new Error(`Refusing to load: ${problems.length} gate(s) failed.`);
	}

	if (options.dryRun) {
		console.log('\nDry run — nothing was written.');
		return;
	}

	const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env['DATABASE_URL_CHAMPIONS'] }) });
	try {
		await prisma.$transaction(async (transaction) => {
			await truncateChampionsDatabase(transaction);
			await insertProjection(transaction, regulation, projection);
		}, { timeout: TRANSACTION_TIMEOUT_MILLISECONDS, maxWait: TRANSACTION_MAX_WAIT_MILLISECONDS });
		console.log('\nLoad complete.');
	} finally {
		await prisma.$disconnect();
	}
}
```

`insertProjection` uses `createMany` throughout — never `upsert`, because the database is empty
by the time it runs. Insert order: types, type efficacy, abilities, moves, then `champions_pokemon`
with base forms before Megas (`mega_of_id` is a self-reference), then pokemon abilities, then
learnsets, then the single `regulation` row.

`reportProjection` prints per-table counts, the unresolved list, and each gate problem. This is
what `--dry-run` exists to show.

`mostRecentlyModifiedRegulationCode` reads `data/champions/regulations/`, and throws a message
naming the available codes if the directory holds none or more than one candidate is ambiguous.

- [ ] **Step 4: Delete the replaced files and rewire**

```bash
git rm tools/champions/src/pipeline/derive.ts tools/champions/src/pipeline/seed.ts tools/champions/src/lib/champions-data.ts
```

Add `load` and `reset` to `STAGES` in `cli.ts`:

```typescript
	load: () => runLoad({ code: valueOfFlag('--code'), dryRun: hasFlag('--dry-run') }),
	reset: () => runReset({ confirm: hasFlag('--confirm') }),
```

with `valueOfFlag` reading `--code=M-C` or `--code M-C`. Add matching `load` and `reset` targets
to `project.json`, and set `refresh` to `["nx run champions:fetch", "nx run champions:roster", "nx run champions:load"]`.

- [ ] **Step 5: Dry-run against M-B**

Run: `pnpm nx run champions:load -- --dry-run`
Expected: no gate failures; roughly 208 species, 75 Megas, ~700 moves, and a learnset pair count
in the tens of thousands. Nothing written.

- [ ] **Step 6: Load M-B for real and verify against the old numbers**

Run: `pnpm nx run champions:load`

Then confirm the row counts match what the old pipeline produced:

```bash
psql "$DATABASE_URL_CHAMPIONS" -c "select (select count(*) from champions_pokemon) as pokemon, (select count(*) from champions_learnset) as learnset, (select count(*) from champions_move) as moves, (select count(*) from regulation) as regulations, (select count(*) from champions_pokemon where legality_status <> 'LEGAL') as caveated"
```

Expected: `regulations` is exactly 1. `pokemon`, `learnset` and `moves` match the counts the old
`seed` printed. `caveated` is greater than zero — if it is zero, `restriction_note` and
`legality_status` are not being populated and the mapping is wrong.

- [ ] **Step 7: Commit**

```bash
git add -A tools/champions
git commit -m "feat(champions): replace derive and seed with a single truncate-then-load stage"
```

---

### Task 6: Service layer

**Files:**
- Modify: `apps/champions-service/src/app/resolvers/pokedex.resolver.ts`
- Modify: `apps/champions-service/src/app/resolvers/regulation.resolver.ts`
- Modify: `apps/champions-service/src/app/resolvers/box.resolver.ts:263-266`
- Modify: `apps/champions-service/src/app/models/regulation.model.ts`
- Modify: `apps/champions-service/src/app/models/pokemon.model.ts`
- Modify: `apps/champions-service/schema.gql` (regenerated, not hand-edited)

**Interfaces:**
- Consumes: the Task 4 schema.
- Produces: a GraphQL schema with no `regulations` query, no `Regulation.isCurrent`, no
  `regulation` argument on the roster queries, and `legalityStatus` / `restrictionNote` /
  `introducedIn` on `ChampionsPokedexEntry`.

- [ ] **Step 1: Delete `legalIds` and its call sites**

In `pokedex.resolver.ts`, delete the `legalIds` method. In `championsSearch`,
`championsRoster`, `championsRosterCount` and `championsPokedex`: delete the `regulation`
argument, delete the `const legal = await this.legalIds(...)` line and the
`if (legal.length === 0) return ...` guard, and remove `id: { in: legal }` from each `where`.
In `championsPokedex`, change `megaForms: { where: { id: { in: legal } }, select: { id: true } }`
to `megaForms: { select: { id: true } }`.

- [ ] **Step 2: Expose the new columns on the Pokédex entry**

In `pokemon.model.ts`, add three fields to `ChampionsPokedexEntry`, following the existing
`@Field` style in that file:

```typescript
	@Field(() => String)
	legalityStatus!: string;

	@Field(() => String, { nullable: true })
	restrictionNote!: string | null;

	@Field(() => String, { nullable: true })
	introducedIn!: string | null;
```

Add `legality_status: true, restriction_note: true, introduced_in: true` to the `select` in
`championsPokedex`, and map them in the returned object.

- [ ] **Step 3: Simplify the regulation resolver**

In `regulation.resolver.ts`: delete the `regulations` query entirely. Change `currentRegulation`
to a single `findFirst()` with no `where` and no fallback. Replace
`_count: { select: { legality: true } }` with a separate
`this.prisma.championsPokemon.count()` for `legalCount`. Remove `is_current` from `RegulationRow`
and `isCurrent` from `toModel`.

In `regulation.model.ts`, delete the `isCurrent` field.

In `box.resolver.ts`, replace the two-step current-regulation lookup at lines 263-266 with
`await this.prisma.regulation.findFirst({ select: { id: true } })`, keeping the
`BadRequestException` when nothing is loaded.

- [ ] **Step 4: Build and regenerate the schema**

Run: `pnpm nx run champions-service:build`
Expected: PASS. If anything still references `regulationLegality` or `is_current`, fix it here.

Then start the service once so NestJS rewrites `apps/champions-service/schema.gql`:

Run: `pnpm nx run champions-service:serve`
Stop it after it reports listening. Confirm `git diff apps/champions-service/schema.gql` shows
`isCurrent` and the `regulations` query removed, the `regulation` arguments gone, and the three
new fields added.

- [ ] **Step 5: Commit**

```bash
git add apps/champions-service
git commit -m "feat(champions)!: drop the regulation join from the read path"
```

---

### Task 7: Frontend types and codegen

**Files:**
- Modify: `libs/data-access-champions/src/lib/operations.graphql`
- Modify: `libs/data-access-champions/src/lib/regulation.store.ts`
- Modify: `libs/data-access-champions/src/lib/generated/*` (regenerated)

**Interfaces:**
- Consumes: the schema from Task 6.
- Produces: an `ActiveRegulation` without `isCurrent`; no `RegulationListDocument`.

- [ ] **Step 1: Update the operations**

In `operations.graphql`: delete the `isCurrent` line from `CurrentRegulation`, and delete the
whole `RegulationList` query — codegen shows `RegulationListDocument` has no call site. Add
`legalityStatus`, `restrictionNote` and `introducedIn` to the `ChampionsPokedex` selection.

- [ ] **Step 2: Update the hand-written interface**

In `regulation.store.ts`, delete `isCurrent: boolean;` from `ActiveRegulation`. This interface is
declared by hand deliberately, so codegen will not do it for you.

- [ ] **Step 3: Regenerate**

Run: `pnpm nx run data-access-champions:codegen`
Expected: `graphql.ts` and `gql.ts` lose `isCurrent` and `RegulationListQuery`.

- [ ] **Step 4: Typecheck and test the frontend**

Run: `pnpm nx run-many -t lint test build --projects=pokemon-center,domain-champions,data-access-champions,champions-service`
Expected: PASS. `regulation.store.spec.ts` tests `daysUntil` only and is unaffected.

- [ ] **Step 5: Verify the application end to end**

Run: `pnpm nx run champions-service:serve` and `pnpm start`, then open `/champions`.
Expected: the home screen shows regulation M-B with its window and countdown; the Pokédex lists
the full roster; a detail page opens and shows moves. This is the regression test that the
rebuilt database is equivalent to the old one.

- [ ] **Step 6: Commit**

```bash
git add libs/data-access-champions libs/domain-champions
git commit -m "feat(champions): regenerate the client for the regulation-scoped schema"
```

---

### Task 8: Documentation

**Files:**
- Modify: `docs/champions-plan.md`

- [ ] **Step 1: Update the pipeline description**

Replace the fetch/derive/seed description in `champions-plan.md` with the four-stage pipeline,
and link to [champions-data-pipeline-design.md](champions-data-pipeline-design.md) for the
reasoning. Update the "Running it" section's commands. Add the M-C rollout's two paths to the
operational notes, since that is the thing someone will need under time pressure.

- [ ] **Step 2: Commit**

```bash
git add docs/champions-plan.md
git commit -m "docs(champions): describe the four-stage data pipeline"
```
