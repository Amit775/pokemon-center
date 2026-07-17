import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionsCountAggregate } from './encounter-conditions-count-aggregate.output';
import { EncounterConditionsAvgAggregate } from './encounter-conditions-avg-aggregate.output';
import { EncounterConditionsSumAggregate } from './encounter-conditions-sum-aggregate.output';
import { EncounterConditionsMinAggregate } from './encounter-conditions-min-aggregate.output';
import { EncounterConditionsMaxAggregate } from './encounter-conditions-max-aggregate.output';

@ObjectType()
export class EncounterConditionsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => EncounterConditionsCountAggregate, {nullable:true})
    _count?: Identity<EncounterConditionsCountAggregate>;

    @Field(() => EncounterConditionsAvgAggregate, {nullable:true})
    _avg?: Identity<EncounterConditionsAvgAggregate>;

    @Field(() => EncounterConditionsSumAggregate, {nullable:true})
    _sum?: Identity<EncounterConditionsSumAggregate>;

    @Field(() => EncounterConditionsMinAggregate, {nullable:true})
    _min?: Identity<EncounterConditionsMinAggregate>;

    @Field(() => EncounterConditionsMaxAggregate, {nullable:true})
    _max?: Identity<EncounterConditionsMaxAggregate>;
}
