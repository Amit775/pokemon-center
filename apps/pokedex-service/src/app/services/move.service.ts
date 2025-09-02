import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Move } from '@pokemon-center/shared-entities';

@Injectable()
export class MoveService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<Move[]> {
		const moves = await this.prisma.move.findMany({
			include: {
				type: true,
				damageClass: true,
			},
		});

		return moves.map((move) => ({
			...move,
			type: move.type,
			damageClass: move.damageClass,
		}));
	}

	async findOne(id: number): Promise<Move | null> {
		const move = await this.prisma.move.findUnique({
			where: { id },
			include: {
				type: true,
				damageClass: true,
			},
		});

		if (!move) {
			return null;
		}

		return {
			...move,
			type: move.type,
			damageClass: move.damageClass,
		};
	}

	async findByType(typeId: number): Promise<Move[]> {
		const moves = await this.prisma.move.findMany({
			where: { typeId },
			include: {
				type: true,
				damageClass: true,
			},
		});

		return moves.map((move) => ({
			...move,
			type: move.type,
			damageClass: move.damageClass,
		}));
	}

	async findByDamageClass(damageClassId: number): Promise<Move[]> {
		const moves = await this.prisma.move.findMany({
			where: { damageClassId },
			include: {
				type: true,
				damageClass: true,
			},
		});

		return moves.map((move) => ({
			...move,
			type: move.type,
			damageClass: move.damageClass,
		}));
	}
}
