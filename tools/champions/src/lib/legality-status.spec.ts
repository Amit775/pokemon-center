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
