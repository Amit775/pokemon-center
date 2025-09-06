import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveMetaAilments as PrismaMoveMetaAilments } from '@prisma/client';

@ObjectType()
export class MoveMetaAilments implements PrismaMoveMetaAilments {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;
}
