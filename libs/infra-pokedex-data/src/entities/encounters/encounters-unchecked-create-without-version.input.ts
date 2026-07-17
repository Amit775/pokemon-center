import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapUncheckedCreateNestedManyWithoutEncounterInput } from '../encounter-condition-value-map/encounter-condition-value-map-unchecked-create-nested-many-without-encounter.input';

@InputType()
export class EncountersUncheckedCreateWithoutVersionInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    location_area_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_slot_id!: number;

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    min_level!: number;

    @Field(() => Int, {nullable:false})
    max_level!: number;

    @Field(() => EncounterConditionValueMapUncheckedCreateNestedManyWithoutEncounterInput, {nullable:true})
    conditionValueMap?: Identity<EncounterConditionValueMapUncheckedCreateNestedManyWithoutEncounterInput>;
}
