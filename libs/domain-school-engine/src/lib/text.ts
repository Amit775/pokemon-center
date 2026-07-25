/** Presentation helpers shared by generators. Slugs are the data's currency; prose is what learners read. */

export const title = (slug: string): string => slug.charAt(0).toUpperCase() + slug.slice(1);

/** `thunder-punch` -> `Thunder Punch`. */
export const humanize = (slug: string): string => slug.split('-').map(title).join(' ');

/** "an Ice-type", "a Fire-type" — the two vowel-initial types are Ice and Electric. */
export const article = (word: string): string => (/^[aeiou]/i.test(word) ? 'an' : 'a');

/** Era caveat appended to explanations so an answer is never silently generation-specific. */
export const eraNote = (versionGroup: string | null): string => (versionGroup ? ` (as of ${versionGroup})` : '');
