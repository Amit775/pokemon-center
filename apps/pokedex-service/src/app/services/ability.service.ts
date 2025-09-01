import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Ability } from '@prisma/client';

@Injectable()
export class AbilityService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<Ability[]> {
		return this.prisma.ability.findMany();
	}

	async findOne(id: number): Promise<Ability | null> {
		return this.prisma.ability.findUnique({ where: { id } });
	}
}
