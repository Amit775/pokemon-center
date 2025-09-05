import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GenerationNames as PrismaGenerationNames } from '@prisma/client';

@ObjectType()
export class GenerationNames implements PrismaGenerationNames {
  @Field(() => Int)
  generation_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
