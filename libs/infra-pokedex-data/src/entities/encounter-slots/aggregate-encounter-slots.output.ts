import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EncounterSlotsCountAggregate } from './encounter-slots-count-aggregate.output';
import { EncounterSlotsAvgAggregate } from './encounter-slots-avg-aggregate.output';
import { EncounterSlotsSumAggregate } from './encounter-slots-sum-aggregate.output';
import { EncounterSlotsMinAggregate } from './encounter-slots-min-aggregate.output';
import { EncounterSlotsMaxAggregate } from './encounter-slots-max-aggregate.output';

@ObjectType()
export class AggregateEncounterSlots {

    @Field(() => EncounterSlotsCountAggregate, {nullable:true})
    _count?: EncounterSlotsCountAggregate;

    @Field(() => EncounterSlotsAvgAggregate, {nullable:true})
    _avg?: EncounterSlotsAvgAggregate;

    @Field(() => EncounterSlotsSumAggregate, {nullable:true})
    _sum?: EncounterSlotsSumAggregate;

    @Field(() => EncounterSlotsMinAggregate, {nullable:true})
    _min?: EncounterSlotsMinAggregate;

    @Field(() => EncounterSlotsMaxAggregate, {nullable:true})
    _max?: EncounterSlotsMaxAggregate;
}
