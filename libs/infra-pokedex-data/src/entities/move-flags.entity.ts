import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveFlags as PrismaMoveFlags } from '@prisma/client';

@ObjectType()
export class MoveFlags implements PrismaMoveFlags {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;
}
