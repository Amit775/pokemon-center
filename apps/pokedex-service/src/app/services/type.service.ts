import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Type } from '@prisma/client';

@Injectable()
export class TypeService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<Type[]> {
		return this.prisma.type.findMany();
	}

	async findOne(id: number): Promise<Type | null> {
		return this.prisma.type.findUnique({ where: { id } });
	}
}
