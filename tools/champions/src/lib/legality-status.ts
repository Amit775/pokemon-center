export type LegalityStatus = 'LEGAL' | 'TRANSFER_ONLY' | 'EVENT_ONLY' | 'RESTRICTED';

export function toLegalityStatus(availability: string): LegalityStatus {
	const value = availability.trim().toLowerCase();
	if (value.startsWith('transfer')) return 'TRANSFER_ONLY';
	if (value.startsWith('event')) return 'EVENT_ONLY';
	if (value.startsWith('yes')) return 'LEGAL';
	return 'RESTRICTED';
}
