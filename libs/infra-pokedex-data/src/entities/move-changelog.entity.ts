import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveChangelog as PrismaMoveChangelog } from '@prisma/client';

@ObjectType()
export class MoveChangelog implements PrismaMoveChangelog {
  @Field(() => Int)
  move_id!: number;

  @Field(() => Int)
  changed_in_version_group_id!: number;

  @Field(() => Int, { nullable: true })
  type_id!: number | null;

  @Field(() => Int, { nullable: true })
  power!: number | null;

  @Field(() => Int, { nullable: true })
  pp!: number | null;

  @Field(() => Int, { nullable: true })
  accuracy!: number | null;

  @Field(() => Int, { nullable: true })
  priority!: number | null;

  @Field(() => Int, { nullable: true })
  target_id!: number | null;

  @Field(() => Int, { nullable: true })
  effect_id!: number | null;

  @Field(() => Int, { nullable: true })
  effect_chance!: number | null;
}
