import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterSlotsCountAggregate } from './encounter-slots-count-aggregate.output';
import { EncounterSlotsAvgAggregate } from './encounter-slots-avg-aggregate.output';
import { EncounterSlotsSumAggregate } from './encounter-slots-sum-aggregate.output';
import { EncounterSlotsMinAggregate } from './encounter-slots-min-aggregate.output';
import { EncounterSlotsMaxAggregate } from './encounter-slots-max-aggregate.output';

@ObjectType()
export class EncounterSlotsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_method_id!: number;

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => Int, {nullable:false})
    rarity!: number;

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
