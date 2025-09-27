import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCategoriesWhereInput } from './item-categories-where.input';
import { Type } from 'class-transformer';
import { ItemCategoriesOrderByWithRelationInput } from './item-categories-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
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
    where?: ItemCategoriesWhereInput;

    @Field(() => [ItemCategoriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemCategoriesOrderByWithRelationInput>;

    @Field(() => ItemCategoriesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemCategoriesCountAggregateInput, {nullable:true})
    _count?: ItemCategoriesCountAggregateInput;

    @Field(() => ItemCategoriesAvgAggregateInput, {nullable:true})
    _avg?: ItemCategoriesAvgAggregateInput;

    @Field(() => ItemCategoriesSumAggregateInput, {nullable:true})
    _sum?: ItemCategoriesSumAggregateInput;

    @Field(() => ItemCategoriesMinAggregateInput, {nullable:true})
    _min?: ItemCategoriesMinAggregateInput;

    @Field(() => ItemCategoriesMaxAggregateInput, {nullable:true})
    _max?: ItemCategoriesMaxAggregateInput;
}
