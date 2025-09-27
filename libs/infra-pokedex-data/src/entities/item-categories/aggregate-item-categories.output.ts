import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ItemCategoriesCountAggregate } from './item-categories-count-aggregate.output';
import { ItemCategoriesAvgAggregate } from './item-categories-avg-aggregate.output';
import { ItemCategoriesSumAggregate } from './item-categories-sum-aggregate.output';
import { ItemCategoriesMinAggregate } from './item-categories-min-aggregate.output';
import { ItemCategoriesMaxAggregate } from './item-categories-max-aggregate.output';

@ObjectType()
export class AggregateItemCategories {

    @Field(() => ItemCategoriesCountAggregate, {nullable:true})
    _count?: ItemCategoriesCountAggregate;

    @Field(() => ItemCategoriesAvgAggregate, {nullable:true})
    _avg?: ItemCategoriesAvgAggregate;

    @Field(() => ItemCategoriesSumAggregate, {nullable:true})
    _sum?: ItemCategoriesSumAggregate;

    @Field(() => ItemCategoriesMinAggregate, {nullable:true})
    _min?: ItemCategoriesMinAggregate;

    @Field(() => ItemCategoriesMaxAggregate, {nullable:true})
    _max?: ItemCategoriesMaxAggregate;
}
