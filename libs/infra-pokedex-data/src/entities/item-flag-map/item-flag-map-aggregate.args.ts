import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlagMapWhereInput } from './item-flag-map-where.input';
import { Type } from 'class-transformer';
import { ItemFlagMapOrderByWithRelationInput } from './item-flag-map-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemFlagMapCountAggregateInput } from './item-flag-map-count-aggregate.input';
import { ItemFlagMapAvgAggregateInput } from './item-flag-map-avg-aggregate.input';
import { ItemFlagMapSumAggregateInput } from './item-flag-map-sum-aggregate.input';
import { ItemFlagMapMinAggregateInput } from './item-flag-map-min-aggregate.input';
import { ItemFlagMapMaxAggregateInput } from './item-flag-map-max-aggregate.input';

@ArgsType()
export class ItemFlagMapAggregateArgs {

    @Field(() => ItemFlagMapWhereInput, {nullable:true})
    @Type(() => ItemFlagMapWhereInput)
    where?: ItemFlagMapWhereInput;

    @Field(() => [ItemFlagMapOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemFlagMapOrderByWithRelationInput>;

    @Field(() => ItemFlagMapWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemFlagMapCountAggregateInput, {nullable:true})
    _count?: ItemFlagMapCountAggregateInput;

    @Field(() => ItemFlagMapAvgAggregateInput, {nullable:true})
    _avg?: ItemFlagMapAvgAggregateInput;

    @Field(() => ItemFlagMapSumAggregateInput, {nullable:true})
    _sum?: ItemFlagMapSumAggregateInput;

    @Field(() => ItemFlagMapMinAggregateInput, {nullable:true})
    _min?: ItemFlagMapMinAggregateInput;

    @Field(() => ItemFlagMapMaxAggregateInput, {nullable:true})
    _max?: ItemFlagMapMaxAggregateInput;
}
