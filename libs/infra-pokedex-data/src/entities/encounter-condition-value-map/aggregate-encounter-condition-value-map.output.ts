import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EncounterConditionValueMapCountAggregate } from './encounter-condition-value-map-count-aggregate.output';
import { EncounterConditionValueMapAvgAggregate } from './encounter-condition-value-map-avg-aggregate.output';
import { EncounterConditionValueMapSumAggregate } from './encounter-condition-value-map-sum-aggregate.output';
import { EncounterConditionValueMapMinAggregate } from './encounter-condition-value-map-min-aggregate.output';
import { EncounterConditionValueMapMaxAggregate } from './encounter-condition-value-map-max-aggregate.output';

@ObjectType()
export class AggregateEncounterConditionValueMap {

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
