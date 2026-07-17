import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsCountAggregate } from './encounter-slots-count-aggregate.output';
import { EncounterSlotsAvgAggregate } from './encounter-slots-avg-aggregate.output';
import { EncounterSlotsSumAggregate } from './encounter-slots-sum-aggregate.output';
import { EncounterSlotsMinAggregate } from './encounter-slots-min-aggregate.output';
import { EncounterSlotsMaxAggregate } from './encounter-slots-max-aggregate.output';

@ObjectType()
export class AggregateEncounterSlots {

    @Field(() => EncounterSlotsCountAggregate, {nullable:true})
    _count?: Identity<EncounterSlotsCountAggregate>;

    @Field(() => EncounterSlotsAvgAggregate, {nullable:true})
    _avg?: Identity<EncounterSlotsAvgAggregate>;

    @Field(() => EncounterSlotsSumAggregate, {nullable:true})
    _sum?: Identity<EncounterSlotsSumAggregate>;

    @Field(() => EncounterSlotsMinAggregate, {nullable:true})
    _min?: Identity<EncounterSlotsMinAggregate>;

    @Field(() => EncounterSlotsMaxAggregate, {nullable:true})
    _max?: Identity<EncounterSlotsMaxAggregate>;
}
