import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Item } from '@pokemon-center/shared-entities';

@Injectable()
export class ItemService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<Item[]> {
		return this.prisma.item.findMany();
	}

	async findOne(id: number): Promise<Item | null> {
		return this.prisma.item.findUnique({ where: { id } });
	}
}
