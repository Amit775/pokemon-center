import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveNames as PrismaMoveNames } from '@prisma/client';

@ObjectType()
export class MoveNames implements PrismaMoveNames {
  @Field(() => Int)
  move_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;
}
