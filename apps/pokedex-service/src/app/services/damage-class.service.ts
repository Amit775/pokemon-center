import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { DamageClass } from '@pokemon-center/shared-entities';

@Injectable()
export class DamageClassService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<DamageClass[]> {
		return this.prisma.damageClass.findMany();
	}

	async findOne(id: number): Promise<DamageClass | null> {
		return this.prisma.damageClass.findUnique({ where: { id } });
	}
}
