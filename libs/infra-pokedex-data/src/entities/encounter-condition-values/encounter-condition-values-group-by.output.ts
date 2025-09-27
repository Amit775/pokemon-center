import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterConditionValuesCountAggregate } from './encounter-condition-values-count-aggregate.output';
import { EncounterConditionValuesAvgAggregate } from './encounter-condition-values-avg-aggregate.output';
import { EncounterConditionValuesSumAggregate } from './encounter-condition-values-sum-aggregate.output';
import { EncounterConditionValuesMinAggregate } from './encounter-condition-values-min-aggregate.output';
import { EncounterConditionValuesMaxAggregate } from './encounter-condition-values-max-aggregate.output';

@ObjectType()
export class EncounterConditionValuesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_default!: number;

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
