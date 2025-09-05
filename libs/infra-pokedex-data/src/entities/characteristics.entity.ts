import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Characteristics as PrismaCharacteristics } from '@prisma/client';

@ObjectType()
export class Characteristics implements PrismaCharacteristics {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  stat_id!: number;

  @Field(() => Int)
  gene_mod_5!: number;
}
