import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ExperienceUpdateInput } from './experience-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { ExperienceWhereUniqueInput } from './experience-where-unique.input';

@ArgsType()
export class UpdateOneExperienceArgs {

    @Field(() => ExperienceUpdateInput, {nullable:false})
    @Type(() => ExperienceUpdateInput)
    data!: Identity<ExperienceUpdateInput>;

    @Field(() => ExperienceWhereUniqueInput, {nullable:false})
    @Type(() => ExperienceWhereUniqueInput)
    where!: Prisma.AtLeast<ExperienceWhereUniqueInput, 'growth_rate_id_level'>;
}
