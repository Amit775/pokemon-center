import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExperienceCreateWithoutGrowthRateInput } from './experience-create-without-growth-rate.input';
import { Type } from 'class-transformer';
import { ExperienceCreateOrConnectWithoutGrowthRateInput } from './experience-create-or-connect-without-growth-rate.input';
import type { Identity } from 'identity-type';
import { ExperienceCreateManyGrowthRateInputEnvelope } from './experience-create-many-growth-rate-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { ExperienceWhereUniqueInput } from './experience-where-unique.input';

@InputType()
export class ExperienceUncheckedCreateNestedManyWithoutGrowthRateInput {

    @Field(() => [ExperienceCreateWithoutGrowthRateInput], {nullable:true})
    @Type(() => ExperienceCreateWithoutGrowthRateInput)
    create?: Array<ExperienceCreateWithoutGrowthRateInput>;

    @Field(() => [ExperienceCreateOrConnectWithoutGrowthRateInput], {nullable:true})
    @Type(() => ExperienceCreateOrConnectWithoutGrowthRateInput)
    connectOrCreate?: Array<ExperienceCreateOrConnectWithoutGrowthRateInput>;

    @Field(() => ExperienceCreateManyGrowthRateInputEnvelope, {nullable:true})
    @Type(() => ExperienceCreateManyGrowthRateInputEnvelope)
    createMany?: Identity<ExperienceCreateManyGrowthRateInputEnvelope>;

    @Field(() => [ExperienceWhereUniqueInput], {nullable:true})
    @Type(() => ExperienceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExperienceWhereUniqueInput, 'growth_rate_id_level'>>;
}
