import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemCategoriesCountAggregate } from './item-categories-count-aggregate.output';
import { ItemCategoriesAvgAggregate } from './item-categories-avg-aggregate.output';
import { ItemCategoriesSumAggregate } from './item-categories-sum-aggregate.output';
import { ItemCategoriesMinAggregate } from './item-categories-min-aggregate.output';
import { ItemCategoriesMaxAggregate } from './item-categories-max-aggregate.output';

@ObjectType()
export class AggregateItemCategories {

    @Field(() => ItemCategoriesCountAggregate, {nullable:true})
    _count?: Identity<ItemCategoriesCountAggregate>;

    @Field(() => ItemCategoriesAvgAggregate, {nullable:true})
    _avg?: Identity<ItemCategoriesAvgAggregate>;

    @Field(() => ItemCategoriesSumAggregate, {nullable:true})
    _sum?: Identity<ItemCategoriesSumAggregate>;

    @Field(() => ItemCategoriesMinAggregate, {nullable:true})
    _min?: Identity<ItemCategoriesMinAggregate>;

    @Field(() => ItemCategoriesMaxAggregate, {nullable:true})
    _max?: Identity<ItemCategoriesMaxAggregate>;
}
