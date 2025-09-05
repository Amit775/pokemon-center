import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Translations as PrismaTranslations } from '@prisma/client';

@ObjectType()
export class Translations implements PrismaTranslations {
  @Field(() => Int)
  language_id: number;

  @Field(() => String)
  table: string;

  @Field(() => Int)
  id: number;

  @Field(() => String)
  column: string;

  @Field(() => Int)
  source_crc: number;

  @Field(() => String)
  string: string;

}
