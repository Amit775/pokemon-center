import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlagsWhereInput } from './item-flags-where.input';
import { Type } from 'class-transformer';
import { ItemFlagsOrderByWithRelationInput } from './item-flags-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ItemFlagsWhereUniqueInput } from './item-flags-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemFlagsCountAggregateInput } from './item-flags-count-aggregate.input';
import { ItemFlagsAvgAggregateInput } from './item-flags-avg-aggregate.input';
import { ItemFlagsSumAggregateInput } from './item-flags-sum-aggregate.input';
import { ItemFlagsMinAggregateInput } from './item-flags-min-aggregate.input';
import { ItemFlagsMaxAggregateInput } from './item-flags-max-aggregate.input';

@ArgsType()
export class ItemFlagsAggregateArgs {

    @Field(() => ItemFlagsWhereInput, {nullable:true})
    @Type(() => ItemFlagsWhereInput)
    where?: ItemFlagsWhereInput;

    @Field(() => [ItemFlagsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemFlagsOrderByWithRelationInput>;

    @Field(() => ItemFlagsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemFlagsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemFlagsCountAggregateInput, {nullable:true})
    _count?: ItemFlagsCountAggregateInput;

    @Field(() => ItemFlagsAvgAggregateInput, {nullable:true})
    _avg?: ItemFlagsAvgAggregateInput;

    @Field(() => ItemFlagsSumAggregateInput, {nullable:true})
    _sum?: ItemFlagsSumAggregateInput;

    @Field(() => ItemFlagsMinAggregateInput, {nullable:true})
    _min?: ItemFlagsMinAggregateInput;

    @Field(() => ItemFlagsMaxAggregateInput, {nullable:true})
    _max?: ItemFlagsMaxAggregateInput;
}
