import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionValuesWhereInput } from './encounter-condition-values-where.input';
import { Type } from 'class-transformer';
import { EncounterConditionValuesOrderByWithAggregationInput } from './encounter-condition-values-order-by-with-aggregation.input';
import { EncounterConditionValuesScalarFieldEnum } from './encounter-condition-values-scalar-field.enum';
import { EncounterConditionValuesScalarWhereWithAggregatesInput } from './encounter-condition-values-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EncounterConditionValuesCountAggregateInput } from './encounter-condition-values-count-aggregate.input';
import { EncounterConditionValuesAvgAggregateInput } from './encounter-condition-values-avg-aggregate.input';
import { EncounterConditionValuesSumAggregateInput } from './encounter-condition-values-sum-aggregate.input';
import { EncounterConditionValuesMinAggregateInput } from './encounter-condition-values-min-aggregate.input';
import { EncounterConditionValuesMaxAggregateInput } from './encounter-condition-values-max-aggregate.input';

@ArgsType()
export class EncounterConditionValuesGroupByArgs {

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    @Type(() => EncounterConditionValuesWhereInput)
    where?: EncounterConditionValuesWhereInput;

    @Field(() => [EncounterConditionValuesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EncounterConditionValuesOrderByWithAggregationInput>;

    @Field(() => [EncounterConditionValuesScalarFieldEnum], {nullable:false})
    by!: Array<`${EncounterConditionValuesScalarFieldEnum}`>;

    @Field(() => EncounterConditionValuesScalarWhereWithAggregatesInput, {nullable:true})
    having?: EncounterConditionValuesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EncounterConditionValuesCountAggregateInput, {nullable:true})
    _count?: EncounterConditionValuesCountAggregateInput;

    @Field(() => EncounterConditionValuesAvgAggregateInput, {nullable:true})
    _avg?: EncounterConditionValuesAvgAggregateInput;

    @Field(() => EncounterConditionValuesSumAggregateInput, {nullable:true})
    _sum?: EncounterConditionValuesSumAggregateInput;

    @Field(() => EncounterConditionValuesMinAggregateInput, {nullable:true})
    _min?: EncounterConditionValuesMinAggregateInput;

    @Field(() => EncounterConditionValuesMaxAggregateInput, {nullable:true})
    _max?: EncounterConditionValuesMaxAggregateInput;
}
