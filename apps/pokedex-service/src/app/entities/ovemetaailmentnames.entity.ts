import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveMetaAilmentNames as PrismaMoveMetaAilmentNames } from '@prisma/client';

@ObjectType()
export class MoveMetaAilmentNames implements PrismaMoveMetaAilmentNames {
  @Field(() => Int)
  move_meta_ailment_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
