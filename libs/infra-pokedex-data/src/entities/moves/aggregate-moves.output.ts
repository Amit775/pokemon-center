import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCountAggregate } from './moves-count-aggregate.output';
import { MovesAvgAggregate } from './moves-avg-aggregate.output';
import { MovesSumAggregate } from './moves-sum-aggregate.output';
import { MovesMinAggregate } from './moves-min-aggregate.output';
import { MovesMaxAggregate } from './moves-max-aggregate.output';

@ObjectType()
export class AggregateMoves {

    @Field(() => MovesCountAggregate, {nullable:true})
    _count?: Identity<MovesCountAggregate>;

    @Field(() => MovesAvgAggregate, {nullable:true})
    _avg?: Identity<MovesAvgAggregate>;

    @Field(() => MovesSumAggregate, {nullable:true})
    _sum?: Identity<MovesSumAggregate>;

    @Field(() => MovesMinAggregate, {nullable:true})
    _min?: Identity<MovesMinAggregate>;

    @Field(() => MovesMaxAggregate, {nullable:true})
    _max?: Identity<MovesMaxAggregate>;
}
