import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersUncheckedUpdateManyWithoutEncounterSlotNestedInput } from '../encounters/encounters-unchecked-update-many-without-encounter-slot-nested.input';

@InputType()
export class EncounterSlotsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    version_group_id?: number;

    @Field(() => Int, {nullable:true})
    encounter_method_id?: number;

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => Int, {nullable:true})
    rarity?: number;

    @Field(() => EncountersUncheckedUpdateManyWithoutEncounterSlotNestedInput, {nullable:true})
    encounters?: Identity<EncountersUncheckedUpdateManyWithoutEncounterSlotNestedInput>;
}
