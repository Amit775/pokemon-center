import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExperienceGrowth_rate_idLevelCompoundUniqueInput } from './experience-growth-rate-id-level-compound-unique.input';
import { ExperienceWhereInput } from './experience-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { GrowthRatesScalarRelationFilter } from '../growth-rates/growth-rates-scalar-relation-filter.input';

@InputType()
export class ExperienceWhereUniqueInput {

    @Field(() => ExperienceGrowth_rate_idLevelCompoundUniqueInput, {nullable:true})
    growth_rate_id_level?: ExperienceGrowth_rate_idLevelCompoundUniqueInput;

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
