import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemFlavorSummaries as PrismaItemFlavorSummaries } from '@prisma/client';

@ObjectType()
export class ItemFlavorSummaries implements PrismaItemFlavorSummaries {
  @Field(() => Int)
  item_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String, { nullable: true })
  flavor_summary!: string | null;
}
