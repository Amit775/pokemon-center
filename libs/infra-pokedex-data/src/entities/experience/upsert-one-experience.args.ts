import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ExperienceWhereUniqueInput } from './experience-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ExperienceCreateInput } from './experience-create.input';
import { ExperienceUpdateInput } from './experience-update.input';

@ArgsType()
export class UpsertOneExperienceArgs {

    @Field(() => ExperienceWhereUniqueInput, {nullable:false})
    @Type(() => ExperienceWhereUniqueInput)
    where!: Prisma.AtLeast<ExperienceWhereUniqueInput, 'growth_rate_id_level'>;

    @Field(() => ExperienceCreateInput, {nullable:false})
    @Type(() => ExperienceCreateInput)
    create!: Identity<ExperienceCreateInput>;

    @Field(() => ExperienceUpdateInput, {nullable:false})
    @Type(() => ExperienceUpdateInput)
    update!: Identity<ExperienceUpdateInput>;
}
