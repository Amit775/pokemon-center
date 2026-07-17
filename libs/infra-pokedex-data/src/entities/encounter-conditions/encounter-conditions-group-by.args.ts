import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionsWhereInput } from './encounter-conditions-where.input';
import { Type } from 'class-transformer';
import { EncounterConditionsOrderByWithAggregationInput } from './encounter-conditions-order-by-with-aggregation.input';
import { EncounterConditionsScalarFieldEnum } from './encounter-conditions-scalar-field.enum';
import { EncounterConditionsScalarWhereWithAggregatesInput } from './encounter-conditions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EncounterConditionsCountAggregateInput } from './encounter-conditions-count-aggregate.input';
import { EncounterConditionsAvgAggregateInput } from './encounter-conditions-avg-aggregate.input';
import { EncounterConditionsSumAggregateInput } from './encounter-conditions-sum-aggregate.input';
import { EncounterConditionsMinAggregateInput } from './encounter-conditions-min-aggregate.input';
import { EncounterConditionsMaxAggregateInput } from './encounter-conditions-max-aggregate.input';

@ArgsType()
export class EncounterConditionsGroupByArgs {

    @Field(() => EncounterConditionsWhereInput, {nullable:true})
    @Type(() => EncounterConditionsWhereInput)
    where?: Identity<EncounterConditionsWhereInput>;

    @Field(() => [EncounterConditionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EncounterConditionsOrderByWithAggregationInput>;

    @Field(() => [EncounterConditionsScalarFieldEnum], {nullable:false})
    by!: Array<`${EncounterConditionsScalarFieldEnum}`>;

    @Field(() => EncounterConditionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<EncounterConditionsScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EncounterConditionsCountAggregateInput, {nullable:true})
    _count?: Identity<EncounterConditionsCountAggregateInput>;

    @Field(() => EncounterConditionsAvgAggregateInput, {nullable:true})
    _avg?: Identity<EncounterConditionsAvgAggregateInput>;

    @Field(() => EncounterConditionsSumAggregateInput, {nullable:true})
    _sum?: Identity<EncounterConditionsSumAggregateInput>;

    @Field(() => EncounterConditionsMinAggregateInput, {nullable:true})
    _min?: Identity<EncounterConditionsMinAggregateInput>;

    @Field(() => EncounterConditionsMaxAggregateInput, {nullable:true})
    _max?: Identity<EncounterConditionsMaxAggregateInput>;
}
