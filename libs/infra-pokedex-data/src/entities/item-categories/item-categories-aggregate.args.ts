import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemCategoriesWhereInput } from './item-categories-where.input';
import { Type } from 'class-transformer';
import { ItemCategoriesOrderByWithRelationInput } from './item-categories-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemCategoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemCategoriesCountAggregateInput } from './item-categories-count-aggregate.input';
import { ItemCategoriesAvgAggregateInput } from './item-categories-avg-aggregate.input';
import { ItemCategoriesSumAggregateInput } from './item-categories-sum-aggregate.input';
import { ItemCategoriesMinAggregateInput } from './item-categories-min-aggregate.input';
import { ItemCategoriesMaxAggregateInput } from './item-categories-max-aggregate.input';

@ArgsType()
export class ItemCategoriesAggregateArgs {

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    @Type(() => ItemCategoriesWhereInput)
    where?: Identity<ItemCategoriesWhereInput>;

    @Field(() => [ItemCategoriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemCategoriesOrderByWithRelationInput>;

    @Field(() => ItemCategoriesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemCategoriesCountAggregateInput, {nullable:true})
    _count?: Identity<ItemCategoriesCountAggregateInput>;

    @Field(() => ItemCategoriesAvgAggregateInput, {nullable:true})
    _avg?: Identity<ItemCategoriesAvgAggregateInput>;

    @Field(() => ItemCategoriesSumAggregateInput, {nullable:true})
    _sum?: Identity<ItemCategoriesSumAggregateInput>;

    @Field(() => ItemCategoriesMinAggregateInput, {nullable:true})
    _min?: Identity<ItemCategoriesMinAggregateInput>;

    @Field(() => ItemCategoriesMaxAggregateInput, {nullable:true})
    _max?: Identity<ItemCategoriesMaxAggregateInput>;
}
