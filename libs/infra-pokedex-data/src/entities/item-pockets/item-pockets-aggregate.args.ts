import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemPocketsWhereInput } from './item-pockets-where.input';
import { Type } from 'class-transformer';
import { ItemPocketsOrderByWithRelationInput } from './item-pockets-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemPocketsWhereUniqueInput } from './item-pockets-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemPocketsCountAggregateInput } from './item-pockets-count-aggregate.input';
import { ItemPocketsAvgAggregateInput } from './item-pockets-avg-aggregate.input';
import { ItemPocketsSumAggregateInput } from './item-pockets-sum-aggregate.input';
import { ItemPocketsMinAggregateInput } from './item-pockets-min-aggregate.input';
import { ItemPocketsMaxAggregateInput } from './item-pockets-max-aggregate.input';

@ArgsType()
export class ItemPocketsAggregateArgs {

    @Field(() => ItemPocketsWhereInput, {nullable:true})
    @Type(() => ItemPocketsWhereInput)
    where?: Identity<ItemPocketsWhereInput>;

    @Field(() => [ItemPocketsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemPocketsOrderByWithRelationInput>;

    @Field(() => ItemPocketsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemPocketsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemPocketsCountAggregateInput, {nullable:true})
    _count?: Identity<ItemPocketsCountAggregateInput>;

    @Field(() => ItemPocketsAvgAggregateInput, {nullable:true})
    _avg?: Identity<ItemPocketsAvgAggregateInput>;

    @Field(() => ItemPocketsSumAggregateInput, {nullable:true})
    _sum?: Identity<ItemPocketsSumAggregateInput>;

    @Field(() => ItemPocketsMinAggregateInput, {nullable:true})
    _min?: Identity<ItemPocketsMinAggregateInput>;

    @Field(() => ItemPocketsMaxAggregateInput, {nullable:true})
    _max?: Identity<ItemPocketsMaxAggregateInput>;
}
