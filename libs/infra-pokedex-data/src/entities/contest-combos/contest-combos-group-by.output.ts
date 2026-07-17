import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestCombosCountAggregate } from './contest-combos-count-aggregate.output';
import { ContestCombosAvgAggregate } from './contest-combos-avg-aggregate.output';
import { ContestCombosSumAggregate } from './contest-combos-sum-aggregate.output';
import { ContestCombosMinAggregate } from './contest-combos-min-aggregate.output';
import { ContestCombosMaxAggregate } from './contest-combos-max-aggregate.output';

@ObjectType()
export class ContestCombosGroupBy {

    @Field(() => Int, {nullable:false})
    first_move_id!: number;

    @Field(() => Int, {nullable:false})
    second_move_id!: number;

    @Field(() => ContestCombosCountAggregate, {nullable:true})
    _count?: Identity<ContestCombosCountAggregate>;

    @Field(() => ContestCombosAvgAggregate, {nullable:true})
    _avg?: Identity<ContestCombosAvgAggregate>;

    @Field(() => ContestCombosSumAggregate, {nullable:true})
    _sum?: Identity<ContestCombosSumAggregate>;

    @Field(() => ContestCombosMinAggregate, {nullable:true})
    _min?: Identity<ContestCombosMinAggregate>;

    @Field(() => ContestCombosMaxAggregate, {nullable:true})
    _max?: Identity<ContestCombosMaxAggregate>;
}
