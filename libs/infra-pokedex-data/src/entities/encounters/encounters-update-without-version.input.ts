import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasUpdateOneRequiredWithoutEncountersNestedInput } from '../location-areas/location-areas-update-one-required-without-encounters-nested.input';
import { EncounterSlotsUpdateOneRequiredWithoutEncountersNestedInput } from '../encounter-slots/encounter-slots-update-one-required-without-encounters-nested.input';
import { PokemonUpdateOneRequiredWithoutEncountersNestedInput } from '../pokemon/pokemon-update-one-required-without-encounters-nested.input';
import { EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput } from '../encounter-condition-value-map/encounter-condition-value-map-update-many-without-encounter-nested.input';

@InputType()
export class EncountersUpdateWithoutVersionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    min_level?: number;

    @Field(() => Int, {nullable:true})
    max_level?: number;

    @Field(() => LocationAreasUpdateOneRequiredWithoutEncountersNestedInput, {nullable:true})
    locationArea?: Identity<LocationAreasUpdateOneRequiredWithoutEncountersNestedInput>;

    @Field(() => EncounterSlotsUpdateOneRequiredWithoutEncountersNestedInput, {nullable:true})
    encounterSlot?: Identity<EncounterSlotsUpdateOneRequiredWithoutEncountersNestedInput>;

    @Field(() => PokemonUpdateOneRequiredWithoutEncountersNestedInput, {nullable:true})
    pokemon?: Identity<PokemonUpdateOneRequiredWithoutEncountersNestedInput>;

    @Field(() => EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput, {nullable:true})
    conditionValueMap?: Identity<EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput>;
}
