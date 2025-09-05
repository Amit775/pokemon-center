import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemFlags as PrismaItemFlags } from '@prisma/client';

@ObjectType()
export class ItemFlags implements PrismaItemFlags {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;
}
