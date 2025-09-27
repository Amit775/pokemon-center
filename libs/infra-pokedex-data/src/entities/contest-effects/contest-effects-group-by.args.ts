import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestEffectsWhereInput } from './contest-effects-where.input';
import { Type } from 'class-transformer';
import { ContestEffectsOrderByWithAggregationInput } from './contest-effects-order-by-with-aggregation.input';
import { ContestEffectsScalarFieldEnum } from './contest-effects-scalar-field.enum';
import { ContestEffectsScalarWhereWithAggregatesInput } from './contest-effects-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ContestEffectsCountAggregateInput } from './contest-effects-count-aggregate.input';
import { ContestEffectsAvgAggregateInput } from './contest-effects-avg-aggregate.input';
import { ContestEffectsSumAggregateInput } from './contest-effects-sum-aggregate.input';
import { ContestEffectsMinAggregateInput } from './contest-effects-min-aggregate.input';
import { ContestEffectsMaxAggregateInput } from './contest-effects-max-aggregate.input';

@ArgsType()
export class ContestEffectsGroupByArgs {

    @Field(() => ContestEffectsWhereInput, {nullable:true})
    @Type(() => ContestEffectsWhereInput)
    where?: ContestEffectsWhereInput;

    @Field(() => [ContestEffectsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ContestEffectsOrderByWithAggregationInput>;

    @Field(() => [ContestEffectsScalarFieldEnum], {nullable:false})
    by!: Array<`${ContestEffectsScalarFieldEnum}`>;

    @Field(() => ContestEffectsScalarWhereWithAggregatesInput, {nullable:true})
    having?: ContestEffectsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ContestEffectsCountAggregateInput, {nullable:true})
    _count?: ContestEffectsCountAggregateInput;

    @Field(() => ContestEffectsAvgAggregateInput, {nullable:true})
    _avg?: ContestEffectsAvgAggregateInput;

    @Field(() => ContestEffectsSumAggregateInput, {nullable:true})
    _sum?: ContestEffectsSumAggregateInput;

    @Field(() => ContestEffectsMinAggregateInput, {nullable:true})
    _min?: ContestEffectsMinAggregateInput;

    @Field(() => ContestEffectsMaxAggregateInput, {nullable:true})
    _max?: ContestEffectsMaxAggregateInput;
}
