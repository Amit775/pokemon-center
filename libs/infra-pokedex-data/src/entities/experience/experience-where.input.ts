import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { GrowthRatesScalarRelationFilter } from '../growth-rates/growth-rates-scalar-relation-filter.input';

@InputType()
export class ExperienceWhereInput {

    @Field(() => [ExperienceWhereInput], {nullable:true})
    AND?: Array<ExperienceWhereInput>;

    @Field(() => [ExperienceWhereInput], {nullable:true})
    OR?: Array<ExperienceWhereInput>;

    @Field(() => [ExperienceWhereInput], {nullable:true})
    NOT?: Array<ExperienceWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    growth_rate_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    level?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    experience?: IntFilter;

    @Field(() => GrowthRatesScalarRelationFilter, {nullable:true})
    growthRate?: GrowthRatesScalarRelationFilter;
}
