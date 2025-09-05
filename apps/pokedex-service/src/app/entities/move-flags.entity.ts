import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveFlags as PrismaMoveFlags } from '@prisma/client';

@ObjectType()
export class MoveFlags implements PrismaMoveFlags {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

}
