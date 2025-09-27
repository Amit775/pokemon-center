import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemPocketsWhereInput } from './item-pockets-where.input';
import { Type } from 'class-transformer';
import { ItemPocketsOrderByWithAggregationInput } from './item-pockets-order-by-with-aggregation.input';
import { ItemPocketsScalarFieldEnum } from './item-pockets-scalar-field.enum';
import { ItemPocketsScalarWhereWithAggregatesInput } from './item-pockets-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ItemPocketsCountAggregateInput } from './item-pockets-count-aggregate.input';
import { ItemPocketsAvgAggregateInput } from './item-pockets-avg-aggregate.input';
import { ItemPocketsSumAggregateInput } from './item-pockets-sum-aggregate.input';
import { ItemPocketsMinAggregateInput } from './item-pockets-min-aggregate.input';
import { ItemPocketsMaxAggregateInput } from './item-pockets-max-aggregate.input';

@ArgsType()
export class ItemPocketsGroupByArgs {

    @Field(() => ItemPocketsWhereInput, {nullable:true})
    @Type(() => ItemPocketsWhereInput)
    where?: ItemPocketsWhereInput;

    @Field(() => [ItemPocketsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ItemPocketsOrderByWithAggregationInput>;

    @Field(() => [ItemPocketsScalarFieldEnum], {nullable:false})
    by!: Array<`${ItemPocketsScalarFieldEnum}`>;

    @Field(() => ItemPocketsScalarWhereWithAggregatesInput, {nullable:true})
    having?: ItemPocketsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemPocketsCountAggregateInput, {nullable:true})
    _count?: ItemPocketsCountAggregateInput;

    @Field(() => ItemPocketsAvgAggregateInput, {nullable:true})
    _avg?: ItemPocketsAvgAggregateInput;

    @Field(() => ItemPocketsSumAggregateInput, {nullable:true})
    _sum?: ItemPocketsSumAggregateInput;

    @Field(() => ItemPocketsMinAggregateInput, {nullable:true})
    _min?: ItemPocketsMinAggregateInput;

    @Field(() => ItemPocketsMaxAggregateInput, {nullable:true})
    _max?: ItemPocketsMaxAggregateInput;
}
