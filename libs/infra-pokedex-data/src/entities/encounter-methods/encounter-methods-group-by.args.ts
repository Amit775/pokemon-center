import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterMethodsWhereInput } from './encounter-methods-where.input';
import { Type } from 'class-transformer';
import { EncounterMethodsOrderByWithAggregationInput } from './encounter-methods-order-by-with-aggregation.input';
import { EncounterMethodsScalarFieldEnum } from './encounter-methods-scalar-field.enum';
import { EncounterMethodsScalarWhereWithAggregatesInput } from './encounter-methods-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EncounterMethodsCountAggregateInput } from './encounter-methods-count-aggregate.input';
import { EncounterMethodsAvgAggregateInput } from './encounter-methods-avg-aggregate.input';
import { EncounterMethodsSumAggregateInput } from './encounter-methods-sum-aggregate.input';
import { EncounterMethodsMinAggregateInput } from './encounter-methods-min-aggregate.input';
import { EncounterMethodsMaxAggregateInput } from './encounter-methods-max-aggregate.input';

@ArgsType()
export class EncounterMethodsGroupByArgs {

    @Field(() => EncounterMethodsWhereInput, {nullable:true})
    @Type(() => EncounterMethodsWhereInput)
    where?: EncounterMethodsWhereInput;

    @Field(() => [EncounterMethodsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EncounterMethodsOrderByWithAggregationInput>;

    @Field(() => [EncounterMethodsScalarFieldEnum], {nullable:false})
    by!: Array<`${EncounterMethodsScalarFieldEnum}`>;

    @Field(() => EncounterMethodsScalarWhereWithAggregatesInput, {nullable:true})
    having?: EncounterMethodsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EncounterMethodsCountAggregateInput, {nullable:true})
    _count?: EncounterMethodsCountAggregateInput;

    @Field(() => EncounterMethodsAvgAggregateInput, {nullable:true})
    _avg?: EncounterMethodsAvgAggregateInput;

    @Field(() => EncounterMethodsSumAggregateInput, {nullable:true})
    _sum?: EncounterMethodsSumAggregateInput;

    @Field(() => EncounterMethodsMinAggregateInput, {nullable:true})
    _min?: EncounterMethodsMinAggregateInput;

    @Field(() => EncounterMethodsMaxAggregateInput, {nullable:true})
    _max?: EncounterMethodsMaxAggregateInput;
}
