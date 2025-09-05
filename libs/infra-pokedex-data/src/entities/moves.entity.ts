import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Moves as PrismaMoves } from '@prisma/client';

@ObjectType()
export class Moves implements PrismaMoves {
	@Field(() => Int)
	id!: number;

	@Field(() => String)
	identifier!: string;

	@Field(() => Int)
	generation_id!: number;

	@Field(() => Int)
	type_id!: number;

	@Field(() => Int, { nullable: true })
	power!: number | null;

	@Field(() => Int, { nullable: true })
	pp!: number | null;

	@Field(() => Int, { nullable: true })
	accuracy!: number | null;

	@Field(() => Int)
	priority!: number;

	@Field(() => Int)
	target_id!: number;

	@Field(() => Int)
	damage_class_id!: number;

	@Field(() => Int)
	effect_id!: number;

	@Field(() => Int, { nullable: true })
	effect_chance!: number | null;

	@Field(() => Int, { nullable: true })
	contest_type_id!: number | null;

	@Field(() => Int, { nullable: true })
	contest_effect_id!: number | null;

	@Field(() => Int, { nullable: true })
	super_contest_effect_id!: number | null;
}
