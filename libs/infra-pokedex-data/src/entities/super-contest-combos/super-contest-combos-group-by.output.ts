import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { SuperContestCombosCountAggregate } from './super-contest-combos-count-aggregate.output';
import { SuperContestCombosAvgAggregate } from './super-contest-combos-avg-aggregate.output';
import { SuperContestCombosSumAggregate } from './super-contest-combos-sum-aggregate.output';
import { SuperContestCombosMinAggregate } from './super-contest-combos-min-aggregate.output';
import { SuperContestCombosMaxAggregate } from './super-contest-combos-max-aggregate.output';

@ObjectType()
export class SuperContestCombosGroupBy {

    @Field(() => Int, {nullable:false})
    first_move_id!: number;

    @Field(() => Int, {nullable:false})
    second_move_id!: number;

    @Field(() => SuperContestCombosCountAggregate, {nullable:true})
    _count?: Identity<SuperContestCombosCountAggregate>;

    @Field(() => SuperContestCombosAvgAggregate, {nullable:true})
    _avg?: Identity<SuperContestCombosAvgAggregate>;

    @Field(() => SuperContestCombosSumAggregate, {nullable:true})
    _sum?: Identity<SuperContestCombosSumAggregate>;

    @Field(() => SuperContestCombosMinAggregate, {nullable:true})
    _min?: Identity<SuperContestCombosMinAggregate>;

    @Field(() => SuperContestCombosMaxAggregate, {nullable:true})
    _max?: Identity<SuperContestCombosMaxAggregate>;
}
