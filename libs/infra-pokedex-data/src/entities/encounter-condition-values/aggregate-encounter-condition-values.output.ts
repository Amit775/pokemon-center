import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EncounterConditionValuesCountAggregate } from './encounter-condition-values-count-aggregate.output';
import { EncounterConditionValuesAvgAggregate } from './encounter-condition-values-avg-aggregate.output';
import { EncounterConditionValuesSumAggregate } from './encounter-condition-values-sum-aggregate.output';
import { EncounterConditionValuesMinAggregate } from './encounter-condition-values-min-aggregate.output';
import { EncounterConditionValuesMaxAggregate } from './encounter-condition-values-max-aggregate.output';

@ObjectType()
export class AggregateEncounterConditionValues {

    @Field(() => EncounterConditionValuesCountAggregate, {nullable:true})
    _count?: EncounterConditionValuesCountAggregate;

    @Field(() => EncounterConditionValuesAvgAggregate, {nullable:true})
    _avg?: EncounterConditionValuesAvgAggregate;

    @Field(() => EncounterConditionValuesSumAggregate, {nullable:true})
    _sum?: EncounterConditionValuesSumAggregate;

    @Field(() => EncounterConditionValuesMinAggregate, {nullable:true})
    _min?: EncounterConditionValuesMinAggregate;

    @Field(() => EncounterConditionValuesMaxAggregate, {nullable:true})
    _max?: EncounterConditionValuesMaxAggregate;
}
