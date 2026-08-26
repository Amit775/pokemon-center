import { IGNORED_FLAGS, moveTags } from './move-tags';

const move = (flags: string[], priority = 0) => ({ flags, priority });

describe('moveTags', () => {
	it('names flags the way Champions does, not the way the dataset does', () => {
		// `ballistics` is the dataset's slug; nobody looking for what Bulletproof blocks
		// searches for that.
		expect(moveTags(move(['ballistics'])).map((t) => t.label)).toEqual(['Ball & Bomb']);
	});

	it('puts priority first, signed, because turn order decides the click', () => {
		const tags = moveTags(move(['contact'], 1));

		expect(tags.map((tag) => tag.label)).toEqual(['Priority +1', 'Contact']);
		expect(tags[0].isPriority).toBe(true);
	});

	it('shows negative priority too', () => {
		expect(moveTags(move([], -6))[0].label).toBe('Priority -6');
	});

	it('says nothing about priority when there is none', () => {
		expect(moveTags(move(['punch']))).toHaveLength(1);
	});

	it('drops the flags that nearly every move carries', () => {
		// 266 of the roster's moves are protect-able and 265 mirror-able. Printing those buries
		// the handful that actually decide an ability interaction.
		expect(moveTags(move(IGNORED_FLAGS as string[]))).toEqual([]);
	});

	it('keeps a stable order regardless of how the flags arrive', () => {
		const one = moveTags(move(['sound', 'contact', 'punch']));
		const other = moveTags(move(['punch', 'sound', 'contact']));

		expect(one.map((t) => t.label)).toEqual(other.map((t) => t.label));
		expect(one.map((t) => t.label)).toEqual(['Contact', 'Punch', 'Sound']);
	});

	it('explains what each tag governs, so the tag answers "which ability"', () => {
		expect(moveTags(move(['ballistics']))[0].title).toContain('Bulletproof');
		expect(moveTags(move(['punch']))[0].title).toContain('Iron Fist');
		expect(moveTags(move(['bite']))[0].title).toContain('Strong Jaw');
	});

	it('ignores an unknown flag rather than inventing a label for it', () => {
		expect(moveTags(move(['some-future-flag']))).toEqual([]);
	});
});
