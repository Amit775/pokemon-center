import * as fs from 'fs';
import * as path from 'path';
import { RAW_DIR } from '../lib/champions-data';

/**
 * Stage 1 of the Champions pipeline: download source wikitext.
 *
 * Wikitext via the MediaWiki API rather than scraped HTML — the roster is expressed as
 * structured templates that survive layout changes, and the API hands back a revision id,
 * so every derived value is traceable to an exact revision of an exact page.
 *
 * The output is committed. Nothing in the running application ever reaches the network:
 * a broken fetch can never break the app, only leave the data as it was.
 */

const API = 'https://bulbapedia.bulbagarden.net/w/api.php';

/** MediaWiki asks clients to identify themselves; a generic agent gets rate-limited. */
const USER_AGENT = 'pokemon-center-champions-pipeline/0.1 (Nx pipeline; contact via repository)';

interface SourcePage {
	/** Filename stem written into the raw directory. */
	key: string;
	/** Exact wiki page title. */
	title: string;
	why: string;
}

const PAGES: SourcePage[] = [
	{
		key: 'roster',
		title: 'List of Pokémon in Pokémon Champions',
		why: 'legal species and Mega Evolutions, with their Champions typing',
	},
	{
		key: 'changes',
		title: 'Pokémon Champions',
		why: 'move, ability and status changes relative to the mainline games',
	},
];

interface FetchedPage extends SourcePage {
	wikitext: string;
	revisionId?: number;
	url: string;
}

async function fetchWikitext(page: SourcePage): Promise<FetchedPage> {
	const url = `${API}?action=parse&page=${encodeURIComponent(page.title)}&prop=wikitext|revid&format=json&formatversion=2`;
	const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });

	if (!response.ok) {
		throw new Error(`${page.title}: HTTP ${response.status} ${response.statusText}`);
	}

	const body = (await response.json()) as {
		parse?: { wikitext?: string; revid?: number };
		error?: { info?: string };
	};

	if (body.error) throw new Error(`${page.title}: ${body.error.info ?? 'MediaWiki error'}`);
	const wikitext = body.parse?.wikitext;
	if (!wikitext) throw new Error(`${page.title}: response contained no wikitext`);

	return {
		...page,
		wikitext,
		revisionId: body.parse?.revid,
		url: `https://bulbapedia.bulbagarden.net/wiki/${encodeURIComponent(page.title.replace(/ /g, '_'))}`,
	};
}

export async function runFetch(outputDir: string = RAW_DIR): Promise<void> {
	const absolute = path.join(process.cwd(), outputDir);
	fs.mkdirSync(absolute, { recursive: true });

	const fetched: FetchedPage[] = [];
	for (const page of PAGES) {
		console.log(`Fetching "${page.title}" — ${page.why}`);
		// Sequential rather than parallel: two requests against a volunteer-run wiki should
		// not arrive at once, and the pipeline is not in a hurry.
		fetched.push(await fetchWikitext(page));
	}

	for (const page of fetched) {
		fs.writeFileSync(path.join(absolute, `${page.key}.wikitext`), page.wikitext, 'utf8');
		console.log(`  ${page.key}.wikitext — ${page.wikitext.length.toLocaleString()} chars (rev ${page.revisionId ?? 'unknown'})`);
	}

	const manifest = {
		fetchedAt: new Date().toISOString(),
		pages: fetched.map(({ key, title, url, revisionId, why }) => ({ key, title, url, revisionId, why })),
	};
	fs.writeFileSync(path.join(absolute, 'manifest.json'), `${JSON.stringify(manifest, null, '\t')}\n`, 'utf8');

	console.log(`\nWrote ${fetched.length} pages to ${outputDir}. Review the diff, then run champions:derive.`);
}
