import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ExperienceWhereUniqueInput } from './experience-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ExperienceUpdateWithoutGrowthRateInput } from './experience-update-without-growth-rate.input';
import { ExperienceCreateWithoutGrowthRateInput } from './experience-create-without-growth-rate.input';

@InputType()
export class ExperienceUpsertWithWhereUniqueWithoutGrowthRateInput {

    @Field(() => ExperienceWhereUniqueInput, {nullable:false})
    @Type(() => ExperienceWhereUniqueInput)
    where!: Prisma.AtLeast<ExperienceWhereUniqueInput, 'growth_rate_id_level'>;

    @Field(() => ExperienceUpdateWithoutGrowthRateInput, {nullable:false})
    @Type(() => ExperienceUpdateWithoutGrowthRateInput)
    update!: Identity<ExperienceUpdateWithoutGrowthRateInput>;

    @Field(() => ExperienceCreateWithoutGrowthRateInput, {nullable:false})
    @Type(() => ExperienceCreateWithoutGrowthRateInput)
    create!: Identity<ExperienceCreateWithoutGrowthRateInput>;
}
