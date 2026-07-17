import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveBattleStylesCountAggregate } from './move-battle-styles-count-aggregate.output';
import { MoveBattleStylesAvgAggregate } from './move-battle-styles-avg-aggregate.output';
import { MoveBattleStylesSumAggregate } from './move-battle-styles-sum-aggregate.output';
import { MoveBattleStylesMinAggregate } from './move-battle-styles-min-aggregate.output';
import { MoveBattleStylesMaxAggregate } from './move-battle-styles-max-aggregate.output';

@ObjectType()
export class MoveBattleStylesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MoveBattleStylesCountAggregate, {nullable:true})
    _count?: Identity<MoveBattleStylesCountAggregate>;

    @Field(() => MoveBattleStylesAvgAggregate, {nullable:true})
    _avg?: Identity<MoveBattleStylesAvgAggregate>;

    @Field(() => MoveBattleStylesSumAggregate, {nullable:true})
    _sum?: Identity<MoveBattleStylesSumAggregate>;

    @Field(() => MoveBattleStylesMinAggregate, {nullable:true})
    _min?: Identity<MoveBattleStylesMinAggregate>;

    @Field(() => MoveBattleStylesMaxAggregate, {nullable:true})
    _max?: Identity<MoveBattleStylesMaxAggregate>;
}
