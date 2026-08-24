/**
 * Where artwork comes from.
 *
 * Two sources on purpose: a locally mirrored PNG (see `tools/mirror-sprites.mjs`) and the
 * upstream PokéAPI artwork. `pkd-entity-portrait` tries them in that order and falls back to
 * a type-tinted orb, so a partial mirror is never broken and the app still works offline for
 * whatever has been mirrored.
 *
 * The id is the *form* id, not the species number — `10033` is Mega Venusaur, and Champions
 * leans heavily on Mega forms, so passing a species number would silently show the base form's
 * artwork for every Mega.
 */

/** Locally mirrored artwork. Git-ignored; absent entries fall through to the remote source. */
export function localSpriteUrl(formId: number): string {
	return `/sprites/${formId}.png`;
}

/** Upstream official artwork — served with an image content-type, so a plain `<img src>` works. */
export function officialArtworkUrl(formId: number): string {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${formId}.png`;
}

/** The pair `pkd-entity-portrait` expects: try local, then remote. */
export function spriteSources(formId: number): { src: string; fallbackSrc: string } {
	return { src: localSpriteUrl(formId), fallbackSrc: officialArtworkUrl(formId) };
}
