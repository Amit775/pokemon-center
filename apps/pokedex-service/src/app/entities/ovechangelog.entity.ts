import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveChangelog as PrismaMoveChangelog } from '@prisma/client';

@ObjectType()
export class MoveChangelog implements PrismaMoveChangelog {
  @Field(() => Int)
  move_id: Int;

  @Field(() => Int)
  changed_in_version_group_id: Int;

  @Field(() => Int, { nullable: true })
  type_id: Int;

  @Field(() => Int, { nullable: true })
  power: Int;

  @Field(() => Int, { nullable: true })
  pp: Int;

  @Field(() => Int, { nullable: true })
  accuracy: Int;

  @Field(() => Int, { nullable: true })
  priority: Int;

  @Field(() => Int, { nullable: true })
  target_id: Int;

  @Field(() => Int, { nullable: true })
  effect_id: Int;

  @Field(() => Int, { nullable: true })
  effect_chance: Int;

}
