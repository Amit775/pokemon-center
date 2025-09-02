import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Type } from '@pokemon-center/shared-entities';

@Injectable()
export class TypeService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<Type[]> {
		return this.prisma.type.findMany({
			include: {
				moves: {
					include: {
						type: true,
						damageClass: true,
					},
				},
			},
		});
	}

	async findOne(id: number): Promise<Type | null> {
		return this.prisma.type.findUnique({
			where: { id },
			include: {
				moves: {
					include: {
						type: true,
						damageClass: true,
					},
				},
			},
		});
	}
}
