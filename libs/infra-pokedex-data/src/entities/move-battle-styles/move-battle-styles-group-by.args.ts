import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveBattleStylesWhereInput } from './move-battle-styles-where.input';
import { Type } from 'class-transformer';
import { MoveBattleStylesOrderByWithAggregationInput } from './move-battle-styles-order-by-with-aggregation.input';
import { MoveBattleStylesScalarFieldEnum } from './move-battle-styles-scalar-field.enum';
import { MoveBattleStylesScalarWhereWithAggregatesInput } from './move-battle-styles-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MoveBattleStylesCountAggregateInput } from './move-battle-styles-count-aggregate.input';
import { MoveBattleStylesAvgAggregateInput } from './move-battle-styles-avg-aggregate.input';
import { MoveBattleStylesSumAggregateInput } from './move-battle-styles-sum-aggregate.input';
import { MoveBattleStylesMinAggregateInput } from './move-battle-styles-min-aggregate.input';
import { MoveBattleStylesMaxAggregateInput } from './move-battle-styles-max-aggregate.input';

@ArgsType()
export class MoveBattleStylesGroupByArgs {

    @Field(() => MoveBattleStylesWhereInput, {nullable:true})
    @Type(() => MoveBattleStylesWhereInput)
    where?: MoveBattleStylesWhereInput;

    @Field(() => [MoveBattleStylesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MoveBattleStylesOrderByWithAggregationInput>;

    @Field(() => [MoveBattleStylesScalarFieldEnum], {nullable:false})
    by!: Array<`${MoveBattleStylesScalarFieldEnum}`>;

    @Field(() => MoveBattleStylesScalarWhereWithAggregatesInput, {nullable:true})
    having?: MoveBattleStylesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoveBattleStylesCountAggregateInput, {nullable:true})
    _count?: MoveBattleStylesCountAggregateInput;

    @Field(() => MoveBattleStylesAvgAggregateInput, {nullable:true})
    _avg?: MoveBattleStylesAvgAggregateInput;

    @Field(() => MoveBattleStylesSumAggregateInput, {nullable:true})
    _sum?: MoveBattleStylesSumAggregateInput;

    @Field(() => MoveBattleStylesMinAggregateInput, {nullable:true})
    _min?: MoveBattleStylesMinAggregateInput;

    @Field(() => MoveBattleStylesMaxAggregateInput, {nullable:true})
    _max?: MoveBattleStylesMaxAggregateInput;
}
