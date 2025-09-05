import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemFlags as PrismaItemFlags } from '@prisma/client';

@ObjectType()
export class ItemFlags implements PrismaItemFlags {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

}
