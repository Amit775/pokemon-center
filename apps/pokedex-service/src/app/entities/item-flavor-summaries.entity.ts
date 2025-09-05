import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemFlavorSummaries as PrismaItemFlavorSummaries } from '@prisma/client';

@ObjectType()
export class ItemFlavorSummaries implements PrismaItemFlavorSummaries {
  @Field(() => Int)
  item_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field(, { nullable: true })
  flavor_summary: String;

}
