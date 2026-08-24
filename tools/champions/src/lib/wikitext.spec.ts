import { championsPp, parseMoveOverrides, parsePpExceptions, parseRoster, toSlug } from './wikitext';

/**
 * Fixtures are copied verbatim from the Bulbapedia pages the pipeline fetches, so these tests
 * fail when the upstream markup changes shape — which is exactly when we want to hear about
 * it, rather than after a silently empty roster reaches the database.
 */

/**
 * The section headings matter: Megas and regional forms both carry a `form=` parameter, so
 * only position on the page separates "Mega Slowbro" from "Galarian Slowbro". The fixture
 * therefore reproduces the page's heading structure, not just its rows.
 */
const ROSTER_FIXTURE = `
==List of Pokémon in Champions==
{{gdexh/Champs}}
{{gdex/Champs|0003|Venusaur|2|Grass|Poison|Yes|1.0.2}}
{{gdex/Champs|0009|Blastoise|1|Water|Yes|1.0.2}}
{{gdex/Champs|0025|Pikachu|1|Electric|Yes<br>(Regular form only)|1.0.2}}
===Forms===
====Mega Evolutions====
{{gdex/Champs|0003|Venusaur|2|Grass|Poison|ig=-Mega|form=Mega Venusaur|Yes|1.0.2}}
{{gdex/Champs|0006|Charizard|2|Fire|Dragon|ig=-Mega X|form=Mega Charizard X|Yes|1.0.2}}
{{gdex/Champs|0026|Raichu|1|Electric|ig=-Mega X|form=Mega Raichu X|Yes|1.1.0}}
{{gdex/Champs|0036|Clefable|2|Fairy|Flying|ig=-Mega|form=Mega Clefable|Yes|1.0.2}}
====Other forms====
{{gdex/Champs|0026|Raichu|2|Electric|Psychic|ig=-Alola|form=Alolan Form|Yes|1.0.2}}
{{gdex/Champs|0670|Floette|1|Fairy|ig=-Eternal|form=Eternal Flower|Transfer only|1.0.2}}
==Untransferable Pokémon==
{{gdex/Champs|0923|Pawmot|2|Electric|Fighting|No|1.0.2}}
`;

const entries = () => parseRoster(ROSTER_FIXTURE);
const megaEntries = () => entries().filter((e) => e.isMega);

const CHANGES_FIXTURE = `
* Some Abilities were modified:
** {{a|Healer}} now triggers 50% of the time instead of 30%.
** {{a|Unseen Fist}} now deals only 25% damage on protecting targets instead of 100%.
* Several moves were modified:
** {{m|Snap Trap}} had its type changed from Grass to Steel.
** {{m|Toxic Thread}} now lowers Speed by two stages rather than one.
** {{m|Trop Kick}} and {{m|Psyshield Bash}} had their base power increased from 70 to 85 and 90, respectively.
** {{m|Apple Acid}}, {{m|Fire Lash}}, {{m|Grav Apple}}, and {{m|Spirit Shackle}} had their base power increased from 80 to 90.
** {{m|First Impression}} had its base power increased from 90 to 100.
** {{m|Beak Blast}} and {{m|Mountain Gale}} had their base power increased from 100 to 120.
** {{m|Bone Rush}}, {{m|Infernal Parade}}, and {{m|Night Daze}} had their base power increased by 5 each, totaling 30, 65, and 90, respectively.
** {{m|Crabhammer}} and {{m|Syrup Bomb}} had their accuracy increased by 5 each, totaling 95% and 90%, respectively.
** {{m|Make It Rain}} had its accuracy reduced from 100% to 95%. It now reduces the user's {{stat|Sp. Atk}} by two stages, instead of one.
** {{m|Iron Head}} and {{m|Moonblast}}'s secondary effect chances were lowered from 30% to 20% and 10%, respectively.
** {{m|Dire Claw}}'s secondary effect chance was lowered from 50% to 30%. It is also now considered a [[slicing move]].
** {{m|Crush Claw}}, {{m|Dragon Claw}}, and {{m|Shadow Claw}} are now considered to be slicing moves.
** {{m|Dragon Cheer}} is now considered a [[sound-based move]].
** {{m|Freeze-Dry}} can no longer inflict {{status|freeze}}.
** {{m|Rage Fist}}'s power now resets if the user is switched out of battle.
** {{m|Baneful Bunker}}, {{m|King's Shield}}, {{m|Protect}}, and {{m|Spiky Shield}} have 8 PP instead of 12, matching {{m|Detect}}.
** {{m|Beak Blast}} has 8 PP instead of 16.
** {{m|Night Slash}} has 20 PP instead of 16.
`;

const find = (overrides: ReturnType<typeof parseMoveOverrides>, move: string) => overrides.find((o) => o.move === move);

const byForm = (form: string) => entries().find((e) => e.form === form);

describe('parseRoster', () => {
	it('reads base forms with their Champions typing', () => {
		const species = entries().filter((e) => e.section === 'species');

		expect(species).toHaveLength(3);
		expect(species[0]).toMatchObject({ dexNumber: 3, species: 'Venusaur', types: ['Grass', 'Poison'], isMega: false });
		expect(species[1]).toMatchObject({ dexNumber: 9, species: 'Blastoise', types: ['Water'], isMega: false });
	});

	it('keeps availability caveats instead of dropping them', () => {
		// Pikachu is legal in its regular form only — a caveat that changes what is legal.
		expect(entries()[2]).toMatchObject({ species: 'Pikachu', note: 'Regular form only' });
	});

	it('reads Mega entries despite named parameters sitting among the positional ones', () => {
		const megas = megaEntries();

		expect(megas).toHaveLength(4);
		expect(megas[1]).toMatchObject({ species: 'Charizard', form: 'Mega Charizard X', types: ['Fire', 'Dragon'] });
	});

	it("records a Mega's Champions typing, which can differ from the mainline", () => {
		// Mega Clefable is Fairy/Flying here — reading this from mainline data would be wrong.
		expect(byForm('Mega Clefable')).toMatchObject({ types: ['Fairy', 'Flying'] });
	});

	it('records the version that introduced an entry', () => {
		expect(byForm('Mega Raichu X')).toMatchObject({ introducedIn: '1.1.0' });
	});

	it('separates Megas from regional forms by section, not by parameters', () => {
		// Both carry `form=` and `ig=`; only their position on the page tells them apart.
		expect(byForm('Alolan Form')).toMatchObject({ section: 'other-form', isMega: false, formSuffix: '-Alola' });
		expect(byForm('Mega Venusaur')).toMatchObject({ section: 'mega', isMega: true });
	});

	it('treats transfer-only entries as legal', () => {
		// Bulbapedia states outright that Eternal Flower Floette is allowed this regulation.
		expect(byForm('Eternal Flower')).toMatchObject({ availability: 'Transfer only', isAvailable: true });
	});

	it('excludes the untransferable list', () => {
		expect(entries().find((e) => e.species === 'Pawmot')).toMatchObject({ section: 'untransferable', isAvailable: false });
	});
});

describe('parseMoveOverrides', () => {
	const overrides = parseMoveOverrides(CHANGES_FIXTURE);

	it('reads a type change', () => {
		expect(find(overrides, 'Snap Trap')).toMatchObject({ type: 'Steel' });
	});

	it('distributes "respectively" power changes across the listed moves', () => {
		expect(find(overrides, 'Trop Kick')).toMatchObject({ power: 85 });
		expect(find(overrides, 'Psyshield Bash')).toMatchObject({ power: 90 });
	});

	it('applies a single power value to every move in the list', () => {
		for (const move of ['Apple Acid', 'Fire Lash', 'Grav Apple', 'Spirit Shackle']) {
			expect(find(overrides, move)).toMatchObject({ power: 90 });
		}
	});

	it('reads the headline power buffs', () => {
		expect(find(overrides, 'First Impression')).toMatchObject({ power: 100 });
		expect(find(overrides, 'Beak Blast')).toMatchObject({ power: 120 });
		expect(find(overrides, 'Mountain Gale')).toMatchObject({ power: 120 });
	});

	it('reads "increased by N each, totaling ..." as absolute values', () => {
		expect(find(overrides, 'Bone Rush')).toMatchObject({ power: 30 });
		expect(find(overrides, 'Night Daze')).toMatchObject({ power: 90 });
	});

	it('reads accuracy changes in both directions', () => {
		expect(find(overrides, 'Crabhammer')).toMatchObject({ accuracy: 95 });
		expect(find(overrides, 'Syrup Bomb')).toMatchObject({ accuracy: 90 });
		expect(find(overrides, 'Make It Rain')).toMatchObject({ accuracy: 95 });
	});

	it('distributes secondary effect chances', () => {
		expect(find(overrides, 'Iron Head')).toMatchObject({ effectChance: 20 });
		expect(find(overrides, 'Moonblast')).toMatchObject({ effectChance: 10 });
	});

	it('reads a move that changed chance and gained a flag in one bullet', () => {
		expect(find(overrides, 'Dire Claw')).toMatchObject({ effectChance: 30, addsFlags: ['slicing'] });
	});

	it('adds move flags', () => {
		for (const move of ['Crush Claw', 'Dragon Claw', 'Shadow Claw']) {
			expect(find(overrides, move)?.addsFlags).toContain('slicing');
		}
		expect(find(overrides, 'Dragon Cheer')?.addsFlags).toContain('sound');
	});

	it('records behavioural changes that carry no numeric value', () => {
		expect(find(overrides, 'Toxic Thread')?.note).toMatch(/lowers Speed by two stages/i);
		expect(find(overrides, 'Freeze-Dry')?.note).toMatch(/can no longer inflict/i);
		expect(find(overrides, 'Rage Fist')?.note).toMatch(/resets/i);
	});

	it('strips wiki markup out of every move name', () => {
		expect(overrides.every((o) => !/[{}[\]|]/.test(o.move))).toBe(true);
	});

	it('ignores ability changes, which use the same bullet style', () => {
		// "Unseen Fist" and "Healer" are Abilities; landing them in the move table would
		// produce moves that do not exist.
		expect(find(overrides, 'Unseen Fist')).toBeUndefined();
		expect(find(overrides, 'Healer')).toBeUndefined();
	});
});

describe('championsPp', () => {
	it('maps mainline PP onto the Champions ladder', () => {
		expect(championsPp(5)).toBe(8);
		expect(championsPp(10)).toBe(12);
		expect(championsPp(15)).toBe(16);
	});

	it('caps anything at or above 20', () => {
		expect(championsPp(20)).toBe(20);
		expect(championsPp(40)).toBe(20);
	});

	it('passes through null for moves with no PP', () => {
		expect(championsPp(null)).toBeNull();
	});
});

describe('parsePpExceptions', () => {
	const exceptions = parsePpExceptions(CHANGES_FIXTURE);

	it('reads a list of moves sharing one exception', () => {
		for (const move of ['Baneful Bunker', "King's Shield", 'Protect', 'Spiky Shield']) {
			expect(exceptions.get(move)).toBe(8);
		}
	});

	it('reads single-move exceptions in both directions', () => {
		expect(exceptions.get('Beak Blast')).toBe(8);
		expect(exceptions.get('Night Slash')).toBe(20);
	});
});

describe('toSlug', () => {
	it('matches the slug convention used by data/csv', () => {
		expect(toSlug('Snap Trap')).toBe('snap-trap');
		expect(toSlug("King's Shield")).toBe('kings-shield');
		expect(toSlug('Freeze-Dry')).toBe('freeze-dry');
		expect(toSlug('Mega Charizard X')).toBe('mega-charizard-x');
		expect(toSlug('Mr. Rime')).toBe('mr-rime');
	});
});
