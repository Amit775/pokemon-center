import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EncounterConditionsCountAggregate } from './encounter-conditions-count-aggregate.output';
import { EncounterConditionsAvgAggregate } from './encounter-conditions-avg-aggregate.output';
import { EncounterConditionsSumAggregate } from './encounter-conditions-sum-aggregate.output';
import { EncounterConditionsMinAggregate } from './encounter-conditions-min-aggregate.output';
import { EncounterConditionsMaxAggregate } from './encounter-conditions-max-aggregate.output';

@ObjectType()
export class AggregateEncounterConditions {

    @Field(() => EncounterConditionsCountAggregate, {nullable:true})
    _count?: EncounterConditionsCountAggregate;

    @Field(() => EncounterConditionsAvgAggregate, {nullable:true})
    _avg?: EncounterConditionsAvgAggregate;

    @Field(() => EncounterConditionsSumAggregate, {nullable:true})
    _sum?: EncounterConditionsSumAggregate;

    @Field(() => EncounterConditionsMinAggregate, {nullable:true})
    _min?: EncounterConditionsMinAggregate;

    @Field(() => EncounterConditionsMaxAggregate, {nullable:true})
    _max?: EncounterConditionsMaxAggregate;
}
