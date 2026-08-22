/**
 * Move tags, in Champions' vocabulary.
 *
 * The underlying data carries 21 flag slugs inherited from the mainline dataset, and most of
 * them answer nothing anybody asks mid-battle: 266 moves are `protect`-able and 265 are
 * `mirror`-able, so printing those would bury the handful that matter under a wall of chips
 * every move shares.
 *
 * What is kept is the set that **decides an ability interaction** — the reason to want tags at
 * all. Bulletproof needs to know what is a Ball & Bomb move, Iron Fist what is a punch, Rough
 * Skin what makes contact, Soundproof what is Sound. Each tag carries the abilities it governs
 * so hovering says why it is there.
 *
 * Priority rides along as a tag rather than a column: "+1" beside Aqua Jet is read the same way
 * as "Contact", and turn order is the most time-critical thing on the row.
 */

export interface MoveTag {
	label: string;
	/** What this tag governs — shown on hover. */
	title: string;
	/** Priority is styled apart: it changes turn order rather than ability interactions. */
	isPriority?: boolean;
}

/**
 * Flag slug → how Champions says it, and what cares.
 *
 * Ordered as it renders: the tags that most often decide a click come first.
 */
const FLAG_TAGS: { flag: string; label: string; title: string }[] = [
	{ flag: 'contact', label: 'Contact', title: 'Triggers Rough Skin, Iron Barbs, Static, Flame Body and Poison Point; boosted by Tough Claws' },
	{ flag: 'ballistics', label: 'Ball & Bomb', title: 'Blocked entirely by Bulletproof' },
	{ flag: 'punch', label: 'Punch', title: 'Boosted by Iron Fist' },
	{ flag: 'sound', label: 'Sound', title: 'Blocked by Soundproof; boosted by Punk Rock; bypasses Substitute' },
	{ flag: 'bite', label: 'Bite', title: 'Boosted by Strong Jaw' },
	{ flag: 'pulse', label: 'Pulse', title: 'Boosted by Mega Launcher' },
	{ flag: 'slicing', label: 'Slicing', title: 'Boosted by Sharpness' },
	{ flag: 'wind', label: 'Wind', title: 'Triggers Wind Rider and Wind Power' },
	{ flag: 'powder', label: 'Powder', title: 'Blocked by Overcoat, Safety Goggles, and Grass types' },
	{ flag: 'dance', label: 'Dance', title: 'Copied by Dancer' },
	{ flag: 'heal', label: 'Healing', title: 'Blocked by Heal Block; given priority by Triage' },
	{ flag: 'reflectable', label: 'Reflectable', title: 'Bounced back by Magic Bounce and Magic Guard' },
	{ flag: 'authentic', label: 'Hits through Substitute', title: 'Ignores Substitute, as Infiltrator does' },
	{ flag: 'charge', label: 'Two-turn', title: 'Charges for a turn before it lands' },
	{ flag: 'recharge', label: 'Recharge', title: 'The user loses the following turn' },
];

/**
 * Flags deliberately not shown.
 *
 * Kept as a named list rather than an absence so the omission reads as a decision: these are
 * either near-universal (`protect`, `mirror`, `snatch`) or describe a format Champions does not
 * have (`non-sky-battle`, `distance`, `gravity`).
 */
export const IGNORED_FLAGS: readonly string[] = [
	'protect',
	'mirror',
	'snatch',
	'non-sky-battle',
	'distance',
	'gravity',
	'mental',
	'defrost',
];

/** The tags to show for one move, priority first. */
export function moveTags(move: { flags: readonly string[]; priority: number }): MoveTag[] {
	const tags: MoveTag[] = [];

	if (move.priority !== 0) {
		tags.push({
			label: `Priority ${move.priority > 0 ? '+' : ''}${move.priority}`,
			title: move.priority > 0 ? 'Moves before regular moves' : 'Moves after regular moves',
			isPriority: true,
		});
	}

	for (const tag of FLAG_TAGS) {
		if (move.flags.includes(tag.flag)) tags.push({ label: tag.label, title: tag.title });
	}

	return tags;
}
