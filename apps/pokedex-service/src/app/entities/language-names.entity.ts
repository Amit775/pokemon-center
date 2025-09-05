import { Field, Int, ObjectType } from '@nestjs/graphql';
import { LanguageNames as PrismaLanguageNames } from '@prisma/client';

@ObjectType()
export class LanguageNames implements PrismaLanguageNames {
  @Field(() => Int)
  language_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
