import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
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
    _count?: EncounterConditionValueMapCountAggregate;

    @Field(() => EncounterConditionValueMapAvgAggregate, {nullable:true})
    _avg?: EncounterConditionValueMapAvgAggregate;

    @Field(() => EncounterConditionValueMapSumAggregate, {nullable:true})
    _sum?: EncounterConditionValueMapSumAggregate;

    @Field(() => EncounterConditionValueMapMinAggregate, {nullable:true})
    _min?: EncounterConditionValueMapMinAggregate;

    @Field(() => EncounterConditionValueMapMaxAggregate, {nullable:true})
    _max?: EncounterConditionValueMapMaxAggregate;
}
