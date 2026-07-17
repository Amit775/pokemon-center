import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExperienceCreateWithoutGrowthRateInput } from './experience-create-without-growth-rate.input';
import { Type } from 'class-transformer';
import { ExperienceCreateOrConnectWithoutGrowthRateInput } from './experience-create-or-connect-without-growth-rate.input';
import { ExperienceUpsertWithWhereUniqueWithoutGrowthRateInput } from './experience-upsert-with-where-unique-without-growth-rate.input';
import { ExperienceCreateManyGrowthRateInputEnvelope } from './experience-create-many-growth-rate-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExperienceWhereUniqueInput } from './experience-where-unique.input';
import { ExperienceUpdateWithWhereUniqueWithoutGrowthRateInput } from './experience-update-with-where-unique-without-growth-rate.input';
import { ExperienceUpdateManyWithWhereWithoutGrowthRateInput } from './experience-update-many-with-where-without-growth-rate.input';
import { ExperienceScalarWhereInput } from './experience-scalar-where.input';

@InputType()
export class ExperienceUncheckedUpdateManyWithoutGrowthRateNestedInput {

    @Field(() => [ExperienceCreateWithoutGrowthRateInput], {nullable:true})
    @Type(() => ExperienceCreateWithoutGrowthRateInput)
    create?: Array<ExperienceCreateWithoutGrowthRateInput>;

    @Field(() => [ExperienceCreateOrConnectWithoutGrowthRateInput], {nullable:true})
    @Type(() => ExperienceCreateOrConnectWithoutGrowthRateInput)
    connectOrCreate?: Array<ExperienceCreateOrConnectWithoutGrowthRateInput>;

    @Field(() => [ExperienceUpsertWithWhereUniqueWithoutGrowthRateInput], {nullable:true})
    @Type(() => ExperienceUpsertWithWhereUniqueWithoutGrowthRateInput)
    upsert?: Array<ExperienceUpsertWithWhereUniqueWithoutGrowthRateInput>;

    @Field(() => ExperienceCreateManyGrowthRateInputEnvelope, {nullable:true})
    @Type(() => ExperienceCreateManyGrowthRateInputEnvelope)
    createMany?: ExperienceCreateManyGrowthRateInputEnvelope;

    @Field(() => [ExperienceWhereUniqueInput], {nullable:true})
    @Type(() => ExperienceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ExperienceWhereUniqueInput, 'growth_rate_id_level'>>;

    @Field(() => [ExperienceWhereUniqueInput], {nullable:true})
    @Type(() => ExperienceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ExperienceWhereUniqueInput, 'growth_rate_id_level'>>;

    @Field(() => [ExperienceWhereUniqueInput], {nullable:true})
    @Type(() => ExperienceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ExperienceWhereUniqueInput, 'growth_rate_id_level'>>;

    @Field(() => [ExperienceWhereUniqueInput], {nullable:true})
    @Type(() => ExperienceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExperienceWhereUniqueInput, 'growth_rate_id_level'>>;

    @Field(() => [ExperienceUpdateWithWhereUniqueWithoutGrowthRateInput], {nullable:true})
    @Type(() => ExperienceUpdateWithWhereUniqueWithoutGrowthRateInput)
    update?: Array<ExperienceUpdateWithWhereUniqueWithoutGrowthRateInput>;

    @Field(() => [ExperienceUpdateManyWithWhereWithoutGrowthRateInput], {nullable:true})
    @Type(() => ExperienceUpdateManyWithWhereWithoutGrowthRateInput)
    updateMany?: Array<ExperienceUpdateManyWithWhereWithoutGrowthRateInput>;

    @Field(() => [ExperienceScalarWhereInput], {nullable:true})
    @Type(() => ExperienceScalarWhereInput)
    deleteMany?: Array<ExperienceScalarWhereInput>;
}
