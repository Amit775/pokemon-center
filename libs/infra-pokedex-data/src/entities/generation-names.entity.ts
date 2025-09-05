import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GenerationNames as PrismaGenerationNames } from '@prisma/client';

@ObjectType()
export class GenerationNames implements PrismaGenerationNames {
  @Field(() => Int)
  generation_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;
}
