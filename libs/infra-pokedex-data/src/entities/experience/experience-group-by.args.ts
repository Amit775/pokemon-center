import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ExperienceWhereInput } from './experience-where.input';
import { Type } from 'class-transformer';
import { ExperienceOrderByWithAggregationInput } from './experience-order-by-with-aggregation.input';
import { ExperienceScalarFieldEnum } from './experience-scalar-field.enum';
import { ExperienceScalarWhereWithAggregatesInput } from './experience-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ExperienceCountAggregateInput } from './experience-count-aggregate.input';
import { ExperienceAvgAggregateInput } from './experience-avg-aggregate.input';
import { ExperienceSumAggregateInput } from './experience-sum-aggregate.input';
import { ExperienceMinAggregateInput } from './experience-min-aggregate.input';
import { ExperienceMaxAggregateInput } from './experience-max-aggregate.input';

@ArgsType()
export class ExperienceGroupByArgs {

    @Field(() => ExperienceWhereInput, {nullable:true})
    @Type(() => ExperienceWhereInput)
    where?: Identity<ExperienceWhereInput>;

    @Field(() => [ExperienceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ExperienceOrderByWithAggregationInput>;

    @Field(() => [ExperienceScalarFieldEnum], {nullable:false})
    by!: Array<`${ExperienceScalarFieldEnum}`>;

    @Field(() => ExperienceScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<ExperienceScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ExperienceCountAggregateInput, {nullable:true})
    _count?: Identity<ExperienceCountAggregateInput>;

    @Field(() => ExperienceAvgAggregateInput, {nullable:true})
    _avg?: Identity<ExperienceAvgAggregateInput>;

    @Field(() => ExperienceSumAggregateInput, {nullable:true})
    _sum?: Identity<ExperienceSumAggregateInput>;

    @Field(() => ExperienceMinAggregateInput, {nullable:true})
    _min?: Identity<ExperienceMinAggregateInput>;

    @Field(() => ExperienceMaxAggregateInput, {nullable:true})
    _max?: Identity<ExperienceMaxAggregateInput>;
}
