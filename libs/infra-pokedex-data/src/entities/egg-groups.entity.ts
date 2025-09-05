import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EggGroups as PrismaEggGroups } from '@prisma/client';

@ObjectType()
export class EggGroups implements PrismaEggGroups {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;
}
