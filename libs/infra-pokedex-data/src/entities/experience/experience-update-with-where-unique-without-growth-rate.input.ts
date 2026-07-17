import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExperienceWhereUniqueInput } from './experience-where-unique.input';
import { Type } from 'class-transformer';
import { ExperienceUpdateWithoutGrowthRateInput } from './experience-update-without-growth-rate.input';

@InputType()
export class ExperienceUpdateWithWhereUniqueWithoutGrowthRateInput {

    @Field(() => ExperienceWhereUniqueInput, {nullable:false})
    @Type(() => ExperienceWhereUniqueInput)
    where!: Prisma.AtLeast<ExperienceWhereUniqueInput, 'growth_rate_id_level'>;

    @Field(() => ExperienceUpdateWithoutGrowthRateInput, {nullable:false})
    @Type(() => ExperienceUpdateWithoutGrowthRateInput)
    data!: ExperienceUpdateWithoutGrowthRateInput;
}
