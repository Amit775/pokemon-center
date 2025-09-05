import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Experience as PrismaExperience } from '@prisma/client';

@ObjectType()
export class Experience implements PrismaExperience {
  @Field(() => Int)
  growth_rate_id: Int;

  @Field(() => Int)
  level: Int;

  @Field(() => Int)
  experience: Int;

}
