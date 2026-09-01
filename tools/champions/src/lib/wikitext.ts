/**
 * Parsers for the Bulbapedia wikitext the Champions pipeline consumes.
 *
 * Wikitext rather than rendered HTML on purpose: the roster is expressed as structured
 * templates (`{{gdex/Champs|0003|Venusaur|2|Grass|Poison|Yes|1.0.2}}`) that survive layout
 * changes, whereas the HTML table around them does not. Everything here is pure and
 * synchronous so the fragile part of the pipeline — interpreting someone else's markup —
 * is unit-testable without a network or a database.
 */

/**
 * Which part of the roster page an entry came from.
 *
 * The section is what distinguishes a Mega from a regional form — both carry a `form=`
 * parameter, so the parameters alone cannot tell them apart. `untransferable` entries are
 * present in the game data but cannot be obtained, and must not count as legal.
 */
export type RosterSection = 'species' | 'mega' | 'other-form' | 'untransferable';

/** A roster entry as Bulbapedia states it. Names are wiki display names, not slugs. */
export interface RosterEntry {
	/** National dex number of the base species. Megas share their base form's number. */
	pokedexNumber: number;
	/** Base species display name, e.g. `Venusaur`. */
	species: string;
	/** Champions' typing for this entry — which is not always the mainline typing. */
	types: string[];
	/** Present on Mega and alternate-form entries, e.g. `Mega Charizard X`, `Alolan Form`. */
	form?: string;
	/** Bulbapedia's in-game suffix for a form, e.g. `-Alola`, `-Paldea Combat`, `-Mega X`. */
	formSuffix?: string;
	section: RosterSection;
	isMega: boolean;
	/**
	 * How the entry is obtained, verbatim: `Yes`, `Transfer only`, `Event only`, `No`.
	 * Worth keeping rather than collapsing to a boolean — "Transfer only" is a real caveat
	 * a team-builder wants to see.
	 */
	availability: string;
	/**
	 * Whether the entry is legal. "Transfer only" and "Event only" are legal — Bulbapedia
	 * states outright that Eternal Flower Floette is allowed under the current regulation —
	 * so only an explicit "No", or membership of the untransferable list, disqualifies.
	 */
	isAvailable: boolean;
	/** Game version that introduced the entry, e.g. `1.1.0`. */
	introducedIn?: string;
	/** Caveats Bulbapedia attaches to availability, e.g. "Regular form only". */
	note?: string;
}

/** Headings that open each part of the roster page, in document order. */
const SECTION_HEADINGS: { heading: string; section: RosterSection }[] = [
	{ heading: '==List of Pokémon in Champions==', section: 'species' },
	{ heading: '====Mega Evolutions====', section: 'mega' },
	{ heading: '====Other forms====', section: 'other-form' },
	{ heading: '==Untransferable Pokémon==', section: 'untransferable' },
];

/** Which section a character offset falls in. */
function sectionAt(wikitext: string, offset: number): RosterSection {
	let current: RosterSection = 'species';
	for (const { heading, section } of SECTION_HEADINGS) {
		const index = wikitext.indexOf(heading);
		if (index !== -1 && index < offset) current = section;
	}
	return current;
}

/** One move value Champions changed relative to the mainline games. */
export interface MoveOverride {
	/** Move display name, e.g. `Snap Trap`. */
	move: string;
	type?: string;
	power?: number;
	accuracy?: number;
	effectChance?: number;
	pp?: number;
	/** Flags Champions adds to the move, e.g. `slicing`, `sound`. */
	addsFlags?: string[];
	/** Human-readable description of the change, shown next to the "differs" badge. */
	note: string;
}

/** Strip wiki link and template markup down to the display text. */
function plain(value: string): string {
	return value
		.replace(/\{\{m\|([^}|]+)\}\}/g, '$1')
		.replace(/\{\{a\|([^}|]+)\}\}/g, '$1')
		.replace(/\{\{stat\|([^}|]+)\}\}/g, '$1')
		.replace(/\{\{status\|[^}|]*\|([^}]+)\}\}/g, '$1')
		.replace(/\{\{status\|([^}|]+)\}\}/g, '$1')
		.replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, '$1')
		.replace(/\[\[([^\]]+)\]\]/g, '$1')
		.replace(/<ref[^>]*>.*?<\/ref>/g, '')
		.replace(/<ref[^>]*\/>/g, '')
		.replace(/<br\s*\/?>/gi, ' ')
		.replace(/<!--.*?-->/gs, '')
		.replace(/'{2,}/g, '')
		.trim();
}

/**
 * Parse `{{gdex/Champs|...}}` rows out of the roster page.
 *
 * Two shapes appear. Base forms are positional:
 *   `{{gdex/Champs|0009|Blastoise|1|Water|Yes|1.0.2}}`
 * Megas interleave named parameters among the positional ones:
 *   `{{gdex/Champs|0006|Charizard|2|Fire|Dragon|ig=-Mega X|form=Mega Charizard X|Yes|1.0.2}}`
 * so named parameters are pulled out first and the rest read positionally.
 */
export function parseRoster(wikitext: string): RosterEntry[] {
	const entries: RosterEntry[] = [];

	for (const match of wikitext.matchAll(/\{\{gdex\/Champs\|([^}]*)\}\}/g)) {
		const named: Record<string, string> = {};
		const positional: string[] = [];

		for (const rawField of match[1].split('|')) {
			const field = rawField.trim();
			if (!field) continue;
			const named_ = field.match(/^(\w+)=(.*)$/s);
			if (named_) named[named_[1]] = named_[2].trim();
			else positional.push(field);
		}

		const [rawPokedexNumber, species, typeCountRaw, ...rest] = positional;
		const typeCount = Number(typeCountRaw);
		if (!rawPokedexNumber || !species || !Number.isFinite(typeCount)) continue;

		const types = rest.slice(0, typeCount).map(plain);
		// Whatever follows the types is the availability cell, which sometimes carries a
		// parenthesised caveat such as "Yes<br>(Regular form only)".
		const availability = plain(rest[typeCount] ?? '');
		const note = availability.match(/\(([^)]+)\)/)?.[1];
		const section = sectionAt(wikitext, match.index);

		entries.push({
			pokedexNumber: Number(rawPokedexNumber),
			species: plain(species),
			types,
			...(named['form'] ? { form: plain(named['form']) } : {}),
			...(named['ig'] ? { formSuffix: named['ig'] } : {}),
			section,
			// Section, not parameters: regional forms carry `form=` too, so only position on
			// the page separates "Mega Slowbro" from "Galarian Slowbro".
			isMega: section === 'mega',
			availability: availability.replace(/\s*\(.*\)$/, '').trim(),
			isAvailable: section !== 'untransferable' && !/^no\b/i.test(availability),
			...(rest[typeCount + 1] ? { introducedIn: plain(rest[typeCount + 1]) } : {}),
			...(note ? { note } : {}),
		});
	}

	return entries;
}

/** Base PP values map onto fixed Champions values; a handful of moves override the result. */
const PP_LADDER: Record<number, number> = { 5: 8, 10: 12, 15: 16 };

/**
 * Champions' PP rule: 5 → 8, 10 → 12, 15 → 16, and anything at least 20 → 20.
 *
 * Bulbapedia does not enumerate the per-move PP changes ("due to the sheer volume"), so the
 * rule is applied during derive rather than scraped. Exceptions are listed explicitly on the
 * page and parsed by `parsePpExceptions`.
 */
export function championsPp(mainlinePp: number | null): number | null {
	if (mainlinePp === null) return null;
	if (mainlinePp >= 20) return 20;
	return PP_LADDER[mainlinePp] ?? mainlinePp;
}

/** Moves whose PP does not follow the ladder, e.g. "Beak Blast has 8 PP instead of 16". */
export function parsePpExceptions(wikitext: string): Map<string, number> {
	const exceptions = new Map<string, number>();

	for (const rawLine of wikitext.split('\n')) {
		if (!rawLine.includes('{{m|')) continue;
		const line = plain(rawLine.replace(/^\*+\s*/, ''));
		const match = line.match(/^(.+?)\s+ha(?:ve|s)\s+(\d+)\s+PP\s+instead of\s+\d+/i);
		if (!match) continue;
		const pp = Number(match[2]);
		for (const move of splitMoveList(match[1])) exceptions.set(move, pp);
	}

	return exceptions;
}

/** Split "Baneful Bunker, King's Shield, Protect, and Spiky Shield" into move names. */
function splitMoveList(fragment: string): string[] {
	return plain(fragment)
		.split(/,\s*and\s+|\s+and\s+|,\s*/)
		.map((part) => part.replace(/^(and|the)\s+/i, '').trim())
		// Drop a *trailing* possessive only ("Dire Claw's" → "Dire Claw"). Apostrophes inside
		// a name are left alone, so King's Shield survives intact.
		.map((part) => part.replace(/['’]s$/, ''))
		.filter((part) => part.length > 0 && !/^\d+$/.test(part));
}

/**
 * Parse the "Several moves were modified" bullets on the Pokémon Champions page.
 *
 * The prose is regular enough to parse but not machine-generated, so anything unrecognised
 * is deliberately skipped rather than guessed at: a move we fail to parse keeps its mainline
 * value and is visibly un-flagged, which is a far better failure than a fabricated number.
 */
export function parseMoveOverrides(wikitext: string): MoveOverride[] {
	const merged = new Map<string, MoveOverride>();

	const add = (move: string, patch: Partial<MoveOverride>, note: string) => {
		const existing = merged.get(move);
		if (existing) {
			Object.assign(existing, patch);
			existing.addsFlags = [...(existing.addsFlags ?? []), ...(patch.addsFlags ?? [])];
			existing.note = `${existing.note} ${note}`.trim();
		} else {
			merged.set(move, { move, ...patch, note });
		}
	};

	for (const rawLine of wikitext.split('\n')) {
		if (!rawLine.trimStart().startsWith('*')) continue;
		// Only bullets that reference a move template. The same list style is used for the
		// ability changes just above ("Unseen Fist now deals only 25% damage..."), and those
		// use `{{a|...}}` — without this guard an ability lands in the move table.
		if (!rawLine.includes('{{m|')) continue;

		const line = plain(rawLine.replace(/^\*+\s*/, ''));

		// Flag changes are checked independently rather than as part of the chain below,
		// because a single bullet can both change a number and add a flag — Dire Claw does
		// exactly that, and an if/else chain would silently drop whichever came second.
		// "... are now considered to be slicing moves." / "... is now considered a sound-based move."
		// `[^.]+?` rather than `.+?` so the subject cannot swallow a preceding sentence: in
		// "Dire Claw's ... to 30%. It is also now considered a slicing move." the subject is
		// "It", and a dot-crossing capture would grab the whole first clause instead.
		const flagged = line.match(/(?:^|\. )([^.]+?) (?:is|are) (?:also )?now considered (?:to be )?(?:an? )?([\w-]+?)(?:-based)? moves?/i);
		if (flagged) {
			const flag = flagged[2].toLowerCase();
			// "It is also now considered a slicing move" refers back to the bullet's subject,
			// which is the leading run of capitalised words.
			const subject = /^it$/i.test(flagged[1].trim()) ? line.match(/^([A-Z][\w'’-]*(?: [A-Z][\w'’-]*)*)/)?.[1] : flagged[1];
			for (const move of splitMoveList(subject ?? flagged[1])) add(move, { addsFlags: [flag] }, `Now a ${flag} move.`);
		}

		// "Snap Trap had its type changed from Grass to Steel."
		const typeChange = line.match(/^(.+?) had its type changed from \w+ to (\w+)/i);
		if (typeChange) {
			add(typeChange[1].trim(), { type: typeChange[2] }, `Type changed to ${typeChange[2]}.`);
			continue;
		}

		// "Trop Kick and Psyshield Bash had their base power increased from 70 to 85 and 90, respectively."
		const respectively = line.match(/^(.+?) had (?:its|their) base power increased from \d+ to ([\d, and]+?)(?:,\s*respectively)?\.?$/i);
		if (respectively) {
			const moves = splitMoveList(respectively[1]);
			const powers = respectively[2].match(/\d+/g)?.map(Number) ?? [];
			moves.forEach((move, index) => {
				const power = powers.length === 1 ? powers[0] : powers[index];
				if (power !== undefined) add(move, { power }, `Base power raised to ${power}.`);
			});
			continue;
		}

		// "Bone Rush, Infernal Parade, and Night Daze had their base power increased by 5 each,
		//  totaling 30, 65, and 90, respectively."
		const totalling = line.match(/^(.+?) had (?:its|their) base power increased by \d+ each, totall?ing ([\d, and]+)/i);
		if (totalling) {
			const moves = splitMoveList(totalling[1]);
			const powers = totalling[2].match(/\d+/g)?.map(Number) ?? [];
			moves.forEach((move, index) => {
				if (powers[index] !== undefined) add(move, { power: powers[index] }, `Base power raised to ${powers[index]}.`);
			});
			continue;
		}

		// "Crabhammer and Syrup Bomb had their accuracy increased by 5 each, totaling 95% and 90%."
		const accTotalling = line.match(/^(.+?) had (?:its|their) accuracy increased by \d+ each, totall?ing ([\d%, and]+)/i);
		if (accTotalling) {
			const moves = splitMoveList(accTotalling[1]);
			const values = accTotalling[2].match(/\d+/g)?.map(Number) ?? [];
			moves.forEach((move, index) => {
				if (values[index] !== undefined) add(move, { accuracy: values[index] }, `Accuracy raised to ${values[index]}%.`);
			});
			continue;
		}

		// "Make It Rain had its accuracy reduced from 100% to 95%."
		const accReduced = line.match(/^(.+?) had its accuracy reduced from \d+% to (\d+)%/i);
		if (accReduced) {
			add(accReduced[1].trim(), { accuracy: Number(accReduced[2]) }, `Accuracy lowered to ${accReduced[2]}%.`);
			continue;
		}

		// "Iron Head and Moonblast's secondary effect chances were lowered from 30% to 20% and 10%."
		const effectChances = line.match(/^(.+?)'?s? secondary effect chances? (?:were|was) lowered from \d+% to ([\d%, and]+)/i);
		if (effectChances) {
			const moves = splitMoveList(effectChances[1]);
			const values = effectChances[2].match(/\d+/g)?.map(Number) ?? [];
			moves.forEach((move, index) => {
				const chance = values.length === 1 ? values[0] : values[index];
				if (chance !== undefined) add(move, { effectChance: chance }, `Secondary effect chance lowered to ${chance}%.`);
			});
			continue;
		}

		// "Toxic Thread now lowers Speed by two stages rather than one."
		// "Freeze-Dry can no longer inflict freeze." — note "now" is not always present.
		const behaviour = line.match(/^([A-Z][\w'’-]*(?: [A-Z][\w'’-]*)*) ((?:now )?(?:lowers|reduces|can no longer|deals|resets)[^.]*)\./);
		if (behaviour) {
			add(behaviour[1].trim(), {}, `${capitalise(behaviour[2])}.`);
			continue;
		}

		// "Rage Fist's power now resets if the user is switched out of battle."
		// "Salt Cure's passive damage was halved, dealing 6.25% of target's maximum HP per turn."
		const possessive = line.match(/^([A-Z][\w'’-]*(?: [A-Z][\w'’-]*)*)'s ([^.]+)\./);
		if (possessive && /(damage|power|passive)/i.test(possessive[2])) {
			add(possessive[1].trim(), {}, capitalise(`${possessive[2]}.`));
		}
	}

	return [...merged.values()];
}

function capitalise(text: string): string {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

/** Which regulation the roster page currently describes, and when it lapses. */
export interface RegulationHeader {
	code: string;
	/** ISO date. */
	endsOn: string;
}

/**
 * Read the regulation from the roster page's lead: "Until September 2, 2026, the current
 * roster is Regular Roster M-B."
 *
 * Parsed rather than hard-coded so that rotating to M-C is a re-run of the pipeline instead
 * of a code change — which is the property that makes this whole layer worth having.
 */
export function parseRegulationHeader(wikitext: string): RegulationHeader | null {
	const match = wikitext.match(/Until\s+(\w+\s+\d{1,2},\s+\d{4}),\s+the current roster is\s+(?:Regular Roster\s+)?([\w-]+)/i);
	if (!match) return null;

	const endsOn = new Date(`${match[1]} UTC`);
	if (Number.isNaN(endsOn.getTime())) return null;

	return { code: match[2], endsOn: endsOn.toISOString().slice(0, 10) };
}

/** Convert a display name to the slug convention used by `data/csv` (`Snap Trap` → `snap-trap`). */
export function toSlug(name: string): string {
	return name
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.toLowerCase()
		.replace(/['’.]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

export function parseRosterCounts(wikitext: string): { species: number; megas: number } | null {
	const species = wikitext.match(/(\d+)\s+Pokémon species are available/i);
	const megas = wikitext.match(/as well as\s+(\d+)\s+\[\[Mega Evolution\]\]s/i);
	if (!species || !megas) return null;

	return { species: Number(species[1]), megas: Number(megas[1]) };
}
