import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesCountAggregate } from './encounter-condition-values-count-aggregate.output';
import { EncounterConditionValuesAvgAggregate } from './encounter-condition-values-avg-aggregate.output';
import { EncounterConditionValuesSumAggregate } from './encounter-condition-values-sum-aggregate.output';
import { EncounterConditionValuesMinAggregate } from './encounter-condition-values-min-aggregate.output';
import { EncounterConditionValuesMaxAggregate } from './encounter-condition-values-max-aggregate.output';

@ObjectType()
export class AggregateEncounterConditionValues {

    @Field(() => EncounterConditionValuesCountAggregate, {nullable:true})
    _count?: Identity<EncounterConditionValuesCountAggregate>;

    @Field(() => EncounterConditionValuesAvgAggregate, {nullable:true})
    _avg?: Identity<EncounterConditionValuesAvgAggregate>;

    @Field(() => EncounterConditionValuesSumAggregate, {nullable:true})
    _sum?: Identity<EncounterConditionValuesSumAggregate>;

    @Field(() => EncounterConditionValuesMinAggregate, {nullable:true})
    _min?: Identity<EncounterConditionValuesMinAggregate>;

    @Field(() => EncounterConditionValuesMaxAggregate, {nullable:true})
    _max?: Identity<EncounterConditionValuesMaxAggregate>;
}
