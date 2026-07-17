import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapUncheckedUpdateManyWithoutEncounterNestedInput } from '../encounter-condition-value-map/encounter-condition-value-map-unchecked-update-many-without-encounter-nested.input';

@InputType()
export class EncountersUncheckedUpdateWithoutLocationAreaInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    version_id?: number;

    @Field(() => Int, {nullable:true})
    encounter_slot_id?: number;

    @Field(() => Int, {nullable:true})
    pokemon_id?: number;

    @Field(() => Int, {nullable:true})
    min_level?: number;

    @Field(() => Int, {nullable:true})
    max_level?: number;

    @Field(() => EncounterConditionValueMapUncheckedUpdateManyWithoutEncounterNestedInput, {nullable:true})
    conditionValueMap?: Identity<EncounterConditionValueMapUncheckedUpdateManyWithoutEncounterNestedInput>;
}
