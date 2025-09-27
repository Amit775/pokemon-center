import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MoveMetaCategoriesCountAggregate } from './move-meta-categories-count-aggregate.output';
import { MoveMetaCategoriesAvgAggregate } from './move-meta-categories-avg-aggregate.output';
import { MoveMetaCategoriesSumAggregate } from './move-meta-categories-sum-aggregate.output';
import { MoveMetaCategoriesMinAggregate } from './move-meta-categories-min-aggregate.output';
import { MoveMetaCategoriesMaxAggregate } from './move-meta-categories-max-aggregate.output';

@ObjectType()
export class AggregateMoveMetaCategories {

    @Field(() => MoveMetaCategoriesCountAggregate, {nullable:true})
    _count?: MoveMetaCategoriesCountAggregate;

    @Field(() => MoveMetaCategoriesAvgAggregate, {nullable:true})
    _avg?: MoveMetaCategoriesAvgAggregate;

    @Field(() => MoveMetaCategoriesSumAggregate, {nullable:true})
    _sum?: MoveMetaCategoriesSumAggregate;

    @Field(() => MoveMetaCategoriesMinAggregate, {nullable:true})
    _min?: MoveMetaCategoriesMinAggregate;

    @Field(() => MoveMetaCategoriesMaxAggregate, {nullable:true})
    _max?: MoveMetaCategoriesMaxAggregate;
}
