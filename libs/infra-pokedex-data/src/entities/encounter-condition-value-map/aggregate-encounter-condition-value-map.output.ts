import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapCountAggregate } from './encounter-condition-value-map-count-aggregate.output';
import { EncounterConditionValueMapAvgAggregate } from './encounter-condition-value-map-avg-aggregate.output';
import { EncounterConditionValueMapSumAggregate } from './encounter-condition-value-map-sum-aggregate.output';
import { EncounterConditionValueMapMinAggregate } from './encounter-condition-value-map-min-aggregate.output';
import { EncounterConditionValueMapMaxAggregate } from './encounter-condition-value-map-max-aggregate.output';

@ObjectType()
export class AggregateEncounterConditionValueMap {

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
