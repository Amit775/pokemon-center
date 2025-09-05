import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemFlingEffects as PrismaItemFlingEffects } from '@prisma/client';

@ObjectType()
export class ItemFlingEffects implements PrismaItemFlingEffects {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;
}
