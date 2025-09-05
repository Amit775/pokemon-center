import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveMetaCategoryProse as PrismaMoveMetaCategoryProse } from '@prisma/client';

@ObjectType()
export class MoveMetaCategoryProse implements PrismaMoveMetaCategoryProse {
  @Field(() => Int)
  move_meta_category_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  description!: string;
}
