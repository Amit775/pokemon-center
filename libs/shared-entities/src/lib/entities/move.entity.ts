import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Move as PrismaMove } from '@prisma/client';
import { Type } from './type.entity';
import { DamageClass } from './damage-class.entity';

@ObjectType()
export class Move implements PrismaMove {
	@Field(() => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	slug: string;

	@Field(() => Int, { nullable: true })
	power: number | null;

	@Field(() => Int, { nullable: true })
	accuracy: number | null;

	@Field(() => Int, { nullable: true })
	pp: number | null;

	@Field(() => Int)
	priority: number;

	@Field(() => Int)
	typeId: number;

	@Field(() => Int)
	damageClassId: number;

	@Field(() => Type)
	type: Type;

	@Field(() => DamageClass)
	damageClass: DamageClass;
}
