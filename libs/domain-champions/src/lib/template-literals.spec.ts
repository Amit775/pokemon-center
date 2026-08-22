import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * No backticks inside a component's `template:` or `styles:` literal.
 *
 * A backtick in a comment inside one of those literals closes the string. The file then parses
 * as something else entirely and the compiler reports the damage tens of lines later — usually
 * pointing at `styles:` or at the closing `})`, never at the comment that caused it. It has cost
 * this project five broken builds, one of which was reported as passing.
 *
 * It is exactly the kind of mistake a person cannot be trusted to remember and a machine checks
 * for free, so: a test rather than a note in a document.
 */

const SOURCE_ROOT = join(__dirname, '..');

function tsFilesUnder(dir: string): string[] {
	return readdirSync(dir).flatMap((name) => {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) return tsFilesUnder(path);
		return name.endsWith('.ts') && !name.endsWith('.spec.ts') ? [path] : [];
	});
}

/** Lines that open a decorator string literal, and the line shape that closes one. */
const OPENS = /^\s*(template|styles):\s*`/;
const CLOSES = /^\s*`[,)]?\s*$/;

/** Every offending line: a backtick between the delimiters, which silently ends the literal. */
function offences(source: string): { line: number; text: string }[] {
	const found: { line: number; text: string }[] = [];
	let inside = false;

	source.split(/\r?\n/).forEach((text, index) => {
		if (!inside) {
			if (OPENS.test(text)) inside = true;
			return;
		}

		if (CLOSES.test(text)) {
			inside = false;
			return;
		}

		if (text.includes('`')) found.push({ line: index + 1, text: text.trim() });
	});

	return found;
}

describe('component template and styles literals', () => {
	const files = tsFilesUnder(SOURCE_ROOT);

	it('finds source files to check', () => {
		// Guards the guard: a broken path would make every assertion below vacuously pass.
		expect(files.length).toBeGreaterThan(10);
	});

	it('contains no backticks that would close the literal early', () => {
		const broken = files.flatMap((file) =>
			offences(readFileSync(file, 'utf8')).map(({ line, text }) => `${file.split(/[\\/]/).pop()}:${line}  ${text}`),
		);

		expect(broken).toEqual([]);
	});

	it('detects the mistake it exists to catch', () => {
		const bad = ['@Component({', '\ttemplate: `', '\t\t<!-- see `ngOnInit` -->', '\t`,', '})'].join('\n');
		const good = ['@Component({', '\ttemplate: `', '\t\t<!-- see ngOnInit -->', '\t`,', '})'].join('\n');

		expect(offences(bad)).toHaveLength(1);
		expect(offences(good)).toEqual([]);
	});
});
