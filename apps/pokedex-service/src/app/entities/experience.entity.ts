import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Experience as PrismaExperience } from '@prisma/client';

@ObjectType()
export class Experience implements PrismaExperience {
  @Field(() => Int)
  growth_rate_id: number;

  @Field(() => Int)
  level: number;

  @Field(() => Int)
  experience: number;

}
