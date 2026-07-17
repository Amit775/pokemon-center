import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersUncheckedCreateNestedManyWithoutEncounterSlotInput } from '../encounters/encounters-unchecked-create-nested-many-without-encounter-slot.input';

@InputType()
export class EncounterSlotsUncheckedCreateInput {

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

    @Field(() => EncountersUncheckedCreateNestedManyWithoutEncounterSlotInput, {nullable:true})
    encounters?: Identity<EncountersUncheckedCreateNestedManyWithoutEncounterSlotInput>;
}
