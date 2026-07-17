import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapCountAggregate } from './encounter-condition-value-map-count-aggregate.output';
import { EncounterConditionValueMapAvgAggregate } from './encounter-condition-value-map-avg-aggregate.output';
import { EncounterConditionValueMapSumAggregate } from './encounter-condition-value-map-sum-aggregate.output';
import { EncounterConditionValueMapMinAggregate } from './encounter-condition-value-map-min-aggregate.output';
import { EncounterConditionValueMapMaxAggregate } from './encounter-condition-value-map-max-aggregate.output';

@ObjectType()
export class EncounterConditionValueMapGroupBy {

    @Field(() => Int, {nullable:false})
    encounter_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_value_id!: number;

    @Field(() => EncounterConditionValueMapCountAggregate, {nullable:true})
    _count?: Identity<EncounterConditionValueMapCountAggregate>;

    @Field(() => EncounterConditionValueMapAvgAggregate, {nullable:true})
    _avg?: Identity<EncounterConditionValueMapAvgAggregate>;

    @Field(() => EncounterConditionValueMapSumAggregate, {nullable:true})
    _sum?: Identity<EncounterConditionValueMapSumAggregate>;

    @Field(() => EncounterConditionValueMapMinAggregate, {nullable:true})
    _min?: Identity<EncounterConditionValueMapMinAggregate>;

    @Field(() => EncounterConditionValueMapMaxAggregate, {nullable:true})
    _max?: Identity<EncounterConditionValueMapMaxAggregate>;
}
