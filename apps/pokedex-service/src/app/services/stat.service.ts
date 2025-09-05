import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Stat } from '@pokemon-center/shared-entities';

@Injectable()
export class StatService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<Stat[]> {
		return this.prisma.stat.findMany();
	}

	async findOne(id: number): Promise<Stat | null> {
		return this.prisma.stat.findUnique({ where: { id } });
	}
}
