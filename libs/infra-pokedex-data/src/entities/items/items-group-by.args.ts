import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { ItemsOrderByWithAggregationInput } from './items-order-by-with-aggregation.input';
import { ItemsScalarFieldEnum } from './items-scalar-field.enum';
import { ItemsScalarWhereWithAggregatesInput } from './items-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ItemsCountAggregateInput } from './items-count-aggregate.input';
import { ItemsAvgAggregateInput } from './items-avg-aggregate.input';
import { ItemsSumAggregateInput } from './items-sum-aggregate.input';
import { ItemsMinAggregateInput } from './items-min-aggregate.input';
import { ItemsMaxAggregateInput } from './items-max-aggregate.input';

@ArgsType()
export class ItemsGroupByArgs {

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;

    @Field(() => [ItemsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ItemsOrderByWithAggregationInput>;

    @Field(() => [ItemsScalarFieldEnum], {nullable:false})
    by!: Array<`${ItemsScalarFieldEnum}`>;

    @Field(() => ItemsScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<ItemsScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemsCountAggregateInput, {nullable:true})
    _count?: Identity<ItemsCountAggregateInput>;

    @Field(() => ItemsAvgAggregateInput, {nullable:true})
    _avg?: Identity<ItemsAvgAggregateInput>;

    @Field(() => ItemsSumAggregateInput, {nullable:true})
    _sum?: Identity<ItemsSumAggregateInput>;

    @Field(() => ItemsMinAggregateInput, {nullable:true})
    _min?: Identity<ItemsMinAggregateInput>;

    @Field(() => ItemsMaxAggregateInput, {nullable:true})
    _max?: Identity<ItemsMaxAggregateInput>;
}
