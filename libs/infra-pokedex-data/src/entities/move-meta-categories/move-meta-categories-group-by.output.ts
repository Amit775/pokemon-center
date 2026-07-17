import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaCategoriesCountAggregate } from './move-meta-categories-count-aggregate.output';
import { MoveMetaCategoriesAvgAggregate } from './move-meta-categories-avg-aggregate.output';
import { MoveMetaCategoriesSumAggregate } from './move-meta-categories-sum-aggregate.output';
import { MoveMetaCategoriesMinAggregate } from './move-meta-categories-min-aggregate.output';
import { MoveMetaCategoriesMaxAggregate } from './move-meta-categories-max-aggregate.output';

@ObjectType()
export class MoveMetaCategoriesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MoveMetaCategoriesCountAggregate, {nullable:true})
    _count?: Identity<MoveMetaCategoriesCountAggregate>;

    @Field(() => MoveMetaCategoriesAvgAggregate, {nullable:true})
    _avg?: Identity<MoveMetaCategoriesAvgAggregate>;

    @Field(() => MoveMetaCategoriesSumAggregate, {nullable:true})
    _sum?: Identity<MoveMetaCategoriesSumAggregate>;

    @Field(() => MoveMetaCategoriesMinAggregate, {nullable:true})
    _min?: Identity<MoveMetaCategoriesMinAggregate>;

    @Field(() => MoveMetaCategoriesMaxAggregate, {nullable:true})
    _max?: Identity<MoveMetaCategoriesMaxAggregate>;
}
