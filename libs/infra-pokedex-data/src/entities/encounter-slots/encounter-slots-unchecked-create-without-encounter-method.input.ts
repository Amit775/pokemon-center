import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncountersUncheckedCreateNestedManyWithoutEncounterSlotInput } from '../encounters/encounters-unchecked-create-nested-many-without-encounter-slot.input';

@InputType()
export class EncounterSlotsUncheckedCreateWithoutEncounterMethodInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => EncountersUncheckedCreateNestedManyWithoutEncounterSlotInput, {nullable:true})
    encounters?: EncountersUncheckedCreateNestedManyWithoutEncounterSlotInput;
}
