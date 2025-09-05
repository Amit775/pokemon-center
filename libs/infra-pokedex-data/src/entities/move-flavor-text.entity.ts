import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveFlavorText as PrismaMoveFlavorText } from '@prisma/client';

@ObjectType()
export class MoveFlavorText implements PrismaMoveFlavorText {
  @Field(() => Int)
  move_id!: number;

  @Field(() => Int)
  version_group_id!: number;

  @Field(() => Int)
  language_id!: number;

  @Field(() => String)
  flavor_text!: string;
}
