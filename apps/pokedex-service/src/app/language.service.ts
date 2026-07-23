import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

export const ENGLISH_LANGUAGE_ID = 9;

/** Resolves a language slug (e.g. 'de', 'ja') to its local_language_id, English as fallback. */
@Injectable()
export class LanguageService {
	private slugToId: Map<string, number> | null = null;

	constructor(private readonly prisma: PrismaService) {}

	private async map(): Promise<Map<string, number>> {
		if (!this.slugToId) {
			const langs = await this.prisma.languages.findMany({ select: { id: true, identifier: true } });
			this.slugToId = new Map(langs.map((l) => [l.identifier, l.id]));
		}
		return this.slugToId;
	}

	async idFor(slug: string | null | undefined): Promise<number> {
		if (!slug) return ENGLISH_LANGUAGE_ID;
		return (await this.map()).get(slug) ?? ENGLISH_LANGUAGE_ID;
	}
}
